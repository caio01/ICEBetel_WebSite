const apiKey = 'AIzaSyD19NhX4SXowIe2VvpnlzzJX16gnRI_4aw'
const channelID = 'UCocY6WNm4TSu4aUlWdyoGtw'
const maxResults = 999
const url = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + 
            '&part=snippet,id&order=date&maxResults=' + (maxResults > 1 ? 1 : maxResults)



fetch(url)
    .then(T => T.json())
    .then(response => {
        videoID = response.items[0].id.videoId
        htmlString = '<iframe class="embed-responsive-item" src="' + "https://www.youtube.com/embed/" + videoID + 
                        '" frameborder="0" allowfullscreen></iframe>'
        document.createElement()
        document.body.getElementsByClassName('embed-responsive').innerHTML = htmlString    
    })

    