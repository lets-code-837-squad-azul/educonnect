class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = ` <footer>
            
        <div class="parte1">
            <!-- <img src="" alt="Logo do EduConnect"> -->

            <p class="copyright">&copy; Copyright EduConnect - 2022</p>

            <ol>
                <li class="titulo-li">Apoio institucional:</li>
                <li><a target="_blank" href="https://www.ifood.com.br">iFood</a></li>
                <li><a target="_blank" href="https://letscode.com.br">Let's Code</a></li>
            </ol>
        </div>

        <div class="parte2">

            <ol>
                <li class="titulo-li">Idealizadores:</li>
                <li class="nome"><a target="_blank" href="https://www.linkedin.com/in/decioaguiar/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png"/></a> <a target="_blank" href="https://github.com/Decioagu"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a> </li>
    
                <li class="nome"><a target="_blank" href="https://www.linkedin.com/in/gabriela-gomes-nogueira-sales-196876220/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png"/></a> <a target="_blank" href="https://github.com/gabriela-gnsales"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a></li>
            </ol>
        </div>

        <div class="parte3">

            <ol>

                <li class="quebra"> Décio Santana de Aguiar </li>

                <li class="quebra"> Gabriela Gomes Nogueira Sales</li>
            </ol>
        </div>

        <div class="parte4">
            <ol>
                <li class="nome"><a target="_blank" href="https://www.linkedin.com/in/josue-figueiredo/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png"/></a> <a target="_blank" href="https://github.com/Josuerodrigojr"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a></li>
    
                <li class="nome"><a target="_blank" href="https://www.linkedin.com/in/m-carneir0/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png"/></a> <a target="_blank" href="https://github.com/mcarneir0"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a> </li>
    
                <li class="nome"><a target="_blank" href="https://www.linkedin.com/in/pedro-mariano-de-souza-968932148/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png"/></a> <a target="_blank" href="https://github.com/pedro-workspace"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a></li>
            </ol>
        </div>

        <div class="parte5">

            <ol>

                <li class="quebra">Josué Rodrigo E. Figueirêdo </li>

                <li class="quebra">Matheus Carneiro Feitosa</li>

                <li class="quebra">Pedro Mariano de Souza</li>
            </ol>
        </div>

  </footer>`
    }
}

customElements.define('my-footer', MyFooter)