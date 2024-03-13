// 일관성 있는 별칭 사용하기

function caculateBoundingBox(polygon: Polygon) {
  const x = polygon.exterior.map((pt) => pt.x);
  const y = polygon.exterior.map((pt) => pt.y);
  const bbox = {
    x: [Math.min(...x), Math.max(...x)],
    y: [Math.min(...y), Math.max(...y)],
  };
  return bbox;
}

interface Coordinate {
  x: number;
  y: number;
}
interface BoundingBox {
  x: [number, number];
  y: [number, number];
}
interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox; // 별칭을 만듬
  const { bbox } = polygon; // 비구조화 문법을 사용해서 일관된 이름을 사용
  if (polygon.bbox) {
    if (pt.x < box.x[0]) {
      // 객체가 'undefined'일 수 있습니다.
      // 위 상황에서 undefined가 나오는 이유는 속성 체크가 polygon.bbox의 타입을 정제했지만 box의 타입을 정제하지 않았기 때문이다.
    }
    if (box) {
      // 1. 별칭사용 )if(box)로 하게 되면 undefined에러가 나지 않는다.
    }

    if (bbox) {
      // 2. 비구조화 문법 사용) if(bbox)로 하게 되면 undefined에러가 나지 않는다.
    }
    if (!bbox) {
      //주의 !
      caculateBoundingBox(polygon); // polygon.bbox
      // polygon.bbox 와 bbox는 다른 값을 참조
    }
  }
}

/*
- 별칭은 타입스크립트가 타입을 좁히는 것을 방해한다.
- 따라서 변수에 별칭을 사용할 때는 일관되게 사용해야 한다.
- 비구조화 문법을 사용해서 일관된 이름을 사용하는 것이 좋다.
- 함수 호출이 객체 속성의 타입 정제를 무효화할 수 있다는 점을 주의해야한다.
- 속성보다 지역 변수를 사용하면 타입 정제를 믿을 수 있다.
*/

type Message =
  | { type: "sendMessageToThread"; data: { threadId: number; message: string } }
  | { type: "createThread"; data: { userIds: number[] } }
  | { type: "addUserToThread"; data: { threadId: number; userId: number } };

// Good case
function a(message: Message) {
  switch (message.type) {
    case "sendMessageToThread":
      console.log(message.data.threadId);
  }
}
/* 


*/
// Bad case
function b({ type, data }: Message) {
  switch (type) {
    case "sendMessageToThread":
      console.log(data.threadId);
    // 이전 타입 스크립트 버전에서는 해당 data의 타입을 추론하지 못했음.
  }
}

/* 
`a` 함수에서는 `message` 매개변수를 구조 분해하지 않고 전체 객체를 그대로 사용합니다. 
`switch` 문에서 `message.type`을 확인함으로써, 
`case 'sendMessageToThread':`가 실행될 때 
`message` 객체가 `{ type: 'sendMessageToThread', data: { threadId: number, message: string }}` 타입임이 보장됩니다. 
따라서 `message.data.threadId`에 안전하게 접근할 수 있습니다. 
타입스크립트 컴파일러는 이 정보를 바탕으로 `message.data`의 타입을 `{ threadId: number, message: string }`로 좁혀, 
`threadId` 속성의 존재를 확신하고 타입 오류를 발생시키지 않습니다.
*/

/* 
b 함수에서는 매개변수 message를 구조 분해하여 type과 data를 분리합니다. 
이 방식의 문제는 type과 data가 분리되어 처리될 때, 
switch (type) 문 내에서 type의 값에 따라 data의 타입을 좁히는 타입 가드 기능이 작동하지 않는다는 것입니다. 
즉, case 'sendMessageToThread':가 실행될 때, 
타입스크립트 컴파일러는 data가 { threadId: number, message: string } 타입임을 인지하지 못합니다.
 따라서 data.threadId에 접근하려 할 때 컴파일러는 threadId 속성이 data 타입에 존재하지 않는다고 판단하여 타입 오류를 발생시킵니다. 
 이 경우, data의 타입이 여전히 Message['data']의 유니온 타입으로 남아 있으며, 이 유니온 타입에는 threadId 속성이 항상 존재하지 않습니다.
*/
