
jQuery(document).ready(function($) {
    $('#billing-toggle').change(function() {
        if ($(this).is(':checked')) {
            $('.price.monthly').hide();
            $('.price.annual').show();
            $('.period').text('/year');
        } else {
            $('.price.monthly').show();
            $('.price.annual').hide();
            $('.period').text('/month');
        }
    });
});
