// 타입과 인터페이스의 차이
interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

interface Developer extends Person {
  language: string;
}

type DeveloperType = Person & {
  language: string;
};

const developer: Developer = {
  name: "duck",
  age: 27,
  language: "TypeScript",
};

// 인터페이스는 유니온 타입과 같은 복잡한 타입을 확장하지 못함.
type Shape = Circle | Square;
type Circle = { radius: number };
type Square = { sideLength: number };

interface DetailedSquare extends Shape {
  // Shape 유니온 타입이 아니라면 가능
  color: string;
}
// error code :   인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.ts(2312)

// 인터페이스는 보강이 가능하다.
// 추가적으로 병합이 가능하다.
interface Item {
  name: string;
}
interface Item {
  price: number;
}

const item: Item = {
  name: "item",
  price: 1000,
};

// 인터페이스와 타입의 튜플 사용 방법

// 인터페이스
interface Tuple {
  0: number;
  1: number;
}
[1, 2] as Tuple;
// 인터페이스를 사용하여 비슷한 구조를 표현하려면, 각 요소에 이름을 부여하고 해당 타입을 지정해야 하지만,
// 튜플의 고정된 순서와 길이 특성을 정확하게 표현하지 못함

// 타입
type TupleType = [number, number];
[1, 2] as TupleType;
