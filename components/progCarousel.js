document.querySelector('#carouselExampleIndicators').innerHTML = 
`
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
</ol>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100" src="/public/assets/img/progsegunda.png" alt="One slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="/public/assets/img/progquarta.png" alt="Two slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="/public/assets/img/progquinta.png" alt="Three slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="/public/assets/img/progsabado.png" alt="Four slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="/public/assets/img/progdomingo1.png" alt="Five slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="/public/assets/img/progdomingo2.png" alt="Six slide">
    </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
`

var linkCSS = document.createElement("link")
linkCSS.rel = "stylesheet"
linkCSS.href = "/components/progCarousel.css"
document.head.appendChild(linkCSS)