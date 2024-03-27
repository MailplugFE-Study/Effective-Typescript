// 실패에 닫힌 접근법
// 모든 변경 사항을 엄격하게 검사, 불필요한 리렌더링 방지, 새로운 속성 추가시 감지X
interface User {
  name: string;
  age: number;
}
const updatedUser = (prevUser: User, newUser: User) => {
  return prevUser.name !== newUser.name || prevUser.age !== newUser.age;
};

// 실패에 열린 접근법
// 새로운 속성 추가시 업데이트 로직을 수동으로 유지
interface User2 {
  name: string;
  age: number;
}

const updatedUser2 = (prevUser: User, newUser: User) => {
    return (
        prevUser.name !== newUser.name ||
        prevUser.age !== newUser.age ||
        // 새로운 속성 추가시 수동으로 추가
        // prevUser.email !== newUser.email
        // 변경되었을 때 렌더링이 필요하지 않은 속성을 추가
  )
};

// 이상적인 해결법
// 실패에 열린 접근법의 단점 보완
// 매핑된 타입을 사용해 값과 타입 동기화
// 새로운 속성 추가시 자동으로 감지
interface User3 {
  name: string;
  age: number;
}

// 매핑된 타입을 이용하여 업데이트 여부를 동기화
const REQUIRES_UPDATE: { [key in keyof User3]: boolean } = {
  name: true,
  age: true,
  // 새로운 속성이 추가시 수동으로 추가
};

const shouldUpdate = (prevUser: User3, newUser: User3) => {
  let key: keyof User3;

  for (key in prevUser) {
    if (prevUser[key] !== newUser[key] && REQUIRES_UPDATE[key]) {
      return true;
    }
  }

  return false;
};
// prevUser, newUser 비교 후 REQUIRES_UPDATE 객체에 key 값이 true일 때만 업데이트 여부를 반환
// 더블체크로 인해 불필요한 렌더링을 방지