/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]);
      } 
    }

    this.chains = chains;
  }

  static getRandomWord(map) {
    let keys = Array.from(map.keys());

    let randomIndex = Math.floor(Math.random() * keys.length);

    let randomKey = keys[randomIndex];
  
    let randomWord = map.get(randomKey);

    return randomWord
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let randomWord = MarkovMachine.getRandomWord(this.chains);
    let output = [];
    
    while (output.length < numWords && randomWord !== null) {
      output.push(randomWord)
      randomWord = MarkovMachine.getRandomWord(this.chains);
    }

    return output.join(" ");
  }
}

module.exports = {
  MarkovMachine
};