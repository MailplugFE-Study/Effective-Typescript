/**
 * item15.동적 데이터에 인덱스 시그니처 사용하기
 */

type Signature = {
  [key: string]: string | number | boolean;
};
// key 타입은 string, number, Symbol만 가능
// value 타입은 어떤 타입이든 가능

// 주의할점은 잘못된 키를 포함해도 에러를 발생시키지 않는다는 것
// 런타임에 객체의 정확한 프로퍼티를 알 수 없는 동적 데이터의 경우 사용하는 것을 권장

// 대안 1. Record - 키 타입으로 문자열 리터럴 사용 가능
type Signature1 = Record<"x" | "y" | "z", string | number | boolean>;

// 대안 2. 매핑된 타입
type Signature2 = {
  [k in "id" | "displayName"]: number;
};
