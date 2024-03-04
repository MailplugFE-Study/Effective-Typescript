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

let id = 1;
let user = { username: "hello", age: 20 };

getUserInfo(user, id); // Argument of type 'number' is not assignable to parameter of type '1 | 2 | 3'.
