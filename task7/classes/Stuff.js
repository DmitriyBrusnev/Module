/**
 * Music track
 */
class Stuff extends Entity {
    constructor(name, duration, author = 'untitled') {
        super(name);
        this.duration = duration;
        this.author = author;
    }
}
