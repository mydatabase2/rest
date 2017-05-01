function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    return re.test(email);
}

(function($) {
    'use strict';

    $(function() {

        $('#email_submit').click(function(e) {
            $('#iroi-email-signup-msg-wrapper').empty();

            var email = $('#email').val();

            if (!validateEmail(email)) {
                $('#iroi-email-signup-msg-wrapper').append('<div class="alert alert-danger" role="alert"><strong>Error! </strong>You must enter a valid email address.</div>');
                return false;
            }

            $.ajax({
                url: WP_Internetroi_Plugin_Widget.ajax_url,
                type: 'POST',
                dataType: 'json',
                data: {
                    action: 'iroiRegisterEmailAddress',
                    email: email
                },
                success: function(response){
                    var msg_html = '';
                    if (response.error) {
                        msg_html = '<div class="alert alert-danger" role="alert"><strong>Error! </strong>' + response.msg + '</div>';
                    } else {
                        msg_html = '<div class="alert alert-success" role="alert"><strong>Success! </strong>You have been signed up to receive our newsletter.</div>';
                        $('.iroi-email-signup-wrapper').hide();
                    }
                    $('#iroi-email-signup-msg-wrapper').append(msg_html);
                },
                error: function( error ){
                    console.log('AJAX error callback....');
                    console.log(error);
                }
            });
        });

    });

})(jQuery);