// 동적 데이터에 인덱스 시그니처 사용하기
type Props = { [property: string]: string };
/* 
property -> key의 이름
property 옆에 있는 string -> key의 값의 타입
string -> 값의 타입
*/
type Robot = { [key: string]: string };

const bot: Robot = {
  name: "duckbot",
  price: "400$",
  performance: "90%",
};

const bot2: Robot = {
  Name: "duckbot2",
  price: "400$",
  performance: "90%",
};

//Name 이라는 잘못된 키를 넣어도 허용한다.
// 특정 키가 필요하지 않다.
// 키마다 다른 타입을 가질 수 없다.
// 자동완성기능이 안된다.

/*
그렇다면 인덱스 시그니처는 언제?
가능하다면 인덱스 시그니처보다 정확한 타입을 사용하는 것이 좋다
. 하지만 특별한 경우엔 인덱스 시그니처를 사용해야 한다. 바로 런타임 때까지 객체의 속성을 알 수 없을 경우나
동적 데이터를 다루는 경우이다.
정확한 속성의 이름을 알지 못하기 때문에 미리 타입으로 정할 수 없기 때문이다
*/

function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split("\n");
  const [header, ...rows] = lines;
  return rows.map((rowStr) => {
    const row: { [columnName: string]: string } = {};
    rowStr.split(",").forEach((cell, i) => {
      row[header[i]] = cell;
    });
    return row;
  });
}

// RECORD
// RECORD는 인덱스 시그니처를 사용하는 타입이다
// Record<K, T> // K : 속성 이름의 타입, T : 속성 값의 타입

type example = Record<"a" | "b" | "c", number>;
