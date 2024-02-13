/**
 * item7. 타입이 값들의 집합이라고 생각하기
 * 타입은 '할당 가능한 값들의 집합'이라고 생각할 수 있다.
 *
 *
 * never                    : 공집합
 * 리터럴 타입(유닛 타입)        : 원소가 1개인 집합
 * 값이 T에 할당 가능           : 값 ∈ T (값이 T의 원소)
 * T1이 T2에 할당 가능          : T1 ⊆ T2 (T1이 T2의 부분 집합)
 * T1이 T2를 상속              : T1 ⊆ T2 (T1이 T2의 부분 집합)
 * T1 | T2(T1과 T2의 유니온)   : T1 ∪ T2 (T1과 T2의 합집합)
 * T1 & T2(T1과 T2의 인터섹션)  : T1 ∩ T2 (T1과 T2의 교집합)
 * unknown : 전체 집합
 */

// 1. 유니온(|) 타입
type ToggleType = "on" | "off";

const togglsState1: ToggleType = "on";
const togglsState2: ToggleType = ""; // 에러

// 유니온 타입을 쓸 때 주의할 점
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

function introduce(someone: Person | Developer) {
  someone.name;
  someone.age;
  someone.skill;
  /**
   * introduce 함수 호출 시, someone이 Person일지 Developer일지 모르기 때문에
   * 두 타입에 공통적으로 정의된 name만 접근할 수 있다.
   */
}

// 2. 인터섹션(&) 타입 - 각 타입 내의 속성을 모두 포함하는 타입
type Manager = Person & Developer;

const manager: Manager = {
  name: "captin",
  age: 35,
  skill: "react",
};

// 3. extends 키워드

// 서브타입 - 어떤 집합이 다른 집함의 부분 집합이라는 의미
interface DeveloperSpan extends Developer {
  language: string;
}

const developerSpan: DeveloperSpan = {
  name: "developerSpan",
  skill: "react",
  language: "javascript",
};

// 제네릭 제약 조건
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a");
getProperty(obj, "d"); // <T, K extends keyof T>에서 첫 번째 인자로 받는 객체에 없는 속성들은 접근할 수 없음.
