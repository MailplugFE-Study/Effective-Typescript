/**
 * item16. number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기
 */

const arr = [1, 3, 4]; // 배열은 객체이므로 키는 숫자가 아니라 문자열이다.
arr[1]; // number 인덱스로 접근가능한 것은 자바스크립트 런타임에서 자동으로 string 타입으로 형변환이 되기 때문
console.log(Object.keys(arr)); // ["0", "1", "2"]

/**
 * 일관성을 지닌 타입스크립트
 *
 * Array 타입
 * interface Array<T> {
 *  [n: number]: T;
 * }
 *
 * 실제 Object는 문자열(또는 심볼) 타입으로만 접근가능하지만, js와 일관성을 위해 키 타입 number를 허용
 * number 인덱스 시그니처가 필요하면 Array, 튜플, ArrayLike 사용
 */
