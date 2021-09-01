class Entity {
    constructor(name = 'default') {
        this.name = name;
    }

    tell(info) {
        console.log(`\t${info}`);
    }

    showName() {
        console.log(this.name);
    }
}
