/**
 * item14.타입 연산과 제네릭 사용으로 반복 줄이기
 * D(on't) R(epeat) Y(ourself) - DRY 원칙
 */

// extends로 반복 줄이기
// extends 사용하지 않은 경우
interface Product {
  id: number;
  name: string;
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// extends 사용한 경우 -> 중복 제거
interface Product2 {
  id: number;
  name: string;
}

interface ProductDetail2 extends Product2 {
  price: number;
}

// 인덱싱
interface InputState {
  id: number;
  displayName: string;
  duty: string;
  hp: string;
}

interface ReqiredInputState {
  id: InputState["id"];
  displayName: InputState["displayName"];
}

// 매핑된 타입
type RequiredInputState2 = {
  [k in "id" | "displayName"]: InputState[k];
};

/**
 * Pick (유틸리티 타입) - 특정 타입에서 몇 개의 속성을 선택하여 타입 정의
 * type Pick<T, K extends keyof T> = { [k in K]: T[k]; };
 * K는 T의 키 값의 부분집합이어야한다. (keyof T)
 */
type RequiredInputState3 = Pick<InputState, "id" | "displayName">; // { id: number; displayName: string; }
type InputState4 = Pick<InputState, "id" | "tel">; // Property 'tel' does not exist on type 'InputState'.

// Partial (유틸리티 타입) - 특정 타입의 부분 집합을 만족하는 타입을 정의
type InputUpdateState = Partial<InputState>; // { id?: number | undefined; displayName?: string | undefined; duty?: string | undefined; hp?: string | undefined; }
const inputUpdateState: InputUpdateState = { id: 1, displayName: "뿡뿡이" };

// keyof - 객체의 키 값들을 숫자나 문자열 리터럴 유니언을 생성
type InputStateKeys = keyof InputState; // "id" | "displayName" | "duty" | "hp"

// typeof - 값에 해당하는 타입 정의
const aa = {
  id: 1,
  displayName: "하린",
  duty: "cto",
  hp: "010-1234-5678",
};
type InputStateTypes = typeof aa; // { id: number; displayName: string; duty: string; hp: string; }

// ReturnType<Type> - 함수 Type의 반환 타입 추출
declare function f1(): { a: number; b: string };
type T1 = ReturnType<typeof f1>; // { a: number; b: string; }

// 제네릭 extends 타입 제한
function getInputValue<T extends keyof InputState>(key: T) {
  return aa[key];
}

getInputValue("id");
getInputValue("tel"); // keyof InputState에 없는 속성을 넘겨주면 에러 발생
