// 객체 래퍼 타입 : String, Number, Boolean
// 원시 타입 : string, number, boolean

// toUpperCase(), toLowerCase(), slice, substring, indexOf, length는 string의 메서드 X
const username = "hello";
console.log(username.length);
console.log(username.toUpperCase());
// 1) name.length, name.toUpperCase() 처럼 프로퍼티를 참고할 때
// 2) name = new String("hello")
// 3) 와 같이 래퍼 객체 String이 실행되어 username을 객체화
// 4) username은 객체화되어 String의 프로퍼티 참고 --> 원시 타입을 객체화 시켜주는 객체형 데이터 타입이 래퍼 객체
// 5) 마지막에 래핑한 객체를 버린다. (한 번 사용한 직후 가비지 컬렉션에 의해 회수)

const str = "JavaScript";
// JavaScript 엔진이 해석한 소스 코드
const str = new String("JavaScript");

const str2 = "TypeScript";
console.log(str.length);
console.log(str.toUpperCase());
// JavaScript 엔진이 해석한 소스 코드
const str2 = new String("JavaScript");
console.log(new String(str2).length);
console.log(new String(str2).toUpperCase());

// 타입스크립트는 기본형과 객체 래퍼 타입을 별도로 모델링하므로 기본형 타입 사용
// string은 String에 할당 가능, String은 string에 할당 불가능
function isSubString(subString: String) {
  return "hello".indexOf(subString) !== -1;
  //Argument of type 'String' is not assignable to parameter of type 'string'.
}
