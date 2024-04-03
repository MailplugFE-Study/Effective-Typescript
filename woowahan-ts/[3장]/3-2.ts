// 1)
type ProductItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

type ProductItemWithDiscount = ProductItem & { discountAmount: number };

// 2)
type CardItem = {
  id: number;
  name: string;
  type: string;
  imgUrl: string;
};

type PromotionEventItem = ProductItem | CardItem;

//------------------------------------------

const printPromotionItem = (item: PromotionEventItem) => {
  console.log(item.name); // O
  console.log(item.quantity); // X 컴파일 에러 발생
};

const printPromotionItemWithTypeGuard = (item: PromotionEventItem) => {
  console.log(item.name); // O

  // quantity 속성이 있는지 확인하는 타입 가드 사용
  if ("quantity" in item) {
    console.log(item.quantity); // O
  }
};

// 3)
interface IndexSignature2 {
  [key: string]: number | boolean;
  length: number;
  isvalid: boolean;
  name: string; // 인덱스 유형  number | boolean에 string을 할당할 수 없어 에러 발생
}

// 4)
type Ex = {
  a: number;
  b: string;
  c: boolean;
};

type IndexedAccess = Ex["a"];
type IndexedAccess2 = Ex["a" | "b"]; // number | string
type IndexedAccess3 = Ex[keyof Ex]; // number | string | boolean

type ExAlias = "b" | "c";
type typeIndexedAccess4 = Ex[ExAlias]; // string | boolean

//------------------------------------------

const PromotionList = [
  { type: "product", name: "chicken" },
  { type: "product", name: "pizza" },
  { type: "card", name: "cheer-up" },
];

type ElementOf<T> = (typeof T)[number];

type PromotionItemType = ElementOf<typeof PromotionList>; // {type : string; name : string}

// 5)
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const Ex1: Subset<Ex> = { a: 2 };
const Ex2: Subset<Ex> = { b: "hello" };
const Ex3: Subset<Ex> = { a: 4, c: true };

//------------------------------------------

type ReadonlyEx = {
  readonly a: number;
  readonly b: string;
};

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type ResultType = CreateMutable<ReadonlyEx>; // {a: number, b: string} (readonly 제거됨)

//------------------------------------------

type OptionalEx = {
  a?: number;
  b?: string;
  c: boolean;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type ResultType2 = Concrete<OptionalEx>; // {a: number, b: string, c: boolean} (optional 제거됨)

//------------------------------------------

const memberEx = {
  id: 1,
  name: "harin",
  positionName: "사원",
  organization: "그룹웨어 1팀",
};

export type Member = keyof typeof memberEx; // 'id' | 'name' | 'positionName' | 'organization'

type MemberTypeEn = {
  [index in Member as `${index}_En`]: string | number;
};



// 6)
type Stage =
| 'init'
| "select-image'
| "edit-image'
| 'decorate-card'
| 'capture-image'

type StageName = `${Stage}-stage`
// 'init-stage' | 'select-image-stage' | 'edit-image-stage' | 'decorate-card-stage' | 'capture-image-stage'



// 7)
type ExArrType<T> = T[];
const arr1: ExArrType<string> = ["chicken", "pizza"];

//------------------------------------------

type ExArrType2 = any[];

const arr2: ExArrType2 = [
  "chicken",
  { id: 0, name: "치킨", price: 20000 },
  100,
  true,
]; // 아무타입이나 할당해도 에러 x

//------------------------------------------

function exFunc<T>(arg: T): T[] {
  return new Array(3).fill(arg);
}

exFunc("hello"); // T는 string으로 추론

//------------------------------------------

interface SubmitEvent<T = HTMLElement> extends SyntheticEvent<T> {
  submitter: T;
}

//------------------------------------------

function exFunc2<T>(arg: T): number {
  return arg.length; // Error: Property 'length' does not exist on type 'T'.
}

interface TypeWithLength {
  length: number;
}

// length 속성을 가진 타입만 받는다는 제약을 걸어준다.
function exFunc3<T extends TypeWithLength>(arg: T): number {
  return arg.length; // OK
}

//------------------------------------------

const ExFunc = <T>(arg: T): T[] => {
  return new Array(3).fill(arg);
}; // <T>를 태그로 착각해서 에러발생

const ExFunc2 = <T extends {}>(arg: T): T[] => {
  return new Array(3).fill(arg);
}; // 특정 타입의 하위 타입만 올 수 있음을 알려준다.
