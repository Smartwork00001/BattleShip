class ship{
    constructor(squares){
        this.squares = squares;
        this.noOfHits = 0;
    }

    getSquares(){
        return this.squares;
    }

    getHits(){
        return this.noOfHits;
    }

    hit(){
        this.noOfHits += 1;
    }

    isSunk(){
        if(this.squares - this.noOfHits <= 0){
            return true;
        }
        return false;
    }
}

module.exports = ship;