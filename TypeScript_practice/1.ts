type Decision = "ROCK" | "PAPER" | "SCISSORS";

class Arbiter {
  #validDecisions: Decision[] = ['ROCK', 'PAPER', 'SCISSORS'];
  firstPlayer: Decision;
  secondPlayer: Decision;


  constructor(firstPlayerDecision: string, secondPlayerDecision: string) {
    this.#validate(firstPlayerDecision, secondPlayerDecision);
    this.firstPlayer = firstPlayerDecision.toUpperCase() as Decision;
    this.secondPlayer = secondPlayerDecision.toUpperCase() as Decision;
  }


  #validate(decision1: string, decision2: string) {
    if (!this.#validDecisions.includes(decision1.toUpperCase() as Decision) || 
        !this.#validDecisions.includes(decision2.toUpperCase() as Decision)) {
      throw new Error ("One of the player's decisions is not a valid value");
    }
  }


  updateBothPlayersParams(newFirstPlayerDecision: string, newSecondPlayerDecision: string) {
    this.#validate(newFirstPlayerDecision, newSecondPlayerDecision);
    this.firstPlayer = newFirstPlayerDecision.toUpperCase() as Decision;
    this.secondPlayer = newSecondPlayerDecision.toUpperCase() as Decision;
  }
 

  whoWins(decision1: Decision, decision2: Decision) {
    if (decision1 === decision2) {
      return "Draw!";
    }
    const wins = {ROCK: 'SCISSORS', PAPER: 'ROCK', SCISSORS: 'PAPER'};
    return wins[decision1] === decision2 ? 'First Player wins' : 'First Player loses';
  }


  playersGame() {
    return this.whoWins(this.firstPlayer, this.secondPlayer);
  }


  getPlayersDecisions() {
    return {
      first: this.firstPlayer,
      second: this.secondPlayer
    };
  }
}

const arbiter = new Arbiter("paper", "PAPER");
console.log(arbiter.playersGame());
arbiter.updateBothPlayersParams("rock", "scissors");
console.log(arbiter.getPlayersDecisions());
console.log(arbiter.playersGame());

const arbiter2 = new Arbiter("Scissors", "Paper");
console.log(arbiter.playersGame());