const entity = new Entity();
entity.name = 'Some Entity Name';

// user Dima
const track1 = new Stuff('Yellow Submarine', 3.5, 'The Beatles');
const track2 = new Stuff('Восьмиклассница', 4.5, 'Виктор Цой');
const track3 = new Stuff('Jhonny B. Good', 3, 'Chuck Berry');

const box = new Box('Dima\'s tracks', track1, track2);
box.addStuff('1', '2', track3, '4');

const userDima = new User('Dimas', box);

userDima.showTracks();

// user Andrew
const track11 = new Stuff('A Day In The Life ', 5, 'The Beatles');
const track22 = new Stuff('Кукушка', 4, 'Виктор Цой');
const track33 = new Stuff('Ledy B. Good', 2, 'Chuck Berry');

const andrewBox = new Box('Andrew\'s tracks', track11, track22);
andrewBox.addStuff('1', track33, '4');

const userAndrew = new User('Andrewha', andrewBox);

userAndrew.showTracks();
