// 잉여 속성 체크의 한계
// 잉여 속성 체크 - 타입에 선언된 속성 외에 속성이 있는지 체크

// 1) 속성체크를 통해 오류 잡기
interface Device {
  name: string;
}
const phone: Device = {
  name: "iphone",
  price: 1000000,
};
// --> 변수에 타입을 선언함과 동시에 객체 리터럴로 만들게 되면 잉여 속성 체크 가능
// 에러 발생

// 2) obj가 Device 타입의 부분 집합을 포함하므로 phone2에 할당 가능
// 타입 체커 통과
const obj = {
  name: "iphone",
  price: 1000000,
};
const phone2: Device = obj;
// --> 잉여 속성 체크 미적용

// 즉, 잉여 속성 체크는 객체 리터럴을 생성하여 할당할 때 적용

// 3) 단언문을 사용하여 속성 체크 생략
const phone3 = {
  name: "iphone",
  price: 1000000,
} as Device;
