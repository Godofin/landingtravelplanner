class MeuComponente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos do componente aqui */
            </style>
            <div>Olá, sou um componente!</div>
        `;
    }
}

customElements.define('meu-componente', MeuComponente);
