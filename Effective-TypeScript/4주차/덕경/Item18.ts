// 매핑된 타입을 사용하여 값을 동기화하기
// 한 객체의 속성을 기반으로 다른 객체의 속성 타입이나 구조를 동적으로 생성하고 유지하는 것을 의미한다.
// 이를 통해 객체 간의 속성과 타입이 일치하도록 강제함으로써 데이터의 일관성과 안정성을 유지할 수 있다.
interface UserProfile {
  name: string;
  email: string;
  age: number;
  hobby: string;
}

// 매핑된 타입을 사용하여 UserProfile 기반의 설정 타입 생성
type UserSettings<T> = {
  [P in keyof T]: boolean;
  // 모든 사용자 설정은 boolean 타입으로, 예를 들어 설정의 활성화/비활성화를 나타냄
};

// UserProfile을 기반으로 한 UserSettings 타입 사용
const userSettings: UserSettings<UserProfile> = {
  name: true, // 예: 사용자 이름 설정 활성화
  email: false, // 예: 이메일 설정 비활성화
  age: true, // 예: 나이 설정 활성화
  hobby: false, // 예: 취미 설정 비활성화
};

/* 
UserSettings 타입은 UserProfile의 각 속성을 순회하며, 
해당 속성의 타입을 boolean으로 매핑하여 새로운 타입을 생성함. 
이를 통해 userSettings 객체는 UserProfile의 속성 구조를 유지하면서,
 각 설정의 활성화 여부를 boolean 값으로 관리할 수 있다.

이 방식은 타입의 안정성을 보장하며, 유지 보수성을 높임
예를 들어, UserProfile에 새로운 속성이 추가되면, UserSettings 타입도 자동으로 해당 속성에 대한 설정을 포함하게 됨. 
이를 통해 객체 간의 속성 동기화를 유지할 수 있으며, 프로젝트의 확장성과 유연성을 향상시킬 수 있다.

*/
