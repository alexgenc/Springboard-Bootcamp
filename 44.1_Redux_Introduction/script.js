// Cache selectors
const h2 = document.querySelector('h2');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const excitedBtn = document.querySelector('#excited');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');

// Event Listeners
happyBtn.addEventListener("click", function(e) {
  store.dispatch({ type: 'HAPPY' });
  const state = store.getState();
  h2.innerText = state.mood;
});

sadBtn.addEventListener("click", function(e) {
  store.dispatch({ type: 'SAD' });
  const state = store.getState();
  h2.innerText = state.mood;
});

excitedBtn.addEventListener("click", function(e) {
  store.dispatch({ type: 'EXCITED' });
  const state = store.getState();
  h2.innerText = state.mood;
});

angryBtn.addEventListener("click", function(e) {
  store.dispatch({ type: 'ANGRY' });
  const state = store.getState();
  h2.innerText = state.mood;
});

confusedBtn.addEventListener("click", function(e) {
  store.dispatch({ type: 'CONFUSED' });
  const state = store.getState();
  h2.innerText = state.mood;
});