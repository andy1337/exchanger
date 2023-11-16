function materializeInit() {
    $('.tooltipped').tooltip();
    $('.dropdown-trigger').dropdown({
        'coverTrigger': true,//открывать снизу
        'hover': false,       //открывать при наведении
        'closeOnClick': false,//закрывать при клике на item,
        'inDuration': 500,
        'outDuration': 500
    });
    $('.modal').modal({
        'startingTop': '40%',
        'onOpenStart': () => {
            $('.layout').css('filter', 'blur(4px)');
        },
        'onCloseStart': () => {
            $('.layout').css('filter', '');
        }
    });
}

function someFixed() {
    let windowWidth = $(window).width();
    $(window).scroll(function () {
        if (windowWidth >= 1201) {
            let rt = $(this).scrollTop();
            if (rt < 0) {
                rt = 0;
            }
            $(".gggg").css("top", rt);
        }
    });
}

function claimTimeCalculate() {
    try {
        var time = lastseconds;
        claim__time = setInterval(function () {
            time--;
            var percent_time = 100 * time / 1200;

            var cminutes = Math.floor(time / 60);
            var cseconds = time % 60;

            if (cseconds < 10) cseconds = '0' + cseconds;
            if (cminutes < 10) cminutes = '0' + cminutes;


            $(".claim-time-tick").html(cminutes + ":" + cseconds);
            $(".timer__status_large").css("width", 100 - percent_time + "%");
            $(".timer__status_b").css("width", (percent_time - 6) + "%");

            if (time <= 0) {
                $(".timer-tick").css("display", "none");
                $(".timer-stop").css("display", "");
                clearInterval(claim__time);
            }

        }, 1000);
    } catch (e) {

    }
}

function filterPaySystems(){
    const el = $(".dropdown-type-filter")
    var type = $(el).attr("data-type");
    var way = $(el).attr('data-way');
    if(way == 1) sectionId = sectionSend;
    else sectionId = sectionGet;

    type = "c"

    $("#pay_system_dropdown_"+ way +" .dropdown-type-filter").removeClass("active");
    $(el).addClass("active");
    

    $(sectionId + " .select_item").addClass("filteredItem");
    if (type !== "all"){
        pss = getPssByFilter(type);
        for (var ps in pss){
            $(sectionId + " .select_item[data-pay-id='" + getActivePaySystem(way, pss[ps]) + "']").removeClass("filteredItem");
        }
    }
    else {
        $(sectionId + " .select_item").removeClass("filteredItem");
        $('.dropdown-trigger').dropdown('recalculateDimensions');
    }


    $(".dropdown-type-filter").click(function () {
        var type = $(this).attr("data-type");
        var way = $(this).attr('data-way');
        if(way == 1) sectionId = sectionSend;
        else sectionId = sectionGet;

        $("#pay_system_dropdown_"+ way +" .dropdown-type-filter").removeClass("active");
        $(this).addClass("active");
        

        $(sectionId + " .select_item").addClass("filteredItem");
        if (type !== "all"){
            pss = getPssByFilter(type);
            for (var ps in pss){
                $(sectionId + " .select_item[data-pay-id='" + getActivePaySystem(way, pss[ps]) + "']").removeClass("filteredItem");
            }
        }
        else {
            $(sectionId + " .select_item").removeClass("filteredItem");
            $('.dropdown-trigger').dropdown('recalculateDimensions');
        }
    });
}

function get_find() {
    $(".get-find").val('');

    $(".delete-find-get").hide(300);
    $(".icon-find-f-get").show(300);
    $(sectionGet + " .pay-select-li").removeClass("find-hide");

}

function send_find() {
    $(".send-find").val('');
    $(".delete-find-send").hide(300);
    $(".icon-find-f-send").show(300);
    $(sectionSend + " .pay-select-li").removeClass("find-hide");

}

function openModal(modal) {
    $(modal).fadeIn(200);
    $("body").css("overflow", "hidden");
}

function hideModal(modal) {
    $(modal).fadeOut(200);
    $("body").css("overflow", "");
}