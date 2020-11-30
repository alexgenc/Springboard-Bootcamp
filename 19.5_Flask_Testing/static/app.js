$wordStatus = $('#wordStatus');
$currentScore = $('#currentScore')
$currentTime = $('#currentTime');
$wordKeeper = $('#wordKeeper');

class BoggleGame {

    constructor(boardId, secs = 60) {
        // initialize a new set to store valid words
        this.words = new Set()

        // game length
        this.secs = secs;

        // ?
        this.board = $("#boggle")
        
        // initialize score variable as 0
        this.score = 0;

        // every 1000 msec, "tick"
        this.timer = setInterval(this.tick.bind(this), 1000);

        

        // ?
        $(".add-word", this.board).on("submit", this.checkIfValidWord.bind(this));
    }


    displayCorrectGuess(guess) {
        $wordKeeper.append($("<li>", { text: guess.toUpperCase() }));
        
    }


    displayMessage(msg) {
        $wordStatus.empty()
        $wordStatus.append(msg)
    }

    scoreKeeper(points) {
        this.score += points;
        $currentScore.text(this.score);
    }

    async checkIfValidWord(e) {
        // Prevent page reload
        e.preventDefault()


        const $guess = $('#guess', this.board);
    
        let guess = $guess.val();

        // If the user input is empty, don't do anything.
        if(!guess) {
            return;
        }

        // If the user already found a word
        if(this.words.has(guess)) {
            this.displayMessage(`You've already found ${guess}`);
            return;
        }

        // check server to see if guess is a valid word
        const resp = await axios.get("/check-guess", { params: { guess: guess} });
        
        // if the server response is not a valid word
        if (resp.data.result === "not-word") {
            this.displayMessage(`${guess} is not a valid word!`)
        // if the server response is not a valid word on this board
        } else if (resp.data.result === "not-on-board") {
            this.displayMessage(`${guess} is not a valid word on this board`)
        // if the server response is OK
        } else {
            this.words.add(guess);
            this.displayMessage(`${guess} is a valid word!`)
            this.scoreKeeper(guess.length)
            this.displayCorrectGuess(guess);
        }

        // Clear input and get the cursor to blink on that input field
        $guess.val("").focus()
    }


    async scoreGame() {
        $(".add-word", this.board).hide();
        const resp = await axios.post("/post-score", { score: this.score});
        if (resp.data.brokeRecord) {
            this.displayMessage(`New record: ${this.score}`, "ok");
          } else {
            this.displayMessage(`Final score: ${this.score}`, "ok");
          }
    }


    /* Tick: handle a second passing in game */

    async tick() {
    this.secs -= 1;
    this.showTimer();

    if (this.secs === 0) {
      clearInterval(this.timer);
      await this.scoreGame();
    }
    }

  /* Update timer in DOM */

    showTimer() {
    $("#currentTime", this.board).text(this.secs);
    }


}


    
let game = new BoggleGame("boggle", 60);









