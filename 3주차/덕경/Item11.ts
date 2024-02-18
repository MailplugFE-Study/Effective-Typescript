interface Person {
  name: string;
}
function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}
// 잉여 속성 체크가 적용되는 경우
//  함수에 직접 객체 리터럴을 전달
greet({ name: "Alice", age: 30 });

// 잉여 속성 체크가 적용되지 않는 경우
//  객체를 변수에 할당한 후 변수를 전달
const alice = { name: "Alice", age: 30 };
greet(alice);
