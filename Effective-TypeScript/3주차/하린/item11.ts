/**
 * item11. 잉여 속성 체크의 한계 인지하기
 * - 타입스크립트는 타입이 선언된 변수에 객체를 선언할 때 '해당 타입의 속성이 있는지 초과하는 속성은 없는지' 확인한다.
 *   이를 초과 프로퍼티 검사 라고 한다.
 *   객체 리터럴에 알 수 없는 속성을 허용하지 않음으로써, 문제점을 방지할 수 있다.
 */

/**
 * 타입이 선언된 변수에 객체 리터럴을 바로 할당하거나 인수로 전달하게 되면 초과 프로퍼티 검사를 받게 된다.
 * 만약 객체 리터럴이 대상 타입이 가지고 있지 않은 프로퍼티를 갖고 있으면 에러가 발생할 수 있다.
 */

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

/**
 * 객체를 다른 변수에 할당하면 해당 변수는 초과 프로퍼티 검사를 받지 않기 때문에 컴파일러는 에러를 발생시키지 않는다.
 */
const japan = {
  name: "일본",
  capital: "도쿄",
  language: "일본어",
  population: 100000000,
};

const japan2: Country = japan;

/**
 * 추가 프로퍼티가 있음을 확신한다면 인덱스 시그니처를 통해 잉여 속성 체크를 피할 수 있다.
 */

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
  population: 50000000,
};
