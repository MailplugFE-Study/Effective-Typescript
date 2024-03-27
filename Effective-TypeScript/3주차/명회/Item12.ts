// 함수 표현식 권장
// 함수 선언문은 매개변수와 반환값의 타입을 따로 선언
// 함수 표현식은 매개변수와 반환값을 한번에 함수 타입으로 선언 가능

// 함수 선언문
type Params = {
  value: string;
  id: string;
};
type Result = {
  value: string;
};
function handleChange(params: Params): Result {
  return { value: params.value };
}

// 함수 표현식
type HandleChange2 = (value: Params) => Result; // 반복되는 함수 시그니처를 하나의 함수 타입으로 통합
const handleChange2: HandleChange2 = (params) => {
  return { value: params.value };
};
