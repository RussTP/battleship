class Ship {
constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;

}

hit() {
    return this.hitCount ++;
}

isSunk() {
    if (this.hitCount === this.length) {
        return true;
    }
        return false;
}

}


module.exports = Ship;