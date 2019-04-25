class Player{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    getName(){ return this.name; }

    getScore() { return this.score; }

}

module.exports = Player;