type User = {
  id: number;
  name: string;
};

// 타입 선언 - 값이 타입을 만족하는지 검사
const user1: User = {
  id: 1,
  name: "hello",
};

// 타입 단언 (as) - 강제로 타입 지정, 타입 체커에게 오류 무시하도록 지시
// angle brackets - React의 JSX에서 태그와 혼용되기 때문에 잘 사용 X
const user2 = {
  id: 2,
  name: "hi",
} as User;

// 컴파일러보다 개발자가 해당 타입을 더 잘 알고 있을 때 사용
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
