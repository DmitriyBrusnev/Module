class Box extends Entity {
    stuff = [];
    
    constructor(name, ...stuff) {
        super(name);
        this.addStuff(...stuff);
    }

    addStuff(...elements) {
        if (this.stuff) {
            elements.forEach((elem) => {
                if (elem instanceof Stuff) {
                    this.stuff.push(elem);
                }
            });
        }
    }
}
