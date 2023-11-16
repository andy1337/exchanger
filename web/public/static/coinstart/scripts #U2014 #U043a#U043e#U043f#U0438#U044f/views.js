var is_jivo_onload = false;
var groups = { from: {}, to: {} };


$(function () {
    $('.select').on('click', function (event) {
        $(this).toggleClass('select_open');
    });

    var select = {
        class: {
            selected: 'selected'
        },
        Selected: function (block) {
            if (block.attr('checked') == 'checked') {
                var item = block.parents('.select__item')
                item.siblings().removeClass(select.class.selected);
                item.siblings().find('.select__input').removeAttr('checked');
                item.addClass(select.class.selected);
            }
        },
        AddContent: function (block) {
            var inner = block.parents('.select').find('.select__wrap .select__inner');

            inner.html(block.find('.select__inner').html());
        },
        ChangeItem: function (block) {
            var input = block.find('.select__input');

            input.attr('checked', 'checked');
            select.Selected(input);

            select.AddContent(block);
        }
    };

    $('.select').each(function () {
        var itemSelected = $(this).find('.select__item.selected').length == 1 ? $(this).find('.select__item.selected') : $(this).find('.select__item:nth-of-type(1)');

        select.ChangeItem(itemSelected);
    });
    $('.select__item').on('click', function () {
        select.ChangeItem($(this));
    });

    var tabs = {
        class: {
            selected: 'selected'
        },
        selected: {
            nav_item: null,
            item: null
        },
        Select: function (block) {
            if (!block.hasClass(tabs.class.selected)) {
                tabs.selected.nav_item = block.attr('href');
                tabs.selected.item = $(tabs.selected.nav_item);
                block.siblings().removeClass(tabs.class.selected);
                block.addClass(tabs.class.selected);

                tabs.selected.item.siblings().removeClass(tabs.class.selected);
                tabs.selected.item.addClass(tabs.class.selected);
            }
        }
    }

    $('.tabs__nav-item').on('click', function (event) {
        event.preventDefault();
        tabs.Select($(this));
    });
});

function createCurrencyDropdownTpl(id, way, name, cls) {
    return '<li class="currency_dropdown_li ' + cls + '" onclick="changePaysystems(' + way + ', ' + id + ')">' + name + '</li>';
}

function createCityDropdownTpl(id, way, name, cls) {
    return '<li class="city_dropdown_li ' + cls + '" onclick="changePaysystems(' + way + ', ' + id + ')">' + name + '</li>';
}

function createNetworkRadioTpl(id, way, name, checked) {
    return '<p>' +
        '<label onclick="changePaysystems(' + way + ', ' + id + ')">' +
        '  <input class="exchange__input__radio" name="networks_' + way + '" type="radio" value="' + name + '" ' + checked + '>' +
        '  <span>' + name + '</span>' +
        '</label>' +
        '</p>';
}

function createNetworksAndCities(way, currency, map) {
    var networks = map.networks;
    var cities = map.cities;

    if ($.inArray(currency, Object.keys(networks)) !== -1) {
        if (Object.keys(networks[currency]).length !== 0) {
            var networksHtml = '';
            for (var network in networks[currency]) {
                var net = networks[currency][network];
                if (networks[currency][network].active) {
                    networksHtml += createNetworkRadioTpl(net.id, way, api.networks[network].name, 'checked');
                }
                else
                    networksHtml += createNetworkRadioTpl(net.id, way, api.networks[network].name);
            }
            $('.networks_' + way + ' .networks_body').html(networksHtml);
            $('.networks_' + way).css('display', '');
        }
        else $('.networks_' + way).css('display', 'none');
    }
    else $('.networks_' + way).css('display', 'none');
    if ($.inArray(currency, Object.keys(cities)) !== -1) {
        if (Object.keys(cities[currency]).length !== 0) {
            var citiesHtml = '';
            for (var city in cities[currency]) {
                var c = cities[currency][city];
                if (cities[currency][city].active) {
                    $('.cities_' + way + ' .city_active').html(api.cities[city]['name_' + lang]);
                    citiesHtml += createCityDropdownTpl(c.id, way, api.cities[city]['name_' + lang], 'active');
                }
                else
                    citiesHtml += createCityDropdownTpl(c.id, way, api.cities[city]['name_' + lang]);
            }
            $('#cities_' + way).html(citiesHtml);
            $('.cities_' + way).css('display', '');
        }
        else $('.cities_' + way).css('display', 'none');
    }
    else $('.cities_' + way).css('display', 'none');
}

function createGroupFields(way, map) {
    $('.currency_dropdown_' + way).css('display', 'none');
    $('.valuta-' + way + '-raw').css('display', 'none');

    var currencies = map.currency;
    var dropdownHtml = '';

    if (Object.keys(currencies).length == 1) {
        $('.valuta-' + way + '-raw').css('display', '');
        $('.valuta-' + way + '-raw').html(Object.keys(currencies)[0]);
        createNetworksAndCities(way, Object.keys(currencies)[0], map);
    }
    else {

        for (var currency in currencies) {
            if (currencies[currency].active) {
                $('.currency_dropdown_' + way + ' .dropdown-currency-active').html(currency);
                dropdownHtml += createCurrencyDropdownTpl(currencies[currency].id, way, currency, 'active');
                createNetworksAndCities(way, currency, map);
            }
            else
                dropdownHtml += createCurrencyDropdownTpl(currencies[currency].id, way, currency, '');
        }
        $('#currency_dropdown_' + way).html(dropdownHtml);
        $('#currency_dropdown_' + (way + 2)).html(dropdownHtml);
        $('.currency_dropdown_' + way).css('display', '');
    }
}

//создание платежных систем
function fillBanks() {
    console.log(api);
    var paySystems = api.paySystems,
        fromPaySystemsHtml = '',
        toPaySystemsHtml = '',
        reserves = '',
        group_init_from = [],
        group_init_to = [];

    const allowedPaySystems = [5, 4, 55, 57, 110, 6, 85, 59, 27, 26, 30, 29, 74]


    for (var paySystem in paySystems) {
        var id = paySystems[paySystem].id,
                currency = paySystems[paySystem].currency,
                name = paySystems[paySystem]['name_' + lang],
                group = paySystems[paySystem].group,
                logo = paySystems[paySystem].logoWithoutBackground;

            if (group !== null) {
                name = api.groups[group]['name_' + lang];
                logo = api.groups[group].logoWithoutBackground;
            }

            if ($.inArray(id, api.fromUniquePaySystems) !== -1) {
                var paint = true;
                if (group !== null) {
                    if ($.inArray(group, group_init_from) !== -1) paint = false;
                    else {
                        group_init_from.push(group);
                        groups.from[group] = id;
                    }
                }
                
                if (paint) {
                    if (allowedPaySystems.includes(id)) {
                        fromPaySystemsHtml += '<div class="select_item pay-select-li" data-pay-id="' + id + '" data-way="1">' +
                        '    <div class="img">' +
                        '    <span><img src="media/' + logo + '" alt=""/></span>' +
                        '    </div>' +
                        '    <div class="text">' +
                        '    <p>' + name + '</p>' +
                        '    </div>' +
                        '</div>';
                    }
                }
            }
            var paint = true;
            if (group !== null) {
                if ($.inArray(group, group_init_to) !== -1) paint = false;
                else {
                    group_init_to.push(group);
                    groups.to[group] = id;
                }
            }
            if (paint)
                toPaySystemsHtml += '<div class="select_item pay-select-li" data-pay-id="' + id + '" data-way="2">' +
                    '    <div class="img">' +
                    '    <span><img src="media/' + logo + '" alt=""/></span>' +
                    '    </div>' +
                    '    <div class="text">' +
                    '    <p>' + name + '</p>' +
                    '    </div>' +
                    '</div>';

            /*reserves += '<div class="item">' +
                        '    <div class="left">' +
                        '    <div class="img">' +
                        '        <span><img src="/media/'+ logo +'" alt=""/></span>' +
                        '    </div>' +
                        '    </div>' +
                        '    <div class="right">' +
                        '    <p class="name">'+ paySystems[paySystem]['name_'+lang] +'</p>' +
                        '    <p class="size" data-reserve-id="'+ paySystems[paySystem].id +'">' +
                        '    <span></span> ' +
                        '    <span style="font-weight: 800;">'+ paySystems[paySystem].currency +'</span></p>' +
                        '    </div>' +
                        '</div>';*/
    }

    $('#fromPaySystems').html(fromPaySystemsHtml);
    $('#toPaySystems').html(toPaySystemsHtml);
    //$('.reserves_block').html(reserves);
}

function changeExistingInputs(inputs, way, inputsData) {
    var payinputs = null;
    if (way == 1) payinputs = $("#in-inputs .pay-input");
    else payinputs = $("#to-inputs .pay-input");

    for (var i = 0; i < payinputs.length; i++) {
        if (inputs.inputs[i] == undefined) {
            $(payinputs[i]).remove();
            continue;
        }
        inputsData[1].isVisible = inputs.inputs[i].visibleFrom;
        inputsData[2].isVisible = inputs.inputs[i].visibleTo;
        inputsData[1].placeholder = inputs.inputs[i]['placeholder_in_' + lang];
        inputsData[2].placeholder = inputs.inputs[i]['placeholder_to_' + lang];
        if (!inputsData[way].isVisible) {
            $(payinputs[i]).remove();
            continue;
        }
        if (payinputs[i].children[0].children[0].tagName != "INPUT" || inputs.inputs[i].type == 'R') {
            for (var y = i; y < payinputs.length; y++) $(payinputs[y]).remove();
            break;
        }
        var add_label = '';
        var placeholder = inputsData[way].placeholder.split(' от ');
        if (placeholder.length != 1) {
            add_label = 'от ' + placeholder[1];
        }
        inputsData[way].placeholder = placeholder[0].split(',')[0];
        payinputs[i].children[0].children[0].placeholder = inputsData[way].placeholder;
        $(payinputs[i].children[0].children[1]).html(add_label);
        inputsData.indexToGo++;
    }
}

//создание полей в калькуляторе
function createInput(inputs, way) {
    var inputsData = {
        1: {
            typeInput: "in-inputs",
            wayInput: "from",
            inputCalcClass: "active-calc-inputs-in",
            placeholder: "",
            isVisible: false
        },
        2: {
            typeInput: "to-inputs",
            wayInput: "to",
            inputCalcClass: "active-calc-inputs-to",
            placeholder: "",
            isVisible: false
        },
        indexToGo: 1,
        calculatorInputTpl: ""
    };

    changeExistingInputs(inputs, way, inputsData);

    for (var i = (inputsData.indexToGo - 1); i < inputs.inputs.length; i++) {
        console.log(i);
        var input = inputs.inputs[i];
        inputsData[1].isVisible = input.visibleFrom;
        inputsData[2].isVisible = input.visibleTo;
        inputsData[1].placeholder = input['placeholder_in_' + lang];
        inputsData[2].placeholder = input['placeholder_to_' + lang];
        inputsData[1].logoType = "mini-in-logo";
        inputsData[2].logoType = "mini-to-logo";

        if (inputsData[way].isVisible) {
            if (input.type == 'R')
                $("#" + inputsData[way].typeInput).append(createInputRadio(input, way, inputsData));
            else {
                var add_label = '';
                var placeholder = inputsData[way].placeholder.split(' от ');
                if (placeholder.length != 1) {
                    add_label = 'от ' + placeholder[1];
                }

                inputsData[way].placeholder = placeholder[0].split(',')[0];

                $("#" + inputsData[way].typeInput).append('<div class="main_input pay-input small_input">' +
                    '<div class="input__wrap" id="' + inputsData[way].wayInput + '_requis' + inputsData.indexToGo + '">' +
                    '<input type="' + input.type + '" placeholder="' + inputsData[way].placeholder + '"/>' +
                    '<label>' + add_label + '</label>' +
                    '</div>' +
                    '</div>');
            }
            inputsData.indexToGo++;
        }
    }
    return inputsData.calculatorInputTpl;
}

//создание radio button
function createInputRadio(input, way, inputsData) {
    var radioData = inputsData[way].placeholder.split(':');
    var radioObj = {
        header: radioData[0],
        radioInputs: radioData[1].split(','),
        html: ""
    };
    radioObj.html = '<div class="operation__input pay-input input input_md" style="position: relative;">' +
        '<div class="input__wrap radio-inputs" id="' + inputsData[way].wayInput + '_requis' + inputsData.indexToGo + '">' +
        '<div style="font-size: 16px;font-weight: 700; color: #2f3a43; margin-bottom: 5px;">' + radioObj.header + ':</div>';
    for (var radioInput in radioObj.radioInputs) {
        var inputChecked = "";
        // if(radioInput == 0)
        //     inputChecked = "checked";
        radioObj.html += '<p>' +
            '      <label>' +
            '        <input class="exchange__input__radio" name="ps' + input.bank + '" type="radio" ' + inputChecked + ' value="' + radioObj.radioInputs[radioInput] + '"/>' +
            '        <span>' + radioObj.radioInputs[radioInput] + '</span>\n' +
            '      </label>' +
            '    </p>';
    }


    return radioObj.html;
}

//создание inputs для реферальной выплаты
function createInputRef(inputs) {
    var tpl = "";
    var index = 1;

    for (var input in inputs) {
        if (inputs[input].visibleTo) {
            tpl += '<div class="input pay-input" id="to_requis' + index + '">' +
                '   <input type="' + inputs[input].type + '" placeholder="' + inputs[input]['placeholder_to_' + lang] + '">' +
                '</div>';
            index++;
        }
    }

    return tpl;
}

function chatSwitcher(ps1, ps2, isInit) {
    if (!is_jivo_onload) return 0;

    console.log('Check city');
    if (ps1.paySystem.city != null || ps2.paySystem.city != null) {
        try {
            jivo_api.close();
            if (window.jivocb_widget.style.display == 'block' || isInit) {
                setTimeout(function () { jivo_destroy(); }, 1000);
            }
        } catch (e) { console.log('Try to destroy jivo:', e); }
        window.jivocb_widget.style.display = 'none';

        if (window.TalkMeIsInitialized === undefined) {
            console.log('TALKME init');
            initTalkMe();
        }
        else if (window.TalkMeIsInitialized !== true) {
            console.log('TALKME reload');
            try { window.supportAPI.reload(); } catch (e) { }
        }

    } else {
        try {
            jivo_api.close();
            if (!isInit && window.jivocb_widget.style.display == 'none')
                jivo_init();
        } catch (e) { }
        window.jivocb_widget.style.display = 'block';
        if (window.TalkMeIsInitialized === true) {
            window.supportAPI.destroy();
            setTimeout(function () { $("div.online-chat-root-TalkMe").remove(); }, 1000);
        }
    }

}