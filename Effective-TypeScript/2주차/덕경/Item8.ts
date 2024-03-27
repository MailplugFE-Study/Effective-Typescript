/* 
이름은 같더라도 공간에 따라 타입과 값으로 표현되기 때문에 혼란스러울 수 있음.
*/

const Name = "Duck";
interface Name {
  name: string;
}

type T1 = "string literal"; // 타입
type T2 = 123; // 타입
const v1 = "string literal"; // 값
const v2 = 123; // 값
/* 
타입선언(:), 단언문(as) 다음에 나오는 심벌은 ‘타입’, = 다음에 나오는 모든 것은 ‘값’
*/
interface Person {
  first: string;
  last: string;
}
const example: Person = { first: "Jane", last: "Jacobs" };

// 두 공간 사이에서 다른 의미를 가지는 코드 패턴

/* 
this: 자바스크립트에서의 this는 메서드가 호출될 때 해당 메서드를 호출한 객체를 참조합니다. 다형성(this)를 사용하면 서브 클래스의 메서드 체인을 구현할 때 유용합니다.
*/

const obj = {
  value: 42,
  getValue() {
    return this.value;
  },
};

console.log(obj.getValue()); // 출력: 42

/*
&와 |: 비트 연산자 중 AND(&)와 OR(|)는 TypeScript에서 인터섹션(&)과 유니온(|)을 나타냅니다. 인터섹션은 두 개의 타입을 결합하여 새로운 타입을 만들며, 유니온은 여러 타입 중 하나를 가질 수 있는 타입을 만듭니다.
*/
// 인터섹션(&)
type A = { a: number };
type B = { b: string };
type C = A & B;

const objC: C = { a: 1, b: "hello" };

// 유니온(|)
type D = { d: boolean };
type E = { e: number };
type F = D | E;

const objF1: F = { d: true }; // 유효한 예시
const objF2: F = { e: 5 }; // 유효한 예시
/*
const: const는 새 변수를 선언할 때 사용되며, as const를 사용하면 리터럴이나 리터럴 표현식의 추론된 타입을 바꿀 수 있습니다.
*/
const PI = 3.14;
// PI = 3.14159; // 오류: 상수 값은 재할당할 수 없습니다.

const person = { name: "Alice" } as const;
// person.name = "Bob"; // 오류: 'readonly' 속성이기 때문에 할당할 수 없습니다.

/*
extends: class에서 상속할 때 사용되는 키워드입니다. 서브 클래스를 만들거나 서브타입 또는 제너릭 타입의 한정자로 사용될 수 있습니다.
*/
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} barks!`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.bark()); // 출력: Buddy barks

/*
in: for in 루프나 key in object 표현식에서 사용됩니다. 주로 객체의 속성을 순회할 때 사용됩니다.
*/
interface Person {
  name: string;
  age: number;
}

const a: Person = { name: "Alice", age: 30 };

for (const key in person) {
  console.log(key, person[key]);
}
// 출력:
// name Alice
// age 30
