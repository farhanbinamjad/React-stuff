const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');


let searchQuery = '';
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const ARTIST_NAME = searchQuery
    const baseUrl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data)
    generateHTML(data.results);

}

function generateHTML(results) {
    let alreadyGeneratedHTML = '';
    results.map(result => {
        alreadyGeneratedHTML +=
            `
        <div class="item">
                        <img src="${result.artworkUrl100}" alt="">
                        <div class="flex-container">
                        <h1 class="title">${result.collectionCensoredName}</h1>
                        <a class= "view-button" href="${result.collectionViewUrl}">View Song</a>
                        </div>
        </div>
            `
    })
    searchResultDiv.innerHTML = alreadyGeneratedHTML;
}