var htmlString = ''

// funcao assincrona que recupera o ultimo video publicado no canal
async function getApiYoutube() {
    // chave da api
    const apiKey = 'AIzaSyDB8bi1bv5SAyLLKkFsLEA8kyyBSe0Vens'
    // id do canal
    const channelID = 'UCocY6WNm4TSu4aUlWdyoGtw'
    // numero maximo de resultados que a api retornara
    const maxResults = 3
    // url base para a consulta
    const url = 'https://www.googleapis.com/youtube/v3/playlists/?key=' + apiKey + 
                '&channelId=' + channelID + '&part=snippet&maxResults=' + maxResults

    htmlString = `<ol class="carousel-indicators">`
    
    for(i = 0; i < maxResults; i++) {
        if (i == 0) {
            htmlString += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
        } else {
            htmlString += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
        }
    }

    htmlString += `</ol>`

    console.log(htmlString)

    htmlString += '<div class="carousel-inner">'
    

    // get utilizando o fetch API
    await fetch(url)
        // convertendo a resposta para um objeto JSON
        .then(T => T.json())
        .then(response => response.items)
        .then(res => res.map( element => {
                urlImg = element.snippet.thumbnails.maxres === undefined ? element.snippet.thumbnails.standard.url : element.snippet.thumbnails.maxres.url

                if(res.indexOf(element) == 0) {
                    htmlString +=
                    `
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="${urlImg}" alt="Slide ${res.indexOf(element)}">
                        </div>
                    `

                } else {
                    htmlString +=
                    `
                        <div class="carousel-item">
                            <img class="d-block w-100" src="${urlImg}" alt="Slide ${res.indexOf(element)}">
                        </div>
                    `
                }

        }))


        htmlString += '</div>'
        
        htmlString +=
        `
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        `

        document.querySelector('#carouselExampleIndicators').innerHTML = htmlString
}

// chama a funcao
getApiYoutube()


var linkCSS = document.createElement("link")
linkCSS.rel = "stylesheet"
linkCSS.href = "/components/playlistCarousel.css"
document.head.appendChild(linkCSS)