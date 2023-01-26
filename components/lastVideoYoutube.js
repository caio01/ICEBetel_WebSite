// funcao assincrona que recupera o ultimo video publicado no canal
async function getApiYoutube() {
    // chave da api
    const apiKey = 'AIzaSyD19NhX4SXowIe2VvpnlzzJX16gnRI_4aw'
    // id do canal
    const channelID = 'UCocY6WNm4TSu4aUlWdyoGtw'
    // numero maximo de resultados que a api retornara
    const maxResults = 1
    // url base para a consulta
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + 
                '&part=snippet,id&order=date&maxResults=' + maxResults

    // get utilizando o fetch API
    await fetch(url)
        // convertendo a resposta para um objeto JSON
        .then(T => T.json())
        // funcao que trata a resposta já convertida
        .then(response => {

            // recupera o id do video
            videoID = response.items[0].id.videoId
            // define a classe do iframe
            iClass = "embed-responsive-item"
            // define o src do iframe que aponta para o video
            iSrc = "https://www.youtube.com/embed/" + videoID

            // cria o elemento iframe
            iframe = document.createElement('iframe')
            // seta a classe do iframe
            iframe.className = iClass
            // seta o src do iframe
            iframe.src = iSrc

            // aninha o iframe na div de ID: 'youtubeVideo'
            document.querySelector("#youtubeVideo").appendChild(iframe)

        })
}

// chama a funcao
getApiYoutube()