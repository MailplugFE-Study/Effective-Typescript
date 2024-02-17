// 확장
// interface
interface Modal {
  type: string;
  text: string;
}
interface AlertModal extends Modal {
  callBack: () => void;
}
const alertModal: AlertModal = {
  type: "alert",
  text: "로그인이 필요합니다.",
  callBack: () => {
    router.push("/login");
  },
};

// type
type Modal2 = {
  type: string;
  text: string;
};
type ConfirmModal2 = Modal2 & {
  callBack: () => void;
};
const confirmModal2: ConfirmModal2 = {
  type: "confirm",
  text: "결제를 진행하시겠습니까?",
  callBack: () => {
    router.push("/payment");
  },
};

// 선언적 확장 (같은 이름의 interface를 선언하면 자동으로 확장)
interface Post {
  title: string;
  content: string;
}
interface Post {
  subTitle: string;
}
const post: Post = {
  title: "제목",
  content: "내용",
  subTitle: "부제목",
};
// -> type은 불가능. 확장성은 interface

// 자료형
// interface: 객체의 타입을 정의할 때 사용, 원시 자료형에는 사용 불가능
interface UserInfo {
  name: string;
  id: number;
}
interface name extends string {} // -> 불가능

// type: 객체, 원시값, 튜플, 유니언 모두 사용 가능
type Name = string;
type Person = [string, number]; // 튜플
const person: Person = ["hello", 123];
type Title = string | number;

// 정리
// 1) type과 interface의 성능 차이는 X
// 2) 확장성을 고려한다면 interface 사용. 확장 불가능 타입 선언은 type, 가능한 타입 선언은 interface
// 3) interface는 객체 타입만 선언, type은 모두 선언 가능
// 프로젝트 내에서 정해진 코드 컨벤션에 따라 사용
