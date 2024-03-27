//Item 26 ( 타입 추론에 문맥이 어떻게 사용되는지 이해하기 )

/**
 * const [message, setMessage] = useState('Hello, world!');
 * message는 string 타입으로 추론됩니다.
 * 위와 같이 타입스크립트가 추론하는 방식은 문맥을 사용하는 방식입니다.
 */
type Position = "left" | "right" | "center" | "top" | "bottom";
function setPosition(position: Position) {
  // ...
}
// 인라인 형태
setPosition("left"); // OK
setPosition("top"); // OK

// 변수에 할당해서 사용하는 형태
let position = "left"; // 타입은 "left"로 추론됩니다.
setPosition(position); // OK
//'string' 형식의 인수는 'Position' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

/**
 *인라인 형태에서 타입스크립트는 함수 선언을 통해 매개변수가 Position 타입이라는 것을 추론합니다.
 * 그러나 변수에 할당하는 시점에서 string으로 타입을 추론하고 사용하면 Postion 타입으로 할당할 수 없다는 에러가 발생합니다.
 * 위 문제를 해결하는 방법은 두 가지가 있습니다.
 */

// 1. 타입 선언에서 Position의 가능한 값을 제한하는 것.
let position2: Position = "left"; // OK
setPosition(position2); // OK

//2. 상수로 만드는 것
const position3 = "left"; // OK
setPosition(position3); // OK

// 튜플을 사용하는 예시
function setSize(size: [number, number]) {
  // ...
}

// 인라인 형태
setSize([100, 200]); // OK

// 변수에 할당해서 사용하는 형태
let size = [100, 200]; // 타입은 [number, number]로 추론됩니다.
setSize(size);
// number[]' 형식의 인수는 '[number, number]' 형식의 매개 변수에 할당될 수 없습니다. 대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.ts(2345)

// 해결 방법 (상수 선언)
const size2: [number, number] = [100, 200]; // OK
setSize(size2); // OK

// as const (오류 발생!)
const size3 = [100, 200] as const;

setSize(size3);
/* 
'readonly [100, 200]' 형식의 인수는 '[number, number]' 형식의 매개 변수에 할당될 수 없습니다.
  'readonly [100, 200]' 형식은 'readonly'이며 변경 가능한 형식 '[number, number]'에 할당할 수 없습니다.ts(2345)
*/

// 하지만 아래 처럼 readonly를 사용하면 오류가 발생하지 않는다.
function setSize2(size: readonly [number, number]) {
  // ...
}

setSize2(size3); // OK

// 객체를 사용하는 예시

type Language = "korean" | "english" | "japanese";
interface GovernedLanguage {
  language: Language;
  country: string;
}

function complain(language: GovernedLanguage) {
  // ...
}

complain({ language: "korean", country: "korea" }); // OK

const ex = { language: "korean", country: "korea" };
complain(ex); // error!
/*
'{ language: string; country: string; }' 형식의 인수는 'GovernedLanguage' 형식의 매개 변수에 할당될 수 없습니다.
  'language' 속성의 형식이 호환되지 않습니다.
    'string' 형식은 'Language' 형식에 할당할 수 없습니다.ts(2345)
const ex: {
    language: string;
    country: string;
}
*/

// 해결 방법
const ex2: GovernedLanguage = { language: "korean", country: "korea" };
complain(ex2); // OK

// 콜백을 사용하는 예시
// 콜백을 다른 함수로 전달할 때, 타입스크립트는 콜백의 매개변수 타입을 추론하기 위해서 문맥을 사용합니다.
function callWithRandomNumber(callback: (n1: number, n2: number) => void) {
  callback(Math.random(), Math.random());
}

// 인라인 형태
callWithRandomNumber((n1, n2) => {
  // ...
});

// 변수에 할당해서 사용하는 형태

const fn = (a, b) => {
  console.log(a, b);
};
// 'a' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.ts(7044)
// any가 유추됨.
// 콜백을 상수로 뽑아내면 문맥이 소실되고 any 오류가 발생합니다.
callWithRandomNumber(fn);

// 해결 방법
const fn2: (n1: number, n2: number) => void = (a, b) => {
  console.log(a, b);
};
callWithRandomNumber(fn2); // OK

/**
 * 결론
 * 1. 변수를 뽑아서 별도로 선언했을 때 오류가 발생한다면 타입 선언을 추가해야함.
 * 2. 변수가 정말 상수라면 as const를 사용하면 된다. 하지만 상수 단언을 사용하면 정의한 곳이 아니라 사용한 곳에서 오류가
 * 발생하므로 주의 해야함.
 *
 */
