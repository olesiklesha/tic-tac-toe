class TicTacToe {
  constructor() {
    this.currPlayer = "x";
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.counter = 0;
  }

  getCurrentPlayerSymbol() {
    return this.currPlayer;
  }

  togglePlayer() {
    return this.currPlayer === "x" ? "o" : "x";
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currPlayer;
      this.currPlayer = this.togglePlayer();
      this.counter++;
    }
  }

  isWin() {
    if (
      this.field[0][0] === this.field[1][1] &&
      this.field[0][0] === this.field[2][2]
    ) {
      return this.field[0][0];
    }

    if (
      this.field[0][2] === this.field[1][1] &&
      this.field[0][2] === this.field[2][0]
    ) {
      return this.field[0][2];
    }

    for (let i = 0; i < 3; i++) {
      if (
        this.field[i][0] === this.field[i][1] &&
        this.field[i][0] === this.field[i][2]
      ) {
        return this.field[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        this.field[0][i] === this.field[1][i] &&
        this.field[0][i] === this.field[2][i]
      ) {
        return this.field[0][i];
      }
    }
    return null;
  }

  isFinished() {
    return this.isDraw() || !!this.getWinner();
  }

  getWinner() {
    this.winner = this.isWin();
    return this.winner;
  }

  noMoreTurns() {
    return this.counter >= 9 ? true : false;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
