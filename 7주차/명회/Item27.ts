// 절차형 - 순서대로 명령을 받아 문제를 해결하는 방식, 직관적, 오래된 방식
// 함수형 - 프로그램 하나를 큰 함수로 보고, 작은 함수들을 합성해 문제를 해결하는 방식
// TypeScript는 함수형 프로그래밍 방식을 사용하는 것이 더 좋다.
// 절차형 프로그래밍은 타입 체크 관리 필수
// 즉, 직접 루프를 구현하는 것보다 내장된 함수 or lodash를 사용하면 타입 정보를 그대로 유지

// ex)
const csvData = `연도,제조사,모델,설명,가격
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture Extended Edition,,4900.00
1999,Chevy,Venture Extended Edition,Very Large,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon roof loaded,4799.00`;

const rawRows = csvData.split("\n"); // 행끼리 구분
const headers = rawRows[0].split(","); // 헤더 분리

// 1) 절차형: 헤더를 제외한 모든 행 반복 (forEach)
const rows1 = rawRows.slice(1).map((rowStr) => {
  const row = {};
  rowStr.split(",").forEach((cell, i) => {
    row[headers[i]] = cell;
  });
  return row;
});

// 2) 함수형: 헤더를 제외한 모든 행 반복 (reduce)
const rows2 = rawRows.slice(1).map((rowStr) =>
  rowStr.split(",").reduce((row, v, i) => {
    row[headers[i]] = v;
    return row;
  }, {})
);

// (3) 라이브러리: 헤더 제외한 모든 행 반복 (lodash의 zip())
import _ from "lodash";
const rows3 = rawRows
  .slice(1)
  .map((rowStr) => _.zipObject(headers, rowStr.split(",")));

// 내장된 함수형 기법과 로대시를 비롯한 라이브러리에 타입 정보가 잘 유지되는 이유
// → 함수 호출 시 전달된 매개변수 값을 건드리지 않고 매번 새로운 값을 반환해 새로운 타입으로 안전하게 반환 가능
