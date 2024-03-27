/**
 * item 10. 객체 래퍼 타입 피하기
 * - 자바스크립트에는 원시형 타입 (string, number, boolean, null, undefined, symbol, bigint)가 있고,
 *   이 원시형 타입에 대응하는 객체 래퍼 타입 (String, Number, Boolean, Symbol, BigInt)이 있다.
 *
 * - 원시형 타입들은 불변(immutable)이고, 메서드를 가지지 않는다.
 *   메서드를 호출하면 자바스크립트는 원시형 타입을 객체 래퍼 타입으로 래핑하고, 메서드를 호출하고, 래핕한 객체를 가비징한다.
 *
 * - 타입스크립트에서 타입 선언시 객체 래퍼 타입으로 선언하게 되면 변수를 할당할 수 없는 에러가 발생하기 때문에 원시형 타입을 선언해줘야 한다.
 */

const s: String = "hello"; // 정상. 기본형 타입(string)은 객체 래퍼(String)에 할당할 수 있다. 그러나 굳이 이렇게 할 필요는 없다.

function findArrIncludeS(s: String, arr: string[]) {
  return arr.includes(s); // String 객체 래퍼 타입은 string 타입에 할당할 수 없다.
}

const arr = ["hello", "world"];
console.log(findArrIncludeS("hello", arr));
