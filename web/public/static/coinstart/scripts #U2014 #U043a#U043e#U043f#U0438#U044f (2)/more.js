var sectionGet = "#section-get";
var sectionSend = "#section-send";
var currentWay = [];
var notify_hold = [0, 0];
var changed_pay = 1;
let ps_hold = [{'city': null, 'id': null}, {'city': null, 'id': null}];

$(function () {
    try {
        currentWay = api.currentWay;
        //Fill Banks
        fillBanks();
    } catch (e) {
    }
    //Materialize init
    materializeInit();
    //Some fixed
    //someFixed();
    //Filter currency
    filterPaySystems();
    // Calculate claim time
    claimTimeCalculate();

    try {
        $(sectionSend + " .pay-select-li[data-pay-id='" + currentWay[0] + "']").addClass('active');
        $(sectionGet + " .pay-select-li[data-pay-id='" + currentWay[1] + "']").addClass('active');
        courseAndMinimalsUpdate();
        createFromTo();
        getPair(1);
        getPair(2);
        getReserves();
        getReviews();
    } catch (e) {

    }
    try {
        copyHandler();
    } catch (e) {}
    // clear wrap
    $(".f_unlock.load-animate").removeClass("load-animate");
    $(".vTimer__bl").css("display", "inline-block");



    //При выборе направления и платёжной системы
    $(".pay-select-li").on("click", function () {
        var windowWidth = $(window).width();

        var way = $(this).attr("data-way");
        var ps = $(this).attr("data-pay-id");

        changePaysystems(way, ps);
    });

    $(".in-text").keyup(function () {
        //$(".in-text").val($(".in-text").val().replace(/,/, '.'));
        //$(".in-text").val($(".in-text").val().replace(/ /g, ''));
        calculate(1);
        changed_pay = 1;
    });
    $(".to-text").keyup(function () {
        //$(".to-text").val($(".to-text").val().replace(/,/, '.'));
        //$(".to-text").val($(".to-text").val().replace(/ /g, ''));
        calculate(2);
        changed_pay = 2;
    });

    $(".send-find").on("keyup", function () {
        let word = $(this).val().replace(/ /g, '').toLowerCase();
        let re = "^" + $(this).val().replace(/ /g, '').toLowerCase();
        if (word.length != 0) {
            $(".delete-find-send").show(300);
            $(".icon-find-f-send").hide(300);
            $(sectionSend + " .pay-select-li").addClass("find-hide");
        } else {
            $(".delete-find-send").hide(300);
            $(".icon-find-f-send").show(300);
            $(sectionSend + " .pay-select-li").removeClass("find-hide");
        }

        let list_send = $(sectionSend + " .pay-select-li .exchange__name");

        for (let i = 0; i < list_send.length; i++) {
            let vid = $(list_send[i]).parent().parent().attr("data-pay-id");
            let keys = $(list_send[i]).text().replace(/ /g, '').toLowerCase();
            if (keys.match(re) != null) $(sectionSend + " .pay-select-li[data-pay-id=" + vid + "]").removeClass("find-hide");
        }
    });
    $(".get-find").on("keyup", function () {
        let word = $(this).val().replace(/ /g, '').toLowerCase();
        let re = "^" + $(this).val().replace(/ /g, '').toLowerCase();
        if (word.length != 0) {
            $(".delete-find-get").show(300);
            $(".icon-find-f-get").hide(300);
            $(sectionGet + " .pay-select-li").addClass("find-hide");
        } else {
            $(".delete-find-get").hide(300);
            $(".icon-find-f-get").show(300);
            $(sectionGet + " .pay-select-li").removeClass("find-hide");
        }

        let list_get = $(sectionGet + " .pay-select-li .exchange__name");

        for (let i = 0; i < list_get.length; i++) {
            let vid = $(list_get[i]).parent().parent().attr("data-pay-id");
            let keys = $(list_get[i]).text().replace(/ /g, '').toLowerCase();
            if (keys.match(re) != null) $(sectionGet + " .pay-select-li[data-pay-id=" + vid + "]").removeClass("find-hide");
        }
    });

});

function changePaysystems(way, ps){
    if (way == 1) {

        if (ps == currentWay[0]) return;

        currentWay[0] = (+ps);
        notify_hold[0] = 0;

        $.get({
            url: `/api?endpoint=${'ways/' + ps}`,
            success: function (data) {
                currentWay[0] = (+ps);

                api.toDirections = data;

                //$(".bank-curr-to").text(data.firstWay['bank_to__currency_id__code']);
                createFromTo();

                //получаем пару
                getPair(1);
                if ($.inArray(currentWay[1], data) === -1) {
                    currentWay[1] = mayBeTheSamePs(currentWay[1], data);
                    getPair(2);
                }
                else {
                    changePs(2, currentWay[1]);
                }
                courseAndMinimalsUpdate();
            }
        });

    } else {
        if($.inArray(+ps, api.toDirections) === -1){
            psObj = simpleGetPs(+ps);
            if (psObj.group !== null){
                pss = getPssByGroup(psObj.group);
                for (var _pss in pss){
                    if($.inArray(pss[_pss].id, api.toDirections) !== -1){
                        ps = pss[_pss].id;
                        break;
                    }
                }
            }
            else
            return;
        }
        if (ps == currentWay[1]) return;

        currentWay[1] = (+ps);
        notify_hold[1] = 0;

        //получаем пару
        courseAndMinimalsUpdate();
        getPair(2);
    }
    $(".select_hidden").removeClass("active");
    deleteErrors();
    $('.dropdown-trigger').dropdown('close');
}


function changeRefOutput(refsel) {
    $.get({
        url: `/api?endpoint=${'get_ps_inputs'}`,
        data: {
            ps: refsel
        },
        success: function (data) {
            try {
                var img = $(".select_item[data-bank-id='"+ refsel +"'] .img img").attr("src");
                var psName = $(".select_item[data-bank-id='"+ refsel +"'] .text p").text();
                $(".select_active .img img").attr("src", img);
                $(".select_active p").text(psName);
                $("#ref-inputs").html(createInputRef(data));

                $(".select_item").removeClass("active");
                $(".select_item[data-bank-id='"+ refsel +"']").addClass("active");

                $('.dropdown-trigger').dropdown('close');
            } catch (error) {
                $("#ref-inputs").html('');
            }
            
            try {
                $('.tooltipped').tooltip();
            } catch (e) {
            }
            return;
        }
    });
}

//вывод реферальной суммы
function referalOutput() {
    var refsel = $(".select_item.active").attr("data-bank-id");

    var paydata = "ps=" + refsel;
    to_requis = [];

    payinputs = $("#ref-inputs .pay-input input");

    for (var i = 0; i < payinputs.length; i++) {
        paydata += "&to_requis" + (i + 1) + "=" + encodeURIComponent($(payinputs[i]).val());
        to_requis.push($(payinputs[i]).val());
        //console.log(payinputs[i]);
    }

    //paydata +="&g-recaptcha-response="+grecaptcha.getResponse(claim__captcha);
    deleteErrors();
    let to_requis1 = $('#to_requis1 input').val()
    if ( refsel == '5' ){
        if( /^([a-zA-Z0-9]{28,100})$/.test(to_requis1) == false ){
            $("#to_requis1").addClass("error-input");
            $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Bitcoin</div>");
            return false;
        }
    }else if( refsel == '57' ){
        if( /^([a-zA-Z0-9]{3,100})$/.test(to_requis1) == false ){
            $("#to_requis1").addClass("error-input");
            $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Tether (ERC20)</div>");
            return false;
        }
    }else if( refsel == '55' ){
        if( /^([a-zA-Z0-9]{3,100})$/.test(to_requis1) == false ){
            $("#to_requis1").addClass("error-input");
            $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Tether (TRC20)</div>");
            return false;
        }
    }

    $.post({
        url: '',
        data: paydata,
        success: function (data) {
            if (data["response"] == "error") {
                showErrors(data);
            } else if (data["response"] == "success") {
                deleteErrors();
                $("#summ-success").css("display", "");
                setTimeout(function(){
                    location.href = "/account/claims";
                }, 2000);
            }
        }
    });
}

function courseAndMinimalsUpdate(onlyCourse=false) {
    if (currentWay.length != 2) return;
    $.get({
        url: `/api?endpoint=${'pair/' + currentWay[0] + '/' + currentWay[1]}`,
        success: function (data) {
            console.log("Test data:", data)
            api.pairData = data;
            getCourse();

            try{
                if (!foreignSiteIsActivated){
                    foreignSiteActivate();
                    foreignSiteIsActivated = true;
                }
                else{
                    calculate(changed_pay);
                    if (!onlyCourse)
                    getMins();
                }
            }
            catch(e){
                calculate(changed_pay);
                if (!onlyCourse)
                getMins();
            }

        }
    });
}

function getPair(way) {
    changePs(way, currentWay[way - 1]);
    showNotify(way, currentWay[way - 1]);
    getCourse();

    try{
        var ps1 = getPs(currentWay[0], true);
        var ps2 = getPs(currentWay[1], true);
    } catch (e) {}
}

function getReserves() {
    $.get({
        url: `/api?endpoint=${'getreserves'}`,
        success: function (data) {
            $('.reserves_block').html(CreateReservePs(data));
            /*
            for (var reserve in data.reserves) {
                $("p[data-reserve-id='" + reserve + "'] span:first-child").html(data.reserves[reserve]);
            }
            */
        }
    });
}


function CreateReservePs(data){
	reserve_tpl = '';
    for ( _ in api.paySystems ) {
        let res_id = api.paySystems[_].id;
        let res_curr = api.paySystems[_].currency;
        console.log(res_id)
        console.log(res_curr )
        console.log()
        //$('.reserves_block').html(reserves);

        if( $('#section-get .pay-select-li[data-pay-id=' + res_id +']').length ){
			reserve_tpl +=  '<div class="item">' +
                            '    <div class="left">' +
                            '    <div class="img">' +
                            '        <span><img src="' + $('#section-get .pay-select-li[data-pay-id=' + res_id +'] .img span img').attr("src") + '" alt=""/></span>' +
                            '    </div>' +
                            '    </div>' +
                            '    <div class="right">' +
                            '    <p class="name">'+ $('#section-get .pay-select-li[data-pay-id=' + res_id +'] .text p').text() +'</p>' +
                            '    <p class="size" data-reserve-id="'+ $('#section-get .pay-select-li[data-pay-id=' + res_id +']').text() +'">' +
                            '    <span>' + data.reserves[res_id] + '</span> ' +
                            '    <span style="font-weight: 800;">'+ res_curr +'</span></p>' +
                            '    </div>' +
                            '</div>';
		}
    }
    return reserve_tpl;
}


function getReviews() {
    $.get({
        url: `/api?endpoint=${'reviews'}`,
        success: function (data) {
            var reviewsCount = data.summary_count - data.summary_count%100;
            reviewsCount = reviewsCount + '';
            var three_counter = 1,
                newReviewCount = '';
            for(var i=reviewsCount.length-1;i>-1;i--){
                newReviewCount = reviewsCount[i] + newReviewCount;
                if (three_counter == 3) {
                    three_counter = 1;
                    newReviewCount = ' ' + newReviewCount;
                }
                three_counter++;
            }
            $('.count_load').html(newReviewCount);
            $('.count_load.load-animate').removeClass('load-animate');
            for (var i=0;i<3;i++){
                console.log(data.reviews[i]);
                $("#review"+ (i+1)+' .name p').html(data.reviews[i][1]);
                $("#review"+ (i+1)+' .text').html(data.reviews[i][2]);
                $("#review"+ (i+1)+' .date').html(data.reviews[i][7]);
            }
            $('.review_load.load-animate').removeClass('load-animate');
        }
    });
}

function changePs(way, ps) {
    console.log(way, ps)
    var psystem = {};
    if (way == 1) {
        psystem = getPs(ps, true);
        createGroupFields(1, psystem.map);
        $("#bank-name-in").html(psystem.paySystem['name_'+lang]);
        $(".mini-in-logo").attr("src", "/media/" + psystem.paySystem.logoWithoutBackground);
        $(sectionSend + " .pay-select-li[data-way='1']").removeClass('active');
        $(sectionSend + " .pay-select-li[data-pay-id='" + getActivePaySystem(1, psystem.paySystem) + "']").addClass('active');

        createInput(psystem.paySystem, way);
        ps_hold[0]['city'] = psystem.paySystem['city'];
        ps_hold[0]['id'] = psystem.paySystem['id'];
        try {
            $('.tooltipped').tooltip();
        } catch (e) {
        }

        return;
    } else if (way == 2) {
        psystem = getPs(ps, true);
        createGroupFields(2, psystem.map);
        $("#bank-name-to").html(psystem.paySystem['name_'+lang]);
        $(".mini-to-logo").attr("src", "/media/" + psystem.paySystem.logoWithoutBackground);
        $(sectionGet + " .pay-select-li[data-way='2']").removeClass('active');
        $(sectionGet + " .pay-select-li[data-pay-id='" + getActivePaySystem(2, psystem.paySystem) + "']").addClass('active');

        //createInput(psystem.paySystem, way);
        ps_hold[1]['city'] = psystem.paySystem['city'];
        ps_hold[1]['id'] = psystem.paySystem['id'];
        if ( ps_hold[0]['city'] == null ){
            createInput(psystem.paySystem, way);
        }else{
            $('#to-inputs').html('');
        }

        try {
            $('.tooltipped').tooltip();
        } catch (e) {
        }

        //$(".select-to-yes .bank-name").text(psystem.name);
    }
}

function getMins() {
    if (api.pairData.minimals.from != 0) {
        changed_pay = 1;
        $(".in-text").val(api.pairData.minimals.from);
        calculate(1);
    } else {
        changed_pay = 2;
        $(".to-text").val(api.pairData.minimals.to);
        calculate(2);
    }
}

function getCourse() {
    var to_bank = getPs(currentWay[1], true);
    var in_bank = getPs(currentWay[0], true);

    if (api.pairData.course >= 1) {
        $("#in-course").html("1 " + in_bank.paySystem.currency);
        $("#to-course").html(roundPs(api.pairData.course, to_bank.paySystem.round) + " " + to_bank.paySystem.currency);
    } else {
        $("#in-course").html(roundPs(1 / api.pairData.course, in_bank.paySystem.round) + " " + in_bank.paySystem.currency);
        $("#to-course").html("1 " + to_bank.paySystem.currency);
    }

    $("#bonus_percent").html(api.pairData.bonus);
}

function createFromTo() {
    $(sectionGet + " .pay-select-li").css("display", "none");
    //находим куда хотим переключиться
    for (var toDirection in api.toDirections) {
        var psSystem = getPs(api.toDirections[toDirection]);
        $(sectionGet + " .pay-select-li[data-pay-id='" + getActivePaySystem(2, psSystem) + "']").css("display", "");
    }
}

function showNotify(way, ps) {
    //уведомление
    var bank = getPs(ps);
    var psName = getFullPsName(bank);

    $('.way_notification').css('display', 'none');
    var wayNotifications_items = api.waysNotifications
    for( i = 0; i < wayNotifications_items.length; i++ ){
        if ( wayNotifications_items[i].bank_in === currentWay[0] && wayNotifications_items[i].bank_to === currentWay[1]){
            console.log('show way notification calc')
            $('.way_notification').css('display','')
            $('.way_notification .way_notification__body').html(wayNotifications_items[i].notify_way);
            $("#notify").modal("close");
            return;
        }
    }

    if (way == 1) {
        if (bank['notify_in_'+lang] != "" && notify_hold[0] != currentWay[0]) {
            notify_hold[0] = currentWay[0];
            $(".pop_up_notify #notify-in .notify-h").html(psName);
            $(".pop_up_notify #notify-in .notify-body").html(bank['notify_in_'+lang]);

            if ($(".pop_up_notify:visible").length == 0) {
                $("#notify").modal("open");
            }
        } else {
            $(".pop_up_notify #notify-in .notify-h").html("");
            $(".pop_up_notify #notify-in .notify-body").html("");
        }
    } else {
        if (bank['notify_to_'+lang] != "" && notify_hold[1] != currentWay[1]) {
            notify_hold[1] = currentWay[1];
            $(".pop_up_notify #notify-to .notify-h").html(psName);
            $(".pop_up_notify #notify-to .notify-body").html(bank['notify_to_'+lang]);
            if ($(".pop_up_notify:visible").length == 0) {
                $("#notify").modal("open");
            }
        } else {
            $(".pop_up_notify #notify-to .notify-h").html("");
            $(".pop_up_notify #notify-to .notify-body").html("");
        }
    }
}

function roundPs(x, n) {
    if (isNaN(x) || isNaN(n)) return false;
    var m = Math.pow(10, n);
    return Math.round(x * m) / m;
}

function calculate(way) {
    var course = api.pairData.course;

    var in_bank = getPs(currentWay[0]);
    var to_bank = getPs(currentWay[1]);


    if (way == 1) {
        var in_text = parseFloat($(".in-text").val());
        $(".to-text").val(roundPs(in_text * course, to_bank.round));
    } else if (way == 2) {
        var to_text = parseFloat($(".to-text").val());
        $(".in-text").val(roundPs(to_text / course, in_bank.round));
    }
}

function copyHandler() {
    $("a.copy-requisite").on("click", function (e) {
        e.preventDefault();
        var copyElement = $(this).attr("data-clipboard-target");
        CopyToClipboard(copyElement);
        $("#" + copyElement).css("background-color", "#FFEB3B");
        setTimeout(() => {$("#" + copyElement).css("background-color", "white");}, 1000);
    });
}

function CopyToClipboard(containerid) {
    window.getSelection().removeAllRanges();
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("Copy");

    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("Copy");
    }
    window.getSelection().removeAllRanges();
}