class Calculation {
    // Constructor is the first method called after instantiation and usually sets the properties of the object
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    GetResults() {
        return this.op(this.a, this.b);
    }
}

module.exports = Calculation;