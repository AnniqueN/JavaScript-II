// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function female() {
  console.log("I love swimming during the summer, only because I love being under the sun!");
  function sun() {
    console.log("The sun shines so much during the summer, that at times, I can't wait for evening!");
    function evening() {
      console.log("In the evening in Texas the weather gets weird even in the summer, it gets cold");
      function cold() {
        console.log("I guess really, I am never satisfied with Texas weather because I don't like either.");
      }
    cold();
    }
  evening();
   }
  sun();
 }
  female();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return function() {
    return count += 1;
  };
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (param) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
