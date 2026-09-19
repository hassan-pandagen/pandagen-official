export const auditPlatforms = ['Not sure', 'WordPress / WooCommerce', 'Wix', 'Squarespace', 'Shopify', 'Webflow', 'Custom / other'] as const;
export const auditGoals = ['General check', 'Speed', 'Search visibility', 'Enquiries / bookings', 'Ecommerce', 'Checking a launch'] as const;

export function platformAdvice(platform: string): string {
  switch (platform) {
    case 'WordPress / WooCommerce': return 'Start with your editor and Tools > Site Health. Ask your developer to review visible theme/plugin assets and caching before removing anything. This scan cannot inspect your database, backups or complete plugin inventory.';
    case 'Wix': return 'Use your Wix SEO dashboard for page settings and Site Inspection. Review large media and third-party embeds with your editor. Hosting-level changes may be controlled by Wix; a warning does not mean you need to move platforms.';
    case 'Squarespace': return 'Review page SEO settings, images and third-party embeds in Squarespace. Ask your developer about custom code. Form delivery and scheduling integrations need a separate end-to-end check.';
    case 'Shopify': return 'Compare these findings with Shopify web performance reports. Review theme and app changes with their maintainers. A product-page scan does not verify checkout, purchase tracking or refunds.';
    case 'Webflow': return 'Review page and CMS-template SEO settings, custom scripts and published redirects. Check form delivery separately. A template fix may affect multiple pages, so verify representative pages afterwards.';
    default: return 'Use the observations to brief whoever maintains your site. Platform detection can be incomplete. Confirm your stack before making configuration changes, and test forms, payments and account access separately.';
  }
}
