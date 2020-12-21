const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
  
  let text;

  beforeEach(function() {
    text = "the cat in the hat is in the hat";
  })
  
  
  test('makes chains', function () {
    let mm = new MarkovMachine(text);

    expect(mm.chains).toEqual(new Map([
      ["the", ["cat", "hat", "hat"]],
      ["cat", ["in"]],
      ["in", ["the", "the"]],
      ["hat", ["is", null]],
      ["is", ["in"]]]));
  });

  test('choice picks from array', function () {
    expect(MarkovMachine.choice([1, 1, 1])).toEqual(1);
    expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
  });

  test('generates semi-predictable text', function () {
    let mm = new MarkovMachine("a b c");
    let text = mm.makeText();
    expect(["a b c", "b c", "c"]).toContain(text);
  });

  test('generates valid text', function () {
    let bigrams = ["the cat", "cat in", "in the", "the hat", "hat "];
    let mm = new MarkovMachine("the cat in the hat");
    
    let output = mm.makeText();
    expect(output.endsWith('hat')).toBe(true);
  });

  test('cuts off at length', function () {
    let mm = new MarkovMachine("the cat in the hat");
    let output = mm.makeText(2);

    let outputWords = output.split(/[ \r\n]+/);
    expect([1, 2]).toContain(outputWords.length);
  });
});
