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

// 2) 분기문 (능숙한 타입 체커)
const element = document.getElementById("myElement");
if (element) {
  element.innerHTML = "hello";
} else {
  alert("element not found");
}
const element2 = document.getElementById("myElement");
(element2 as HTMLElement).innerHTML = "hello"; // 안좋은 방법

// 3) 명시적 태그 붙이기
type UserInfo2 = {
  type: "user";
  name: string;
  id: number;
};
type AdminInfo2 = {
  type: "admin";
  name: string;
  id: number;
};
type UserOrAdmin = UserInfo2 | AdminInfo2;
const handleUserOrAdmin = (user: UserOrAdmin) => {
  switch (user.type) {
    case "user":
      console.log(user.name);
      break;
    case "admin":
      console.log(user.name);
      break;
  }
};

// 4) instanceof (클래스의 경우)
class Car {
  name = "car";
  drive() {
    console.log("drive");
  }
}

class House {
  name = "house";
  openDoor() {
    console.log("open door");
  }
}

function getInfo(target: Car | House) {
  if (target instanceof Car) {
    target.drive();
    return;
  }

  target.openDoor();
  return;
}

// 5) isArray (배열의 경우)
type User = {
  name: string;
  age: number;
};

function getUsers(users: User[] | User) {
  const userList = Array.isArray(users) ? users : [users];
  return userList;
}
