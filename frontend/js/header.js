class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<header>    
        <div class="edu">
            <a href="./home.html"><img src="../img/EduconnectMiniV2.png" alt=""></a>
            <!-- <h1 class="nome"><a href="./home.html">EduConnect</a></h1> -->
        </div>
        <div class="nav">
            <nav>
            </nav>
        </div>
        
    </header>`
    }
}

customElements.define('my-header', MyHeader)