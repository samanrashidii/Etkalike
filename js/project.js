$(document).ready(function(){

// Search Overlay

$('.search input').on('focus', function(){
	$('.search-overlay').addClass('active');
}).on('blur', function(){
	$('.search-overlay').removeClass('active');
});

// Login - Register

$('.register-bttn').on('click', function(){
	$('.register-box').fadeIn().siblings().hide();
});

$('.login-bttn').on('click', function(){
	$('.login-box').fadeIn().siblings().hide();
});

$('.forgot-password-bttn').on('click', function(){
	$('.forgot-password-box').fadeIn().siblings().hide();
});

// Filter Boxes

$('.filter-title').on('click', function(){
  $(this).toggleClass('active').siblings('.filter-inner-box').slideToggle();
});

// Range Slider

$( function() {
  $('.range-slider').slider({
    range: true,
    min: 10000,
    step: 50000,
    max: 10000000,
    values: [ 10000, 3200000 ],
    slide: function( event, ui ) {
      var startPrice = ui.values[0] + ' ' + 'تومان';
      var endPrice = ui.values[1] + ' ' + 'تومان';
      $('.ui-slider-handle:nth-of-type(1)').attr('start-price', startPrice);
      $('.ui-slider-handle:nth-of-type(2)').attr('end-price', endPrice);
      $('#min_price').val(startPrice);
      $('#max_price').val(endPrice);
    }
  });
  var firstValue = $('.range-slider').slider( "values", 0 ) + ' ' + 'تومان';
  var lastValue = $('.range-slider').slider( "values", 1 ) + ' ' + 'تومان';
  $('.ui-slider-handle:nth-of-type(1)').attr('start-price', firstValue);
  $('.ui-slider-handle:nth-of-type(2)').attr('end-price', lastValue);
  $('#min_price').val(firstValue);
  $('#max_price').val(lastValue);
});

// Quantity

$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this);
  var inputNum = spinner.find('input');
  var btnUp = spinner.find('.quantity-up');
  var btnDown = spinner.find('.quantity-down');
  var inputMin = inputNum.attr('min');
  var inputMax = inputNum.attr('max');

  btnUp.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue >= inputMax) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

  btnDown.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue <= inputMin) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

});

// Star Rating

$('.your-rating span').on('mouseenter', function(){
  if(!$(this).parents('.your-rating').hasClass('selected')){
    $(this).prevAll().addClass('active');
    $(this).addClass('active').nextAll().removeClass('active');
  }
}).on('click', function(){
  $(this).addClass('selected').nextAll().removeClass('selected');
  $(this).prevAll().addClass('selected');
  $('.your_rating_number').val($('.your-rating span.selected').index(this)+1);
});

$('.your-rating').on('mouseleave', function(){
  $(this).children('span').removeClass('active');
});

// Color Pallet & Size Options

$('.color-pallet input, .size-options input').on('change', function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// Comment Filtering

$('.comment-filters a').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// Comment Like / Dislike

$('.cbutton').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else{
    $(this).addClass('active').siblings().removeClass('active');
  }
});

// Product Tabs

$('.product-tabs > ul li a').on('click', function(e){
  var tabID = $(this).attr('href');
  e.preventDefault();
  $(this).parent().addClass('active').siblings().removeClass('active');
  $(tabID).show().siblings().hide();
});

// Question & Answer

$('a.reply').on('click', function(){
  $(this).parents('.comment-box').next().find('.answer-to-question').slideToggle().siblings().hide();
});

$('a.view-answers').on('click', function(){
  $(this).parents('.comment-box').next().find('.other-answers').slideToggle().siblings().hide();
});

// Form Validations

$('.login_form').validate({
  rules: {
    login_username: {
      required: true,
      minlength: 5
    },
    login_password: {
      required: true,
      minlength: 8
    }
  },
  messages: {
    login_username: "لطفا نام کاربری و یا آدرس ایمیل خود را وارد کنید",
    login_password: "لطفا کلمه عبور خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.register_form').validate({
  rules: {
    register_username: {
      required: true,
      minlength: 5
    },
    register_email: {
      required: true,
      minlength: 5,
      email: true
    },
    register_password: {
      required: true,
      minlength: 8
    },
    register_password_confirm: {
      required: true,
      minlength: 8,
      equalTo : "#register_password"
    }
  },
  messages: {
    register_username: "لطفا نام کاربری خود را وارد کنید",
    register_email: "لطفا آدرس ایمیل خود را وارد کنید",
    register_password: "لطفا کلمه عبور خود را وارد کنید",
    register_password_confirm: "کلمه عبور با فیلد بالا مطابقت ندارد",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.forgot_password_form').validate({
  rules: {
    forgot_password_email_address: {
      required: true,
      minlength: 5,
      email: true
    }
  },
  messages: {
    forgot_password_email_address: "لطفا آدرس ایمیل خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.newsletter_form').validate({
  rules: {
    newsletter_email_address: {
      required: true,
      minlength: 5,
      email:true
    }
  },
  messages: {
    newsletter_email_address: "لطفا آدرس ایمیل خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.write_review_form').validate({
  rules: {
    write_review: {
      required: true,
      minlength: 50,
    }
  },
  messages: {
    write_review: "حداقل کاراکتر برای ارسال نظر باید ۵۰ حرف باشد",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

});