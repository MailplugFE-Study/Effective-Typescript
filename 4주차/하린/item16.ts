/**
 * item16. number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기
 */

// 배열은 객체이므로 키는 숫자가 아니라 문자열이다.
const arr = [1, 3, 4];
console.log(Object.keys(arr)); // ["0", "1", "2"]
