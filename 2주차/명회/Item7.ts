// Union : '|' 연산자를 사용하여 여러 타입 지정
type UserInfo = string | number;
const userAge: UserInfo = 20;
const userName: UserInfo = "hello";

// Union type 사용시 오류
const func1 = (data: number | string): void => {
  console.log(data + 1); // data가 string이거나 number일 수 있기 때문에 오류 발생
};

// 타입 가드 : 컴파일러가 타입을 추론할 수 있도록 도와주는 방법
// 1) typeof
const func2 = (data: number | string): void => {
  if (typeof data === "number") {
    console.log(data + 1);
  }
};

// 2) in
type Animal = {
  name: string;
  age: number;
};
type Person = {
  name: string;
};
const func3 = (data: Animal | Person): void => {
  if ("age" in data) {
    console.log(data.age);
  }
};

// Intersection type
interface Error {
  success: boolean;
  error: { message: string };
}
interface Posts {
  data: { title: string }[];
}
type PostResponse = Error & Posts;
const func4 = (response: PostResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.data);
};
