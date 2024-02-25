/* 
자바스크립트에선 객체란 키/값 쌍의 모음, 키는 보통 문자열

복잡한 객체를 키로 쓰려고 하면 문자열로 변환함, 숫자는 사용 불가
*/
let arr = [1, 2, 3];
arr[0]; // 1
arr["1"]; // 2
const x = { 0: "a", 1: "b", 2: "c" };
Object.keys(x); // ['0','1','2']

/*
타입 스크립트에선 이러한 어지러운 상황을 개선하고자,
숫자(number) 키 허용, 문자열 키와 다른 것으로 인식함

인덱스 시그니처 에 number를 사용하기 보다는 Array나 튜플 또는 ArrayLike 타입을 쓰는 게 좋음
*/

// 튜플
const person: [string, number] = ["Alice", 30];

// 튜플 요소에 접근
console.log(person[0]); // 'Alice'
console.log(person[1]); // 30

// ArrayLike
// length 속성과 인덱싱(0, 1, 2, ...)된 요소를 가진 객체

function logArguments(...args: any[]) {
  const argsArray: ArrayLike<any> = arguments;
  console.log(argsArray.length); // 전달된 인자의 수
  console.log(argsArray[0]); // 첫 번째 인자
}

logArguments("Hello", "TypeScript", 123);
