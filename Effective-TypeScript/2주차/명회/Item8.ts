// 같은 이름의 타입/식별자가 있으면 다른 공간
type Post = {
  title: string;
  category: string;
};
const Post = {
  title: "hello",
  category: "tech news",
};

// class, enum은 타입, 값 둘 다 사용 가능하므로 중복 X (같은 공간)
type Movie = {
  title: string;
  category: string;
};
class Movie {} // Duplicate identifier 'Movie'.
enum Movie {
  Action = "Action",
  Comedy = "Comedy",
  Drama = "Drama",
} // Enum declarations can only merge with namespace or other enum declarations.

// typof는 타입, 값 둘 다 사용 가능, 상황에 따라 다른 동작
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "hello",
  age: 10,
};

type person2 = typeof person; // Type context, Person type 반환
const person3 = typeof person; // Value context, 변수 or 표현식의 값으로 사용될 때 해당 값의 타입을 문자열로 반환. Person의 타입이 아닌 값 ("object")

// 속성 접근자 : [] 로 접근
type UserInfo = {
  name: string;
  id: number;
  post: {
    title: string;
    category: string;
  };
};

const post1: UserInfo["post"] = {
  title: "hello",
  category: "news",
};
const post2: UserInfo[keyof UserInfo] = {
  title: "hihi",
  category: "tech",
};
const post3: UserInfo["id" | "name" | "post"] = {
  title: "hehe",
  category: "tech news",
};
const userName: UserInfo["name"] = "dodo";
const userId: UserInfo["id"] = 1;
