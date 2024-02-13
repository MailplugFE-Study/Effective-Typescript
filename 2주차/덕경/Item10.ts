/*객체래퍼타입 피하기 */
let a = new String("abc"); // 객체래퍼타입
let b: string = "abc"; // 기본형(문자열)타입

function example(a: string, b: String) {
  return ["Duck", "danji"].includes(a) && b.includes(b);
}
/* 
'String' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
  string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다. 가능한 경우 'string'을(를) 사용하세요.ts(2345)
(parameter) b: String
*/
