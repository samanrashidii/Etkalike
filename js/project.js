$(document).ready(function(){

// Search Overlay

$('.search input').on('focus', function(){
	$('.search-overlay').addClass('active');
}).on('blur', function(){
	$('.search-overlay').removeClass('active');
});

// Form Validations

$('form').validate({
  rules: {
    nickname: {
      required: true,
      minlength: 5
    },
    email_address: {
      required: true,
      minlength: 5,
      email:true
    },
    password: {
      required: true,
      minlength: 8
    },
    confirm_password: {
      required: true,
      minlength : 8,
      equalTo : "#password"
    },
    mobile: {
      required: true,
      minlength: 5,
      number:true
    }
  },
  messages: {
    nickname: "Please Enter Your Nickname",
    email_address: "Please Enter Your Email Address",
    password: "Please Enter Your Password",
    confirm_password: "Please Confirm Your Password",
    mobile: "Please Enter Your Mobile Number"
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
    if($('.samanira_secure').val() == '') {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function () {
            $('.contact_form :input').prop('disabled', true);
            $('.message.success').addClass('active'); 
            setTimeout(function(){
              $('.message.success').removeClass('active');
            },5000);
        }
      });
      return false;
    } else {
      $('.contact_form input[type="submit"]').prop('disabled', true);
      return false;
    }
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
    newsletter_email_address: "Please Enter Your Email Address",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }

});

});