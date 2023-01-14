document.getElementById('header-nav').innerHTML = 
`
<div class="overlay"></div>
<div class="header-blue">
    <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div class="container">
            <a href="/index.html"><img class="logo-nav" src="/public/assets/img/logo.png"></a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/contribua/contribua.html">Contribua</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/programacao/programacao.html">Programação</a>
                    </li>

                    <li class="dropdown">
                        <a class="dropdown-toggle nav-link dropdown-toggle" 
                           data-toggle="dropdown" aria-expanded="false" href="#">Sobre nós</a>
                        <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" role="presentation" href="/pages/nossamissao/nossamissao.html">Nossa Missão</a>
                            <a class="dropdown-item" role="presentation" href="/pages/nossavisao/nossavisao.html">Nossa Visão</a>
                            <a class="dropdown-item" role="presentation" href="/pages/nossosvalores/nossosvalores.html">Nossos Valores</a>
                            <a class="dropdown-item" role="presentation" href="/pages/nossaconfissaodefe/nossaconfissaodefe.html">Nossa Confissão de Fé</a>
                        </div>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" href="/pages/comochegar/comochegar.html">Como chegar</a>
                    </li>
                </ul>
                <form class="mr-auto"></form>
                <!--
                <span class="navbar-text"><a href="#" class="login">Log In</a></span>
                <a class="btn btn-light action-button" role="button" href="#">Sign Up</a>
                -->
            </div>
        </div>
    </nav>
</div>
`