class gameboard {
  constructor() {
    this.board = [];
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = [false, undefined];
      }
    }
  }

  getBoard() {
    return this.board;
  }

  isHit(x, y) {
    return this.board[x][y][0];
  }

  hit(x, y) {
    if (!this.isHit(x, y)) {
      this.board[x][y][0] = true;
    }
  }

  canPlaceShip(x, y, direction, size) {
    const posx = x * 1;
    const posy = y * 1;
    if (!(posx >= 0 && posx <= 9 && posy >= 0 && posy <= 9)) {
      return false;
    }
    if (direction === "horizontal") {
      const start = posx;
      const end = posx + size - 1;
      if (start < 0 || end > 9) {
        return false;
      }
      for (let i = start; i <= end; i += 1) {
        if (typeof this.board[i][posy][1] !== "undefined") {
          return false;
        }
      }
    } else if (direction === "rhorizontal") {
      const start = posx - size + 1;
      const end = posx;
      if (start < 0 || end > 9) {
        return false;
      }
      for (let i = start; i <= end; i += 1) {
        if (typeof this.board[i][posy][1] !== "undefined") {
          return false;
        }
      }
    } else if (direction === "vertical") {
      const start = posy;
      const end = posy + size - 1;
      if (start < 0 || end > 9) {
        return false;
      }
      for (let i = start; i <= end; i += 1) {
        if (typeof this.board[posx][i][1] !== "undefined") {
          return false;
        }
      }
    } else if (direction === "rvertical") {
      const start = posy - size + 1;
      const end = posy;
      if (start < 0 || end > 9) {
        return false;
      }
      for (let i = start; i <= end; i += 1) {
        if (typeof this.board[posx][i][1] !== "undefined") {
          return false;
        }
      }
    }
    return true;
  }

  addShip(x, y, direction, ship) {
    const posx = x * 1;
    const posy = y * 1;
    if (this.canPlaceShip(posx, posy, direction, ship.squares)) {
      if (direction === "horizontal") {
        const start = posx;
        const end = posx + ship.squares - 1;
        for (let i = start; i <= end; i += 1) {
          this.board[i][posy][1] = ship;
        }
      } else if (direction === "rhorizontal") {
        const start = posx - ship.squares + 1;
        const end = posx;
        for (let i = start; i <= end; i += 1) {
          this.board[i][posy][1] = ship;
        }
      } else if (direction === "vertical") {
        const start = posy;
        const end = posy + ship.squares - 1;
        for (let i = start; i <= end; i += 1) {
          this.board[posx][i][1] = ship;
        }
      } else if (direction === "rvertical") {
        const start = posy - ship.squares + 1;
        const end = posy;
        for (let i = start; i <= end; i += 1) {
          this.board[posx][i][1] = ship;
        }
      }
      return true;
    }
    return false;
  }
}

module.exports = gameboard;
