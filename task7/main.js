const entity = new Entity();
entity.name = 'Some Entity Name';

const stuff = new Stuff();
stuff.name = 'stuff1';
const stuff1 = new Stuff();
stuff1.name = 'stuff2';
const stuff2 = new Stuff();
stuff2.name = 'stuff3';

const box = new Box();
box.stuff.push(stuff, stuff1, stuff2);

const user = new User(box);

console.log(entity, stuff, box, user);
