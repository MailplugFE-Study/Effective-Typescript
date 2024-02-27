const numbers: readonly number[] = [1, 2, 3, 4, 5];

numbers.push(6); // readonly error
numbers[0] = 10; // readonly error

function sum(numbers: readonly number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(numbers));

// const vs readonly
// const - 재할당 불가, 요소 수정 가능
const arrayConst: number[] = [1, 2, 3, 4, 5];
arrayConst.push(6); // 수정 가능
arrayConst[0] = 10; // 수정 가능

// readonly - 요소 수정 불가
const arrayReadonly: readonly number[] = [1, 2, 3, 4, 5];
arrayReadonly.push(6); // 수정 불가능
arrayReadonly[0] = 10; // 수정 불가능

// readonly는 얕은 복사 적용
type Posts = {
  topic: string;
  post: {
    title: string;
    content: string;
  };
};

const posts: Readonly<Posts> = {
  topic: "TypeScript",
  post: {
    title: "TypeScript1",
    content: "TypeScript1 content",
  },
};
posts.topic = "JavaScript"; // 불가능
posts.post.title = "JavaScript1"; // 가능
// 깊은 복사는 ts-essentials 사용
