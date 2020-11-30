const inputText = document.querySelector('#inputText');
const searchBtn = document.querySelector('#searchBtn');
const removeBtn = document.querySelector('#removeBtn');
const gifsSection = document.querySelector('#gifSection');

async function getGifs(searchTerm) {
    searchTerm = inputText.value;
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {api_key: 'dQGaBFLzaYNQQwrpGQ9oaI7zuIThqIIv', q: `${searchTerm}`} })
    
    const newImg = document.createElement('img')
    newImg.classList.add("img");
    newImg.src = res.data.data[0].images.original.url;
    gifsSection.append(newImg);
}

searchBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getGifs();
    inputText.value = '';
})


removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    gifsSection.innerHTML = '';
})