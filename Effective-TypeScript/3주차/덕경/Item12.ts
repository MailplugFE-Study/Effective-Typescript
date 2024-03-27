// 함수 표현식에 타입 적용 예제
const greet: (name: string) => string = function (name) {
  return `Hello, ${name}!`;
};

// 화살표 함수에 타입 적용 예제
const sayGoodbye: (name: string) => string = (name) => {
  return `Goodbye, ${name}!`;
};

//함수 표현식에 타입을 적용하는 것은 코드의 안정성을 높이고, 함수의 사용 방법을 명확하게 하는 데 도움이 됨

declare function fetch(
  input: RequestInfo,
  init?: RequestInit,
): Promise<Response>;

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};
