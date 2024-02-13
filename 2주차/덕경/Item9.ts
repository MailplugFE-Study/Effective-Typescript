/* 타입 단언 보단 타입 선언을 사용하기 */

let input1: any = 12;
let abc: number = (input1 as string).length;

console.log(length); // 출력: 3
/* 
위의 코드에서 input 변수를 any 타입으로 선언하고, 문자열의 길이를 얻기 위해 타입 단언을 사용하여 input을 string 타입으로 변환합니다. 
이 코드는 동작하지만,  input이 실제로 문자열이 아닌 다른 타입으로 할당되는 경우에는 오류가 발생할 수 있습니다.
*/

let input2: string = "123";
let def: number = input2.length;

console.log(length); // 출력: 3

/* 
위의 코드에서는 input 변수를 문자열로 선언하여 타입을 명시하고, 이후에 input의 길이를 바로 얻습니다. 
이 경우에는 타입 선언을 사용했기 때문에 타입이 일치하지 않는 경우에는 컴파일러가 오류를 발생시킵니다.
이렇게 보면 타입 선언을 사용하는 것이 코드를 더 명확하고 안전하게 만들어줍니다.
타입 단언은 필요한 경우에만 사용해야 하며, 되도록이면 타입 선언을 통해 타입을 명시적으로 지정하는 것이 좋습니다.
*/

/*DOM 엘리먼트는 일반적으로 TypeScript가 이해할 수 있는 형태가 아님 */

const myElement1 = document.getElementById("myElement");
myElement1.innerText = "Hello, TypeScript!";
// 'myElement'은(는) 'null'일 수 있습니다.ts(18047) 에러메세지
if (myElement1) {
  // 컴파일러가 myElement가 HTMLElement임을 이해하지 못함
  myElement1.innerText = "Hello, TypeScript!";
}

// HTML 요소를 가져옴
const myElement2 = document.getElementById("myElement") as HTMLElement;

// myElement가 null이 아니라고 가정하고 텍스트 콘텐츠를 변경
myElement2.innerText = "Hello, TypeScript!";

/* 
이제 타입 단언을 사용하여 myElement가 HTMLElement임을 명시적으로 알려줬으므로 컴파일러는 오류를 발생시키지 않고 코드를 실행할 수 있습니다. 
*/
