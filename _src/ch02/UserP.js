function UserP(first, last) {
    this.first = first;
    this.last = last;
}
UserP.prototype = {
    getFullName: function() {
        return this.first + " " + this.last;
    }
};