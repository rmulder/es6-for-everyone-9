let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

console.log(x, y, z);

const age = 100;
const people = ['Wes', 'Kait'];

const fullNames = people.map(name => `${name} Bos`);

for (const person of people) {
  console.log(person);
}
