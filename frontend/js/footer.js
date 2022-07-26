class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `Teste da felicidade`
    }
}

customElements.define('my-footer', MyFooter)