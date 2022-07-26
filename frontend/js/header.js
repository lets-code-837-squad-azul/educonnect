class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<header>

        <div>
            <section class="container flex">
                <div class="item"><a class="color semdecoracao" href="#Sobre">Sobre</a></div>
                <div class="item"><a class="color semdecoracao" href="#quemPodeParticipar">Quem pode participar</a> 
                </div>
                <div class="item"><a class="color semdecoracao" href="#comoFunciona">Como funciona</a></div>
                <div class="item"><a class="color semdecoracao" href="#sejaUmApoiador">Seja um apoiador</a></div>
            </section>
        </div>

    </header>`
    }
}

customElements.define('my-header', MyHeader)