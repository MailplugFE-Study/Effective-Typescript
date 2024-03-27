/**
 * item9. 타입 단언보다는 타입 선언을 사용하기
 */

/**
 * 타입 선언은 할당되는 값이 해당 인터페이스를 만족하는지 검사한다.
 * 타입 단언은 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것이기 때문에 꼭 필요한 경우가 아니라면 지양하는 것이 좋다.
 */
const capt: Person = { name: "capt", age: 20, skill: "hero" }; // 에러
const capt2 = { name: "capt", age: 20, skill: "hero" } as Person; // 에러가 나지 않음

// unknown은 모든 타입의 상위 타입이기 때문에 as unknown은 항상 동작한다.
const str = "hello" as unknown as number; // 에러가 나지 않음
