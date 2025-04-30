
jQuery(document).ready(function($) {
    $('#billing-toggle').change(function() {
        const isAnnual = $(this).is(':checked');
        
        if (isAnnual) {
            $('.price.monthly').hide();
            $('.price.annual').show();
            $('.period').text('/year');
            
            // Update CTA links for annual
            $('.standard-cta').attr('href', 'https://buy.stripe.com/28o4iv0xX6vr8Cc7sW');
            $('.enterprise-cta').attr('href', 'https://buy.stripe.com/9AQg1d0xX6vraKk9B6');
        } else {
            $('.price.monthly').show();
            $('.price.annual').hide();
            $('.period').text('/month');
            
            // Update CTA links for monthly
            $('.standard-cta').attr('href', 'https://buy.stripe.com/eVa16jeoN4njbOocNf');
            $('.enterprise-cta').attr('href', 'https://buy.stripe.com/eVaaGT80p7zv9Gg8x1');
        }
    });
});
