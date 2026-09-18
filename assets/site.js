const pages = [
  ["Home", "/"],
  ["Products", "/products/"],
  ["Services", "/services/"],
  ["About", "/about/"],
  ["Contact", "/contact/"],
];

const normalizedPath = window.location.pathname.replace(/index\.html$/, "");

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <nav class="nav-wrap" aria-label="Primary navigation">
          <a class="brand" href="/">LLL Solutions, LLC</a>
          <div class="nav-links">
            ${pages.map(([label, href]) => {
              const current = normalizedPath === href ? ' aria-current="page"' : "";
              return `<a href="${href}"${current}>${label}</a>`;
            }).join("")}
          </div>
        </nav>
      </header>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <a class="brand" href="/">LLL Solutions, LLC</a>
            <p class="copyright">Learning. Leveraging. Launching. © ${new Date().getFullYear()}</p>
          </div>
          <div class="footer-links">
            <a href="mailto:info@lll-solutions.com">info@lll-solutions.com</a>
            <a href="tel:+14042828349">+1 404-282-8349</a>
            <a href="/privacy-policy-2/">Privacy</a>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
