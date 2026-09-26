# LLL Solutions website

Static capture of the public WordPress site for LLL Solutions, LLC.

The checked-in HTML is the rendered WordPress output. Theme fonts, images, WordPress block styles,
and the responsive navigation runtime are hosted locally so the site has no Hostinger runtime
dependency. There is no PHP, database, WordPress admin, or plugin execution.

## Updating the site

Edit the relevant page's `index.html`. Shared WordPress assets live under `wp-content/` and
`wp-includes/`. Preserve the existing public page paths because external links may depend on them.
