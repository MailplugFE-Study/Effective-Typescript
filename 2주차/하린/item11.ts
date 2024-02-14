/**
 * item11. 잉여 속성 체크의 한계 인지하기
 * - 타입스크립트는 타입이 선언된 변수에 객체를 선언할 때 '해당 타입의 속성이 있는지 초과하는 속성은 없는지' 확인한다.
 *   객체 리터럴에 알 수 없는 속성을 허용하지 않음으로써, 문제점을 방지할 수 있다.
 */

// 타입이 선언된 변수에 바로 객체 할당
interface Country {
  name: string;
  capital: string;
  language: string;
}

const korea: Country = {
  name: "대한민국",
  capital: "서울",
  language: "한국어",
  population: 50000000, // 잉여 속성 체크로 인해 에러 발생
};
// } as Country; // 타입단언을 써주면 잉여 속성 체크를 피할 수 있다.

const japan = {
  name: "일본",
  capital: "도쿄",
  language: "일본어",
  population: 100000000,
};

const japan2: Country = japan; // 에러가 나지 않음. 잉여 속성 체크를 하지 않음.

// 인덱스 시그니처를 통해 잉여 속성 체크를 피할 수 있다.
interface Country2 {
  name: string;
  capital: string;
  language: string;
  [key: string]: any; // 추가 속성을 예상하도록 해주는 인덱스 시그니처
}

const korea2: Country2 = {
  name: "대한민국",
  capital: "서울",
  language: "한국어",
};
