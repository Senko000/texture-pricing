
jQuery(document).ready(function($) {
    $('#billing-toggle').change(function() {
        const isAnnual = $(this).is(':checked');
        
        if (isAnnual) {
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
