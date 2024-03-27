/**
 * item 8. 타입 공간과 값 공간의 심벌 구별하기
 */

// typeof - 변수나 프로퍼티의 타입을 추론
let a = "hello";
let b = typeof a; // string

// 타입의 속성을 얻을 때에는 대괄호를 사용
const personName: Person["name"] = manager["name"]; // 또는 manager.name
