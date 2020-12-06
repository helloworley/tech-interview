const Stack = require('./Stack.js');

const pizzaStack = new Stack(6);

// make some pizza!
for (let i = 0; i < 6; i++) {
  const newPizza = `Pizza #${i}`;
  pizzaStack.push(newPizza);
  console.log(`${newPizza} has been added to the queue!`);
}

// try {
//   pizzaStack.push('Pizza #7');
// } catch(e) {
//   console.log(e);
// }

console.log('The first pizza to deliver is', pizzaStack.peek());

// deliver the pizzas!
for (let i = 0; i < 6; i++) {
  const removedPizza = pizzaStack.pop();
  console.log(`${removedPizza} has been delivered!`);
}

// try {
//   pizzaStack.pop();
// } catch(e) {
//   console.log(e);
// }