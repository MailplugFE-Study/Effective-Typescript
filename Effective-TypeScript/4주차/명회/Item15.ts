// 인덱스 시그니처 - 객체의 특정 Value에 접근할 때, Value의 Key를 문자열로 인덱싱(접근) 해 참조하는 방법

// 자바스크립트 Index Signature
const item15Obj = {
  title: "자바스크립트",
  item: 15,
};
item15Obj["title"]; // Value의 Key인 title 문자열로 객체의 Value에 접근

// 타입스크립트 Index Signature
interface item15Obj<T> {
  [key: number]: T;
}

let value1: item15Obj<number>["hello"]; // 오류, 프로퍼티 'hello'는 타입 'item15Obj2<number>'에 존재하지 않습니다.
let value2: item15Obj<number>[42]; // 숫자

// 문제점 - 모든 키 허용, 특정키 필요 X, 키마다 다른 타입을 가질 수 없음

// -> 객체에 어떤 프로퍼티가 있을지 모르는 경우 사용

// 객체의 프로퍼티를 명확히 알 수 없을 때
interface UserData {
  [key: string]: string;
}

const userInput: UserData = {
  name: "test",
  email: "test@example.com",
  phone: "010-1234-5678",
};

// -> 타입에 가능한 필드가 제한되어 있는 경우 사용 X

// 대안 1 - Record 제네릭 타입 사용 (모든 키 허용 문제점 해결)
type UserData2 = Record<"name" | "email" | "phone", string>;
// ->  type UserData2 = {
//       name: string;
//       email: string;
//       phone: string;
//      };

// 대안 2 - 매핑된 타입 사용 (키마다 별도의 타입을 지정) (모든 키 허용 문제점 해결)
type UserData3 = {
  [k in "name" | "email" | "phone"]: string;
};
type UserData4 = {
  [k in "name" | "email" | "phone"]: k extends "email" ? string : number; // 키마다 다른 타입을 가질 수 없는 문제점 해결
};
// type UserData4 = {
//     name: number;
//     email: string;
//     phone: number;
// }
