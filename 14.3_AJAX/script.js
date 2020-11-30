/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {

  const res = await axios.get('http://api.tvmaze.com/search/shows?q=', { params: {q: query}})

  const show = res.data[0].show

  return [
    {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image.original
    }
  ]
};


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $markUp = $(
      `<div class="text-center col-md-3 col-lg-6 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <img class="card-img-top" src="${show.image}">
             <button type="button" id="episodesBtn" class="btn btn-primary">Get Episodes</button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($markUp);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
  
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

  const res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)

  for (i = 0; i < res.data.length; i++) {
    const episodeName = [res.data[i].name];
    const episodeSeason = [res.data[i].season];
    const episodeNumber = [res.data[i].number];
    const episodes = `Season: ${episodeSeason} - Episode: ${episodeNumber} : ${episodeName} `;

    populateEpisodes(episodes); 
  }
  // TODO: return array-of-episode-info, as described in docstring above
}

function populateEpisodes(episodes) {
  $('#episodes-area').attr("style", "display: inline");
  const $newLi = $('<li>').text(episodes)
  $('#episodes-list').append($newLi)
}


$("#shows-list").on("click", "button", function(e) {
  e.preventDefault();
  let showID = $(".Show").data();
  $('#episodes-list').text('');
  getEpisodes(showID.showId);
});