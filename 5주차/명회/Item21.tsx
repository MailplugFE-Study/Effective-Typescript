// 변수 초기화 시 타입을 명시하지 않으면 타입체커는 타입 결정
// 할당 가능한 값들의 집합을 유추하는 과정을 타입 넓히기

// 타입 넓히기는 추론 가능한 타입이 여러개
interface UserInfo {
  username: string;
  age: number;
}

const getUserInfo = (user: UserInfo, id: 1 | 2 | 3) => {
  return user[id];
};

// 타입을 명시하지 않았으므로 타입 추론. 후보군은 any, number, 1
let id = 1; // id는 let으로 선언되었기 때문에 다른 number로 재할당 가능할 수 있어 최종적으로 number로 추론
let user = { username: "hello", age: 20 };

getUserInfo(user, id); // Argument of type 'number' is not assignable to parameter of type '1 | 2 | 3'.
// --> 할당 시점에 타입 넓히기가 동작하여 number 타입으로 추론되었기 때문에 오류 발생

// 타입 넓히기 과정 제어
// 1) const 선언
const id2 = 2; // 다른 number로 재할당이 불가능하여 최종적으로 2로 추론
let user2 = { username: "hi", age: 21 };
getUserInfo(user2, id2);
// 정상 작동
// --> const id2는 재할당이 불가능하기에 가장 좁은 타입인 2로 추론

// 2) const 단언문 사용 (변수 선언에 사용되는 const 와 혼동 X)
const v1 = {
  x: 1,
  y: 2,
}; // { x: number; y: number; }
const v2 = {
  x: 1 as const,
  y: 2,
}; // { x:1 , y: number; }
const v3 = {
  x: 1,
  y: 2,
} as const; // { readonly x: 1; readonly y: 2}
