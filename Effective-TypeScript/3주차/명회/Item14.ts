// 타입 재활용

// type 재활용으로 선언 중복 제거
// before
const dateUtil = (
  startDate: { date: Date; option: number },
  endDate: { date: Date; option: number }
) => {};
// after
type DateOption = {
  date: Date;
  option: number;
};
const dateUtil2 = (startDate: DateOption, endDate: DateOption) => {};

// 기존 타입에서 타입 연산자를 이용한 타입 확장
// before
type Item14Modal = {
  type: string;
  text: string;
};
type Item14AlertModal = {
  type: string;
  text: string;
  callBack: () => void;
};
// after
type Item14Modal2 = {
  type: string;
  text: string;
};
type Item14AlertModal2 = Item14Modal2 & {
  callBack: () => void;
};

// 타입 축소
// before
interface CardInfo {
  userId: string;
  title: string;
  comment: string;
}
type Card = {
  title: string;
  comment: string;
};
// after
type Card2 = {
  [key in "title" | "comment"]: CardInfo[key];
};
// after2 keyof + 제네릭
type CustomPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
// keyof T: T의 모든 키를 유니온 타입으로 반환 ('title' | 'comment')
type Card3 = CustomPick<CardInfo, "title" | "comment">;
// CustomPick은 TypeScript에서 제공하는 Pick 유틸리티 타입과 동일한 기능을 수행

// 기존 타입을 Optional로 변경
// before
type Item14Card = {
  title: string;
  comment: string;
  userId: string;
};
type OptionalCard = {
  title?: string;
  comment?: string;
  userId?: string;
};
// after
type PartialCard = Partial<Item14Card>;
// Partial 유틸리티 타입 사용
type Partial<T> = { [P in keyof T]?: T[P] };
