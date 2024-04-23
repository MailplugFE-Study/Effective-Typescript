const developer2 = {
  work() {
    console.log("working...");
  },
};

developer2.work(); // working...
developer2.sleep(); // Property 'sleep' does not exist on type '{work() : void}'

type Fruit = "banana" | "watermelon" | "orange" | "apple" | "kiwi" | "mango";
const fruitBox: Fruit[] = ["banana", "apple", "kiwi", "mango"];

const welcome = (name: string) => {
  console.log(`Hello, ${name}!`);
};

const name: string = "zig";
const age: number = "zig";

interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function cacluateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // 'Rectangle' only refers to a type, but is being used as a value here.
    return shape * width * shape * height;
  } else {
    return shape * width * shape * width;
  }
}
