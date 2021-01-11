// https://api.jikan.moe/v3/search/  anime   ?q= {anime to search}
let api = "https://api.jikan.moe/v3/search/"
let animeApi = `${api}anime`;
let shows;
function getAnimeApi(animeToSearch) {
    return fetch(`${animeApi}?q=${animeToSearch}`).then(res => res.json())
}
async function searchAnime(title) {
    try {
        loadDiv.innerHTML = '<img src="loading-anime.gif" alt="loading-anime gif">'
        await getAnimeApi(title).then(res => shows = res.results)
    }
    catch (error) {
        console.log(error);
    }
    finally {
        loadDiv.innerHTML = ''
    }
}
function searchAnimeClick() {
    searchAnime(animeInput.value).then(() => {
        for (const iterator of shows) {
            itemAnimeDiv.innerHTML += `<img src="${iterator.image_url}">`
            console.log(iterator.image_url)
        }
    }
    )
}
