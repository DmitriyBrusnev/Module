class User extends Entity {
    constructor(name, box) {
        super(name);
        this.box = box;
    }

    showTracks() {
        this.showName();
        this.box.stuff.forEach((musicItem) => {
            this.tell(`Title - ${musicItem.name}, Duration: ${musicItem.duration}, Author: ${musicItem.author}`);
        });
    }
}
