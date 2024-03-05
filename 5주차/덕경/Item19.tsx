/*
추론 가능한 타입을 사용해 장황한 코드 방지하기
*/

// 타입 추론(바로 알 수 있다면 타입 생략하기)
let age = 27;
let age: number = 27;

// 타입을 추론하는 경우

//  1.원시값 할당
let name = "duck";
let boolean = true;
let number = 10;

// 2. 함수 내에 생성된 지역 변수
interface Item {
  id: string;
  price: number;
}
function getItem(item: Item) {
  const { id, price } = item; // 비구조화 할당을 통해 추론
}

// 3. 함수에서 기본값이 있는 매개변수
function getItems(items = [], amount = 10) {
  return items;
}

// 4. 타입 정보가 있는 라이브러리에서 콜백 함수의 매개변수

// 타입 명시하는 경우

// 1. 객체 리터럴 정의
// 객체 리터럴의 정의에 타입을 명시하면, 잉여 속성 체크가 동작

//person은 name, age, address를 객체 리터럴로 가지고 있고,
//address도 street, city를 객체 리터럴로 가지고 있다.

// Bad
const person: {
  name: string;
  born: {
    where: string;
    when: string;
  };
  // ...
} = {
  name: "yhan",
  born: {
    where: "Busan, South Korea",
    when: "25, 12, 1993",
  },
  // ...
};
// Good
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// 2. 함수의 반환타입
/* 
- 타입 추론이 가능할지라도 구현상의 오류가 함수를 호출한 곳까지 영향을 미치지 않도록 하기 위해 타입 구문을 명시하는 것이 좋음
- 반환 타입을 명시하면, 구현상의 오류가 사용자 코드의 오류로 표시되지 않는다.

  반환 타입을 명시해야 하는 이유
1. 반환 타입을 명시하면 함수에 대해 더욱 명확하게 알 수 있다.
    명시하기 위해서는 구현하기 전에 입력 타입과 출력 타입이 무엇인지 알아야 함
        👉 함수 시그니처는 쉽게 바뀌지 않기 때문
    전체 타입 시그니처를 먼저 작성하면 구현에 맞추어 주먹구구식으로 시그니처가 작성되는 것을 방지하고 제대로 원하는 모양을 얻게 됨
2. 명명된 타입을 사용하기 위해
    반환 타입을 명시하면 더욱 직관적인 표현
    반환 값을 별도의 타입으로 정의하면 타입에 대한 주석을 작성할 수 있어 자세한 설명이 가능 
    👉 추론된 반환 타입이 복잡해질수록 명명된 타입을 제공하는 이점은 커진다!

*/
interface Dog {
  name: string;
  age: number;
}

function getDog(a: Dog, b: Dog): Dog {
  return { name: a.name, age: b.age };
}
