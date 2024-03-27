/*
never 
선언된 변수의 범위는 공집합이기 때문에 아무런 값도 할당할 수 없음.
*/
const example: never = "example";

/* 리터럴 타입 
한 가지 값만 가질 수 있는 타입
*/

type danji = "shitzu";

/* 
유니온 타입
두 개 이상의 타입을 가질 수 있는 타입
*/

type Dog = "shitzu" | "poodle" | "bulldog";

/*
타입 체커
*/
// 타입이 지정된 배열
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// 객체와 그 속성의 타입 지정
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let person: Person = {
  name: "John",
  age: 30,
  isStudent: false,
};

// 함수의 파라미터와 반환 타입 지정
function add(a: number, b: number): number {
  return a + b;
}

// 함수 호출
let result: number = add(3, 5);
console.log("Result:", result);

// 잘못된 타입 사용 예시
// numbers 배열에 문자열을 넣으면 에러 발생
// numbers.push("6"); // 에러: Argument of type '"6"' is not assignable to parameter of type 'number'.

// 객체 속성 누락
// let anotherPerson: Person = { name: "Alice" }; // 에러: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

// 함수 반환 타입 미스매치
// function subtract(a: number, b: number): string {
//     return a - b; // 에러: Type 'number' is not assignable to type 'string'.
// }

/* 인터섹션 타입 */

// Person1 인터페이스
interface Person1 {
  name: string;
  age: number;
}

// Person2 인터페이스
interface Person2 {
  isStudent: boolean;
}

// Person1과 Person2의 인터섹션 타입
type NewPerson = Person1 & Person2;

// Person 타입의 객체
let john: Person = {
  name: "John",
  age: 30,
  isStudent: false,
};

type K = keyof (Person1 & Person2);

let key: K;

key = "name";
// 틀린 예시 (에러 발생) - "duck"은 Person1, 2에 없는 속성
//key = "duck"

/* extends */

interface Duck extends NewPerson {
  favoriteFood: string;
}
const duck: Duck = {
  name: "duck",
  age: 27,
  isStudent: false,
  favoriteFood: "chicken",
};

/* 
인터섹션 vs extends 
extends: 클래스나 인터페이스에서 다른 클래스나 인터페이스를 확장할 때 사용됩니다. 이것은 상속 관계를 나타내며, 확장된 클래스 또는 인터페이스는 부모 클래스 또는 인터페이스의 속성과 메서드를 상속받습니다.

인터섹션(&): 두 개 이상의 타입을 결합하여 새로운 타입을 만듭니다. 결과 타입은 원본 타입들의 속성을 모두 포함하며, 이를 통해 두 타입의 속성을 결합합니다.
*/
