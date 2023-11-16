$(document).ready(function () {
  $(".page").css("padding-top", $("header").height() + "px");

  // $(".page .main_ex .main_form .items .form_top .item .main_select .select_active, .lk .container .container_item .lk_ref .get_money .main_select .select_active").click(function () {
  //   $(this).parent().find(".select_hidden").toggleClass("active");
  //   return false;
  // });

  // $(document).mouseup(function (e) {
  //   var div = $(".page .main_ex .main_form .items .form_top .item .main_select, .lk .container .container_item .lk_ref .get_money .main_select");
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {
  //     div.find(".select_hidden").removeClass("active");
  //   }
  // });

  $("header .right .lang .curr").click(function () {
    $("header .right .lang .select_lang").addClass("active");
    return false;
  });

  $("header .right .lang .select_lang a.active_lang").click(function () {
    $("header .right .lang .select_lang").removeClass("active");
    return false;
  });

  $(document).mouseup(function (e) {
    var div = $("header .right .lang .select_lang");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass("active");
    }
  });

  // $(".page .main_ex .main_form .items .form_top .item .main_select .select_hidden .top a, .lk .container .container_item .lk_ref .get_money .main_select .select_hidden .top a").click(function () {
  //   $(this).parent().find(".active").removeClass("active");
  //   $(this).addClass("active");
  //   return false;
  // });

  $(".pop_bg").click(function () {
    $(this).removeClass("active");
    $(".pop_up").removeClass("active");
  });

  $(".pop_up .close").click(function () {
    $(".pop_bg").removeClass("active");
    $(".pop_up").removeClass("active");
    return false;
  });

  $(".pop_up_8 .mid .verify_top a").click(function () {
    $(this).toggleClass("active");
    $(".pop_up_8 .mid .verify_hidden").toggleClass("active");
    return false;
  });

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).data("content")).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // $(".pop_up_9 .input .text a").click(function (e) {
  //   e.preventDefault();
  //   copyToClipboard(this)
  // });

  $(".lk .container .container_item .lk_ref .ref_line .left .link a").click(function () {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(this).data("content")).select();
    document.execCommand("copy");
    $tmp.remove();
    return false;
  });

  var curr = 30;
  setInterval(function () {
    if (curr >= 2) {
      curr = curr - 1;
      $(".main_ex .timer p").html(curr);
    } else {
      curr = 30;
      courseAndMinimalsUpdate(true);
      $(".main_ex .timer p").html(curr);
    }
  }, 1000);

  // $(".page .main_ex .main_form .items .form_top .item .main_select .select_hidden .top a, .lk .container .container_item .lk_ref .get_money .main_select .select_hidden .top a").click(function () {
  //   var type = $(this).data("type");
  //   if (type == 0) {
  //     $(this).parent().parent().find(".select_item").removeClass("hide");
  //   } else {
  //     $(this).parent().parent().find(".select_item").addClass("hide");
  //     $(this).parent().parent().find('.select_item[data-type="' + type + '"]').removeClass("hide");
  //   }
  // });

  // $(".page .main_ex .main_form .items .form_bot .button button").click(function () {
  //   var time = 1200;
  //   setInterval(function () {
  //     if (time > 0) {
  //       time = time - 1;
  //       min = parseInt(time / 60);
  //       if (min < 10) {
  //           min = '0'+min;
  //       }
  //       sec = time - min * 60;
  //       if (sec < 10) {
  //           sec = '0'+sec;
  //       }
  //       $('.pop_up_9 .top .time p .min').text(min);
  //       $('.pop_up_9 .top .time p .sec').text(sec);
  //     }
  //   }, 1000);
  //   $(".pop_bg").addClass("active");
  //   $(".pop_up_9").addClass("active");
  //   return false;
  // });

  $(".pop_up_10 .mid .input a").click(function () {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this).parent().find("input").attr("type", "text");
    } else {
      $(this).removeClass("active");
      $(this).parent().find("input").attr("type", "password");
    }
    return false;
  });

  $(".pop_up_11 .mid .input a").click(function () {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this).parent().find("input").attr("type", "text");
    } else {
      $(this).removeClass("active");
      $(this).parent().find("input").attr("type", "password");
    }
    return false;
  });

  $(".pop_up_10 .mid .save_me .left").click(function () {
    $(this).toggleClass("active");
  });

  // $("header .right .buttons .reg_b").click(function () {
  //   $(".pop_bg").addClass("active");
  //   $(".pop_up_11").addClass("active");
  //   return false;
  // });

  $("a.youtube_cover").click(function () {
    $(".youtube_cover").css('display', 'none');
    $("#youtube_video").css("display", "");
  });

  // $("header .right .buttons .login_b").click(function () {
  //   $(".pop_bg").addClass("active");
  //   $(".pop_up_10").addClass("active");
  //   return false;
  // });

  // $(".page .main_ex .main_form .items .form_top .item .main_select .select_hidden .bot .select_item").click(function () {
  //   if ($(this).hasClass("disable") == false) {
  //     block_id = $(this).parent().parent().parent().parent().data("id");
  //     if (block_id == 1) {
  //       block_1_id = 2;
  //     } else {
  //       block_1_id = 1;
  //     }
  //     $('.page .main_ex .main_form .items .form_top .item[data-id="' + block_1_id + '"] .main_select .select_hidden .bot .select_item').removeClass("disable");
  //     $('.page .main_ex .main_form .items .form_top .item[data-id="' + block_1_id + '"] .main_select .select_hidden .bot .select_item[data-id="' + $(this).data("id") + '"]').addClass("disable");
  //     $(this).parent().find(".active").removeClass("active");
  //     $(this).addClass("active");
  //   }
  // });

  // $(".lk .container .container_item .lk_ref .get_money .main_select .select_hidden .bot .select_item").click(function () {
  //   if ($(this).hasClass("disable") == false) {
  //     $(this).parent().find(".active").removeClass("active");
  //     $(this).addClass("active");
  //   }
  // });

  $('.rules .items .item a').click(function(){
      $(this).toggleClass('active');
      $(this).parent().parent().find('.hide').toggleClass('active');
      return false;
  })

  $(".partners_site .right .input a").click(function () {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this).parent().find("input").attr("type", "text");
    } else {
      $(this).removeClass("active");
      $(this).parent().find("input").attr("type", "password");
    }
    return false;
  });

  $('.faq .items .item .item_top').click(function(){
      $(this).toggleClass('active');
      $(this).parent().find('.item_bot').toggleClass('active');
      return false;
  })

  $(".lk .container .container_item .secure .input a").click(function () {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this).parent().find("input").attr("type", "text");
    } else {
      $(this).removeClass("active");
      $(this).parent().find("input").attr("type", "password");
    }
    return false;
  });

  $(".ref-filter a").click(function() {
    var filterType = $(this).attr("data-type");
    $(".ref-filter a").removeClass("active");
    $(this).addClass("active");
    if (filterType != "all"){
      $(".select_item").addClass("filteredItem");
      $(".select_item[data-filter='"+ filterType +"']").removeClass("filteredItem");
    }
    else $(".select_item").removeClass("filteredItem");
    $('.dropdown-trigger').dropdown('recalculateDimensions');
  });

  // $('.lk .lk_nav ul li a').click(function(){
  //   if ($(this).hasClass('active') == false) {
  //     $(this).parent().parent().find('.active').removeClass('active');
  //     $(this).addClass('active');
  //     id = $(this).data('id');
  //     $('.lk .container .container_item').removeClass('active');
  //     $('.lk .container .container_item[data-id="'+id+'"]').addClass('active');
  //   }
  //   return false;
  // });

  $('.lk .container .container_item .lk_ref .nav ul li a').click(function(){
    if ($(this).hasClass('active') == false) {
      $(this).parent().parent().find('.active').removeClass('active');
      $(this).addClass('active');
      id = $(this).data('id');
      $(this).parent().parent().parent().parent().find('.hidden').removeClass('active');
      $(this).parent().parent().parent().parent().find('.hidden[data-id="'+id+'"]').addClass('active');
    }
    return false;
  });

  $('header .left .nav .mob_nav a').click(function(){
    $(this).toggleClass('active');
    $('header .left .nav ul').toggleClass('active');
    return false;
  });
});
