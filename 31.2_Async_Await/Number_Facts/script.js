const BASE_URL = 'http://numbersapi.com/';

/* 
  Part 1
  Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
*/

const userFavNumber = document.getElementById('user-fav');
const part1Button = document.getElementById('part1-button');
const part1Container = document.getElementById('part1-facts');

async function getSingleFact() {
  
  try {
    res = await axios.get(`${BASE_URL}${userFavNumber.value}?json`)
    
    factEl = document.createElement('li')
    factEl.innerText = res.data.text;
    part1Container.append(factEl);
  } catch(error) {
    console.log(error)
  }
}

part1Button.addEventListener('click', function(e) {
  e.preventDefault();
  getSingleFact();
});


/* 
  Part 2
  Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
*/

const userChoice = document.getElementById('user-choice');
const part2Button = document.getElementById('part2-button');
const part2Container = document.getElementById('part2-facts');

async function getMultipleNumbersFact() {
  try {
    res = await axios.get(`${BASE_URL}1..${userChoice.value}?json`)

    part2Container.innerText = '';
    dataLength = Object.keys(res.data).length
    for (let i = 1; i <= dataLength ; i++) {
      factEl = document.createElement('li')
      factEl.innerText = res.data[`${i}`];
      part2Container.append(factEl);
    }
  } catch(error) {
    console.log(error); 
  }
}

part2Button.addEventListener('click', function(e) {
  e.preventDefault();
  getMultipleNumbersFact();
});

/* 
  Part 3
  Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
*/

const userFavNumber4 = document.getElementById('user-fav4');
const part3Button = document.getElementById('part3-button');
const part3Container = document.getElementById('part3-facts');


async function get4Facts() {
  try {
    
    // Claer if there any previous facts
    part3Container.innerText = '';
    const favNumFacts = [];

    // Get 4 facts from API
    for (let i = 1; i <= 4; i++) {
      let res = await axios.get(`${BASE_URL}${userFavNumber4.value}?json`)
      favNumFacts.push(res.data.text);
    }

    // Create an li for each fact and display in DOM
    for (let fact of favNumFacts) {
      factEl = document.createElement('li')
      factEl.innerText = fact;
      part3Container.append(factEl);
    }
    
  } catch(error) {
    console.log(error);
  }
}

part3Button.addEventListener('click', function(e) {
  e.preventDefault();
  get4Facts();
});



