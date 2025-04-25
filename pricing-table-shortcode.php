
<?php
// Register the shortcode
add_shortcode('pricing_table', 'render_pricing_table');

function render_pricing_table() {
    // Enqueue required CSS and JS
    wp_enqueue_style('pricing-table-styles', get_template_directory_uri() . '/css/pricing-table.css');
    wp_enqueue_script('pricing-table-script', get_template_directory_uri() . '/js/pricing-table.js', array('jquery'), '1.0', true);

    $plans = array(
        array(
            'tier' => 'Free',
            'price_month' => 0,
            'price_annual' => 0,
            'button_text' => 'Start Free',
            'button_url' => '#',
            'highlights' => array(
                'Essential Textura features',
                'Generate, store & download up to 15 materials/month',
                'Materials created in the Free plan are public. Upgrade to keep them private.'
            )
        ),
        array(
            'tier' => 'Standard',
            'price_month' => 500,
            'price_annual' => 5000,
            'button_text' => 'Upgrade to Standard',
            'button_url' => '#',
            'highlights' => array(
                'Essential Textura features',
                'Unlimited material creation',
                'Store up to 500 materials',
                'Private material library',
                'Priority support'
            )
        ),
        array(
            'tier' => 'Enterprise',
            'price_month' => 800,
            'price_annual' => 8000,
            'button_text' => 'Contact Sales',
            'button_url' => '#',
            'highlights' => array(
                'Essential Textura features',
                'Personalized team folders to enhance workspace collaboration',
                'Batch upload fabric scans and digital materials',
                'Advanced recoloring including heathered fabric tools',
                'Supplier/tiling team collections',
                'Store up to 2000 materials',
                'Dedicated account manager'
            ),
            'is_popular' => true
        )
    );

    ob_start();
    ?>
    <div class="pricing-section">
        <div class="pricing-toggle">
            <span class="pricing-period-text">Monthly</span>
            <label class="switch">
                <input type="checkbox" id="billing-toggle">
                <span class="slider"></span>
            </label>
            <span class="pricing-period-text">Annual</span>
        </div>
        
        <div class="pricing-cards">
            <?php foreach ($plans as $plan): ?>
                <div class="pricing-card <?php echo isset($plan['is_popular']) && $plan['is_popular'] ? 'popular' : ''; ?>">
                    <?php if (isset($plan['is_popular']) && $plan['is_popular']): ?>
                        <div class="popular-badge">Most Popular</div>
                    <?php endif; ?>
                    
                    <h2 class="plan-title"><?php echo esc_html($plan['tier']); ?></h2>
                    <div class="price-container">
                        <span class="price monthly">$<?php echo esc_html($plan['price_month']); ?></span>
                        <span class="price annual">$<?php echo esc_html($plan['price_annual']); ?></span>
                        <span class="period">/month</span>
                    </div>
                    
                    <ul class="features-list">
                        <?php foreach ($plan['highlights'] as $feature): ?>
                            <li>
                                <svg class="check-icon" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                <?php echo esc_html($feature); ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    
                    <a href="<?php echo esc_url($plan['button_url']); ?>" class="cta-button">
                        <?php echo esc_html($plan['button_text']); ?>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
