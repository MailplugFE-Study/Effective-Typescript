// JS 배열은 Object
// Key, Value로 구성, Key는 string/symbol 타입

// number 타입의 key로 접근 불가능, JS 엔진에서 자동으로 형변환이 되기 때문에 number 키로 접근 가능
arr[0];
arr["0"]; // 런타임에 string으로 변환
// 편의성을 위해 TS에서는 number 타입의 key로 접근 가능

// 튜플 사용
type Row = [number, number, number];
const row: Row = [1, 2, 3];

// ArrayLike
interface ArrayLike<T> {
  readonly length: number;
  [index: number]: T;
}

const arrayLike: ArrayLike<string> = {
  length: 3,
  0: "he",
  1: "ll",
  2: "o",
};

console.log(arrayLike[0]);
console.log(arrayLike.length);
