// 넓은 타입으로부터 좁은 타입으로 진행하는 과정
// 타입 체커에게 타입에 대한 확신을 줄 수 있다.

// 1) 속성 체크
interface UserInfo {
  userName: string;
  id: number;
}
interface AdminInfo {
  adminName: string;
  id: number;
}

const getUser = (user: UserInfo | AdminInfo) => {
  if ("userName" in user) {
    console.log(user.userName);
  } else {
    console.log(user.adminName);
  }
};
