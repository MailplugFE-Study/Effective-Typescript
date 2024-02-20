// 타입 연산과 제너릭 사용으로 반복 줄이기

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

type TopNavState = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
};

// 매핑타입
type TopNavStateTwo = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

// pick
// 원하는 타입만 뽑아내기

type IPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

type Person = {
  name: string;
  age: number;
  email: string;
};
type ContactInfo = Pick<Person, "name" | "email">;

const contact: ContactInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
};

// 태그된 유니온
interface Car {
  type: "car";
  make: string;
  model: string;
}

interface Bike {
  type: "bike";
  brand: string;
}

interface Bus {
  type: "bus";
  routeNumber: number;
}

type Vehicle = Car | Bike | Bus;

function getVehicleDetails(vehicle: Vehicle) {
  switch (vehicle.type) {
    case "car":
      return `Car: ${vehicle.make} ${vehicle.model}`;
    case "bike":
      return `Bike: ${vehicle.brand}`;
    case "bus":
      return `Bus: Route Number ${vehicle.routeNumber}`;
  }
}
// keyof

interface Config {
  host: string;
  port: number;
  debugMode: boolean;
}

// Config 인터페이스의 모든 키를 포함하는 타입
type ConfigKeys = keyof Config; // "host" | "port" | "debugMode"

// Config 객체의 특정 키 값을 반환하는 함수
function getConfigValue<T>(config: T, key: keyof T) {
  return config[key];
}

const serverConfig: Config = {
  host: "localhost",
  port: 8080,
  debugMode: true,
};

// 올바른 키를 사용하는 경우
const host = getConfigValue(serverConfig, "host"); // "localhost" 반환
const port = getConfigValue(serverConfig, "port"); // 8080 반환

/* keyof의 작동 방식:
객체 타입 T가 주어졌을 때, keyof T는 T의 모든 키를 나타내는 타입을 생성. 
이 결과 타입은 T의 각 키 이름을 리터럴 타입으로 하는 유니온.
예를 들어, T가 { a: number, b: string }인 객체 타입이라면, keyof T는 'a' | 'b' 타입이 됨.
*/

// typeof
// 기존 변수 정의
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// car 변수의 타입을 사용하여 CarType 타입 정의
type CarType = typeof car;

// CarType 타입을 사용하는 새 변수
const anotherCar: CarType = {
  make: "Honda",
  model: "Civic",
  year: 2022,
};

// returnType

function getUser() {
  return { name: "John Doe", age: 30 };
}

// getUser 함수의 반환 타입을 추출하여 UserType 타입 정의
type UserType = ReturnType<typeof getUser>;

// UserType 타입을 사용하는 새 변수
const user: UserType = {
  name: "Jane Doe",
  age: 25,
};

// 제네릭타입
// 한 가지 타입이 아닌 여러 타입에서 동작하는 함수를 작성할 때 사용
function findItem<T>(items: T[], itemToFind: T): T | undefined {
  for (const item of items) {
    if (item === itemToFind) {
      return item;
    }
  }
  return undefined;
}

// 숫자 배열에서 항목 찾기
const numbers = [1, 2, 3, 4, 5];
const foundNumber = findItem(numbers, 3);
console.log(foundNumber); // 출력: 3

// 문자열 배열에서 항목 찾기
const names = ["Alice", "Bob", "Charlie"];
const foundName = findItem(names, "Bob");
console.log(foundName); // 출력: "Bob"
