document.getElementById('header-nav').innerHTML = 
`
<!-- div responsavel pela opacidade nas imagens e no video dos headers -->
<div class="overlay"></div>

<!-- inicio do header -->
<div class="header-blue">
    <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div class="container">
            <!-- logo Betel -->
            <a href="/index.html"><img class="logo-nav" src="/public/assets/img/logo.png"></a>
            
            <!-- botão 3 barras, disponivel quando menor proporcao -->
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- div com a lista das opcoes do menu -->
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/contribua/contribua.html">Contribua</a>
                    </li>
                    
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/programacao/programacao.html">Programação</a>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/playlists/playlists.html">Playlists</a>
                    </li>

                    <li class="dropdown">
                        <a class="dropdown-toggle nav-link dropdown-toggle" 
                           data-toggle="dropdown" aria-expanded="false" href="#">Sobre nós</a>
                        <div class="dropdown-menu" role="menu">
                            
                            <a class="dropdown-item" role="presentation" href="/pages/historiadaigreja/historiadaigreja.html">História da Igreja</a>
                            
                            <a class="dropdown-item" role="presentation" href="/pages/noquecremos/noquecremos.html">No que cremos</a>
                        </div>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/comochegar/comochegar.html">Como chegar</a>
                    </li>                   

                </ul>

                <!-- form que garante que a opcao de login e sign up fiquem alinhados a direita -->
                <form class="mr-auto"></form>
                
                <!-- login e sign up - serao implementados posteriormente
                <span class="navbar-text"><a href="#" class="login">Log In</a></span>
                <a class="btn btn-light action-button" role="button" href="#">Sign Up</a>
                -->
            </div>
        </div>
    </nav>
</div>
`

var linkCSS = document.createElement("link")
linkCSS.rel = "stylesheet"
linkCSS.href = "/components/header.css"
document.head.appendChild(linkCSS)

var linkCSS2 = document.createElement("link")
linkCSS2.rel = "stylesheet"
linkCSS2.href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
document.head.appendChild(linkCSS2)

var linkScript = document.createElement("script")
linkScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
linkScript.setAttribute("type", "text/javascript")
document.head.appendChild(linkScript)

var linkScript2 = document.createElement("script")
linkScript2.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js")
linkScript2.setAttribute("type", "text/javascript")
document.head.appendChild(linkScript2)