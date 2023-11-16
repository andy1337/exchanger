$(function () {
    setInterval(function () {
        checkTech();
    },3000);
    try {
        tickTimer();
    }
    catch (e) {}
    setInterval(function () {
        try {
            tickTimer();
        } catch (e) {
        }
                }, 1000);
});

function tickTimer(){
    var oldTime = techTime;
    if(oldTime<=0) {
        $("#tech").css("display","none");
        $("#time-tick").css("display","none");
    }
    else{
        $("#tech").css("display","block");
        $("#time-tick").css("display","block");
    }
    var minutes = Math.floor(oldTime / 60);
    var seconds = oldTime % 60;
    oldTime = "";
    var days = 0;

    if(minutes>60){
    	var hours = Math.floor(minutes/60);
        if(hours>=24){
            days = Math.floor(hours/24);
            hours = hours-Math.floor(hours/24)*24;
        }

    	var hminutes = minutes-Math.floor(minutes/60)*60;

        if(days!=0){
            if(days!=0)
            oldTime += days+' дн. ';
        }

        if(hours!=0)
            oldTime += hours + ' ч. ';
        if(hminutes!=0)
            oldTime += hminutes + ' мин. ';

            oldTime += seconds + ' сек.';
    }
    else{
        if(minutes!=0)
	    oldTime += minutes + ' мин. ';
        oldTime += seconds+' сек.'
    }
    $("#time-tick").html(oldTime);
    techTime--;
}

function showErrors(data) {
    $(".error-msg").remove();
    $(".pay-input .input__wrap").removeClass("error-input");
    $("#pay-email").removeClass("error-input");
    $(".to-text").removeClass("error-input-text");
    $(".in-text").removeClass("error-input-text");

    for (var i = 0; i < data['errors'].length; i++) {
        if (data['errors'][i]['field'] == 'email') {
            $("#pay-email").addClass("error-input");
            $("#pay-email").after("<div class='error-msg'>" + data['errors'][i]['message'] + "</div>");
        } else if (data['errors'][i]['field'] == 'from_pay') {
            $(".in-text").addClass("error-input-text");
            $(".in-text").after("<div class='error-msg'>" + data['errors'][i]['message'] + "</div>");
        } else if (data['errors'][i]['field'] == 'to_pay') {
            $(".to-text").addClass("error-input-text");
            $(".to-text").after("<div class='error-msg'>" + data['errors'][i]['message'] + "</div>");
        } else if (data['errors'][i]['field'] == 'summ') {
            $("#summ-error").css("display","");
            $("#summ-error").html(data['errors'][i]['message']);
        }
        else if (data['errors'][i]['field'] == 'calcCaptcha'){
            $(".calcRecapcha").after("<div class='error-msg'>" + data['errors'][i]['message'] + "</div>")
        }
        else {
            $("#" + data['errors'][i]['field']).addClass("error-input");
            $("#" + data['errors'][i]['field']).after("<div class='error-msg'>" + data['errors'][i]['message'] + "</div>");
        }
    }
    $(".error-msg").show(400);
}

function checkTech() {
    $.ajax({
        url: `/api?endpoint=${'tech'}`,
        type: "GET",
        success: function (data) {
            techTime = data.time
        }
    });
}

function deleteErrors() {
    $(".error-msg").remove();
    $(".pay-input .input__wrap").removeClass("error-input");
    $("#pay-email").removeClass("error-input");
    $("#ref-inputs .pay-input, #ref-inputs div div").removeClass("error-input");
    $(".to-text").removeClass("error-input-text");
    $(".in-text").removeClass("error-input-text");
}


function regAjax(){
    reg_ajax = "email="+$('#reg_email').val();
    reg_ajax += "&password="+$('#reg_password').val();
    reg_ajax += "&password_again="+$('#reg_password_again').val();
    reg_ajax += "&type=1&csrfmiddlewaretoken=" + $("input[name='csrfmiddlewaretoken']").val();

    // console.log(reg_ajax);

    $.ajax({
        url: "/account/reg_ajax",
        type: "POST",
        data: reg_ajax,
        success: function (data) {
            console.log(data);
            if (data.response == "error") {
                Object.keys(data.errors).map((key) => {
                   data.errors[key].field = 'reg_' + data.errors[key].field;
                });
                console.log(data.errors);
                showErrors(data);
            }else if (data.response == "success") {
                deleteErrors();
                window.location.href = String(data.link);
            }

        }
    });
}


function loginAjax(){
    login_ajax = "email=" + $('#login_username').val();
    login_ajax += "&password=" + $('#login_password').val();
    login_ajax += "&csrfmiddlewaretoken=" + $("input[name='csrfmiddlewaretoken']").val();
    console.log(login_ajax);

    $.ajax({
        url: "/account/login_ajax",
        type: "POST",
        data: login_ajax,
        success: function (data) {
            console.log(data);
            $('.auth__err_message').html('');
            if (data.response == "error") {
                $('.auth__err_message').html(data.message);
            }else if (data.response == "success") {
                window.location.href = String(data.link);
            }

        }
    });


}



function checkSomeCoinsField(){
    /*
        Коды мониторинга, которым нужно добавить проверку полей в js, в случае
        если нет города у платежной системы:
        BTC, ETH, USDTERC20, USDTTRC20
    */
    let monitoringCode = [];
    monitoringCode[0] = api['pairData']['monitoringCode']['from'];
    monitoringCode[1] = api['pairData']['monitoringCode']['to'];

    let to_requis1 = $('#to_requis1 input').val()

    if( ps_hold[0]['city'] == null){
        /* Added fields if none city in way to to-inputs */
        if ( monitoringCode[1] == 'BTC' ){
            if( /^([a-zA-Z0-9]{28,100})$/.test(to_requis1) == false ){
                $("#to_requis1").addClass("error-input");
                $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Bitcoin</div>");
                return false;
            }
        }else if( monitoringCode[1] == 'ETH' ){
            if( /^([a-zA-Z0-9]{30,100})$/.test(to_requis1) == false ){
                $("#to_requis1").addClass("error-input");
                $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Etherium</div>");
                return false;
            }
        }else if( monitoringCode[1] == 'USDTERC20' ){
            if( /^([a-zA-Z0-9]{3,100})$/.test(to_requis1) == false ){
                $("#to_requis1").addClass("error-input");
                $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Tether (ERC20)</div>");
                return false;
            }
        }else if( monitoringCode[1] == 'USDTTRC20' ){
            if( /^([a-zA-Z0-9]{3,100})$/.test(to_requis1) == false ){
                $("#to_requis1").addClass("error-input");
                $("#to_requis1").after("<div class='error-msg'>Введите кошелёк Tether (TRC20)</div>");
                return false;
            }
        }
        return true;
    }
}


function claim() {
    var email = $("#pay-email input").val();
    var intext = $(".in-text").val();
    var totext = $(".to-text").val();


    var paydata = "";

    if ($("#pay-email").length != 0)
        paydata = "email=" + email;

    var payinputs = $("#in-inputs .pay-input input");

    from_requis = [];
    to_requis = [];

    var input_step = 1;
    for (var i = 0; i < payinputs.length; i++) {
        if ( $(payinputs[i]).hasClass('exchange__input__radio') && $(payinputs[i]).is(':checked') ){
            paydata += "&from_requis" + input_step + "=" + encodeURIComponent($(payinputs[i]).val());
            from_requis.push($(payinputs[i]).val());
            input_step++;
        }else if( !$(payinputs[i]).hasClass('exchange__input__radio') ){
            paydata += "&from_requis" + input_step + "=" + encodeURIComponent($(payinputs[i]).val());
            from_requis.push($(payinputs[i]).val());
            input_step++;
        }
    }

    payinputs = $("#to-inputs .pay-input input");

    input_step = 1;
    for (var i = 0; i < payinputs.length; i++) {
        if ( $(payinputs[i]).hasClass('exchange__input__radio') && $(payinputs[i]).is(':checked') ){
            paydata += "&to_requis" + input_step + "=" + encodeURIComponent($(payinputs[i]).val());
            to_requis.push($(payinputs[i]).val());
            input_step++;
        }else if( !$(payinputs[i]).hasClass('exchange__input__radio') ){
            paydata += "&to_requis" +  input_step + "=" + encodeURIComponent($(payinputs[i]).val());
            to_requis.push($(payinputs[i]).val());
            input_step++;
        }
    }

    paydata += "&gives=" + currentWay[0];
    paydata += "&gets=" + currentWay[1];
    //paydata +="&g-recaptcha-response="+grecaptcha.getResponse(claim__captcha);
    paydata += "&from_pay=" + intext + "&to_pay=" + totext;
    paydata += "&csrfmiddlewaretoken=" + $("input[name='csrfmiddlewaretoken']").val();

    if ( ps_hold[0]['city'] == null ){
        deleteErrors();
        if ( checkSomeCoinsField() == false) return;
    }

    $.ajax({
        url: "/claim",
        type: "POST",
        data: paydata,
        success: function (data) {
            if (data.response == "error") {
                showErrors(data);
            } else if (data.response == "success") {
                deleteErrors();
                getForm(data);
            }
        }
    });
}

function getStatusClaim(link) {
    $("#claim-auto-check").modal('close');
    setTimeout(function () {
        location.href = link;
    }, 3000);
}

function getForm(claim) {
    var ps_in = getPs(currentWay[0]);
    var ps_to = getPs(currentWay[1]);
    var psNameIn = getFullPsName(ps_in);
    var psNameTo = getFullPsName(ps_to);
    $('.check-claim-content .from img').attr('src', 'media/' + ps_in.logoWithoutBackground);
    $('.check-claim-content .to img').attr('src', 'media/' + ps_to.logoWithoutBackground);

    $('.check-claim-content .from .check-claim-ps').html(psNameIn);
    $('.check-claim-content .to .check-claim-ps').html(psNameTo);

    $('.check-claim-content .from .check-claim-amount').text(claim.claim.amounts.from);
    $('.check-claim-content .to .check-claim-amount').text(claim.claim.amounts.to);

    var from_reqs = '';
    var to_reqs = '';
    for (var req in claim.claim.userRequisites.from){
        from_reqs += '<div>'+claim.claim.userRequisites.from[req]+'</div>';
    }
    for (var req in claim.claim.userRequisites.to){
        to_reqs += '<div>'+claim.claim.userRequisites.to[req]+'</div>';
    }

    $('.check-claim-content .from .check-claim-reqs').html(from_reqs);
    $('.check-claim-content .to .check-claim-reqs').html(to_reqs);

    if (!claim.claim.isAutomatic) {
        $("#claim-link").attr('href', "claim/" + claim.claim.claimUuid);
        $("#claim-check").modal('open');
    } else {
        $("#claim-auto-link").attr('href', "claim/" + claim.claim.claimUuid);
        $("#claim-auto-link").attr('onclick', "getStatusClaim('" + claim.link + "')");
        $("#claim-auto-check").modal('open');
    }
}

function resendActivation() {
    $("#success_activate").css("opacity", 1);
    setTimeout(function () {
        $("#success_activate").css("opacity", 0);
    }, 5000);
    $.ajax({
        url: "reactivate",
        type: "POST",
        data: {
            'csrfmiddlewaretoken': $("input[name='csrfmiddlewaretoken']").val()
        },
        success: function (data) {

        }
    });
}

function voucherPay() {
    $.ajax({
        url: location.href + "/confirm",
        type: "POST",
        data: $("#voucherForm").serialize(),
        success: function (data) {
            if (data['response'] == 'error') {
                showErrors(data);
            } else {
                location.href = data['link'];
            }
        }
    });
}

function verifyToo() {
    $("#done-verify-btn").attr('onclick', "verifyDone('')");
    $('.line div').css('width', '0%');
    $('.line div').css("background", "");
    $('.loading p').html("0%");
    $("#error-verify").css("display","none");
    $("#check-verify").css("display","none");
    $('.upload-errors').hide(500);
    $("#done-verify-btn").addClass("disable");
}

var checkVerify = null;
function verifyDone(uuid) {
    if ($("#done-verify-btn").hasClass('disable')) return;
    if(uuid==''){
        $("#notify-modal #notify-in .notify-h-in").html('Пожалуйста загрузите фото!');
        $("#notify-modal #notify-in .notify-body-in").html('');

        $("#notify-modal").modal('open');

    } else {
        $.ajax({
            url: "/verification/"+uuid+"/confirm",
            type: "POST",
            success: function (data) {
                if (data['response'] == 'success') {
                    $("#error-verify").css("display","none");
                    $("#check-verify").css("display","");
                    $("#main-verify").css("display","none");
                    checkVerify = setInterval(function () {
                        verifyCheck(uuid);
                    },2000);
                }
            }
        });
    }
}

function verifyCheck(uuid) {
    $.ajax({
        url: "/verification/"+uuid+"/check",
        type: "POST",
        success: function (data) {
            if(data.status=='N'){

            }
            else if(data.status=='V'){
                location.reload();
            }
            else if(data.status=='O'){
                $("#error-verify").css("display","");
                $("#verify-error").html(data.error);
                $("#check-verify").css("display","none");
                $("#main-verify").css("display","none");
                clearInterval(checkVerify);
            }
        }
    });
}
var createHandler = false;
function uploadFiles(uuid) {
    $('.line div').css('width', '0%');
    // $('#progress .progress-bar').css("background", "rgb(66, 139, 202)");
    $('.line div').css("background", "");
    $('.loading p').html("0%");
    $('.upload-errors').hide(500);

    if (!createHandler) createHandler = true;
    else return;

    var url = '/verification/'+uuid;
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $('.upload-errors').html('');
            if(data.result.response=='error'){
                $("#done-verify-btn").addClass("disable");
                $('.upload-errors').html(data.result.errors[0].message);
                $('.line div').css("background", "red");
                $('.upload-errors').show(500);
            }
            else{
                $("#done-verify-btn").removeClass("disable");
                $("#done-verify-btn").attr('onclick', "verifyDone('"+data.result.verify+"')");
            }
        },
        error: function () {
            $("#done-verify-btn").addClass("disable");
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('.line div').css(
                'width',
                progress + '%'
            );

            $('.loading p').html(progress + "%");
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
}
