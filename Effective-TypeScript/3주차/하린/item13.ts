/**
 * item13. 타입과 인터페이스의 차이점 알기
 * 타입과 인터페이스는 대부분 비슷하나 몇가지 차이점이 존재한다.
 * type은 모든 타입을 선언할 때 사용할 수 있고, interface는 객체에 대한 타입을 선언할 때만 사용할 수 있다.
 * 또한 확장 불가능한 타입을 선언하고 싶다면 type을 사용하면 되고, 확장 가능한 타입을 선언하고 싶다면 interface를 사용하면 된다.
 */

// 유니온 (타입 o, 인터페이스 x)
type UnionType = string | number;

// 선언적 확장(인터페이스 o, 타입 x)
interface Member {
  name: string;
  age: number;
}

interface Member {
  skill: string[];
}

type MemberType = {
  name: string;
  age: number;
};

type MemberType = {
  skill: string[];
}; // MemberType 식별자가 중복되었습니다.

// 타입의 확장 방법
type Member1 = {
  name: string;
};

type Member2 = Member1 & {
  age: number;
};

const member = { name: "하린", age: 26, skill: ["typescript", "javascript"] };
