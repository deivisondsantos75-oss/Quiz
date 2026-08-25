class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Gênio Quiz de Front-End</h1>
            </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p class="footer-description">
                    Esse quiz foi feito por Deivison Dos Santos, Rafael Tamy, Cauã Eduardo e Davi Ribeiro,
                    para testar seu conhecimento sobre front-end (HTML, JS, CSS).
                </p>
                <p class="footer-rights">© 2026 · Todos os direitos reservados · 19/08/2026</p>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
