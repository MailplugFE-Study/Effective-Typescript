// 변경 관련된 오류 방지를 위해 readOnly 사용하기

interface Person {
  readonly name: string;
  readonly age: number;
}

const person: Person = { name: "Alice", age: 30 };
person.name = "Bob";
// 에러 : 읽기 전용 속성이므로 'name'에 할당할 수 없습니다
// readOnly를 사용하면 변경 관련된 오류를 방지할 수 있음

// ReadonlyArray<T>

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
numbers.push(6);
//'readonly number[]' 형식에 'push' 속성이 없습니다.
numbers[2] = 10;
//'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.

/* 
readonly number[] 타입
1. number[] 는 readonly number[] 의 서브타입이다
2. 배열의 요소를 읽기만 가능하다
3. length를 읽을 수 있지만, 바꿀 수 없다
4. 배열을 변경하는 메서드를 호출할 수 없다 (pop, push, slice ..)
5. readonly 배열에 변경가능한 배열(a)을 할당할 수는 있지만, 변경가능한 배열에 readonly 배열을 할당하는 것은 불가하다.

매개변수를 readonly로 선언했을 때
1. 타입스크립트는 매개변수가 함수 내에서 변경이 일어나는지 체크한다
2. 호출하는 쪽에서는 함수가 매개변수를 변경하지 않는다는 보장을 받게된다
3. 호출하는쪽에서 함수에 readonly 배열을 매개변수로 넣을 수도 있다

*/

/*
만약 함수가 매개변수를 수정하지 않는다면 readonly 로 선언하는 것이 좋다.
readonly 매개변수는 인터페이스를 명확하게 하며, 매개변수가 변경되는 것을 방지한다.
readonly를 사용하면 변경하면서 발생하는 오류를 방지할 수 있고 
변경이 발생하는 코드도 쉽게 찾을 수 있다
const 와 readonly의 차이를 이해해야 한다
readonly 는 얕게 동작한다는 것을 명심해야 한다

*/
