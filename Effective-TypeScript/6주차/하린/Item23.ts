/**
 * Item23. 한꺼번에 객체 생성하기
 * 변수의 값은 변경될 수 있지만, 타입은 일반적으로 변경되지 않는다.
 * 그렇기에 객체 생성시, 속성을 하나씩 추가하기보다는 여러 속성을 포함해서 한꺼번에 생성해야 타입추론에 유리하다.
 */

const member = {};
member.displayName = "happy"; // {} 형식에 'displayName' 속성이 없습니다.

interface Member {
  id: number;
  displayName: string;
  organization: string;
  duty: string;
}
const member2: Member = {}; // {} 형식에 'id', 'displayName', 'organization', 'duty' 속성이 없습니다.ts(2739)
member2.displayName = "happy";
member2.id = 1;
member2.organization = "emotion";
member2.duty = "파트장";

// 한번에 생성하는 것이 좋다.
const member3: Member = {
  id: 1,
  displayName: "happy",
  organization: "emotion",
  duty: "파트장",
};

const member4 = {} as Member; // 속성을 나눠서 추가해줘야한다면 타입단언을 통해 타입체커 통과

// 작은 객체를 조합해서 큰 객체를 만드는 경우 스프레드 연산자를 사용하는 것이 좋다.
const memberInfo1 = { id: 2, displayName: "sad", organization: "emotion" };
const memberInfo2 = { duty: "부파트장" };
const member5 = { ...memberInfo1, ...memberInfo2 };
member5.displayName; // 정상

// 안전하게 조건부 속성 추가하기
let isRetire: boolean = true;
const member6 = {
  id: 3,
  displayName: "angry",
  organization: "emotion",
  duty: "부파트장",
  ...(isRetire ? { retireAt: new Date() } : {}),
};

/**
 * 타입 추론 결과 retireAt은 선택적 속성으로 추론됨
 * {
 *   retireAt?: Date | undefined;
 *   id: number;
 *   displayName: string;
 *   organization: string;
 *   duty: string;
 * }
 */

// 전개 연산자로 한꺼번에 여러 속성을 추가할때는 헬퍼함수를 사용하여 안전하게 조건부 속성을 추가할 수 있다.
const mInfo1 = { id: 4, displayName: "happy", organization: "emotion" };
const member7 = {
  ...mInfo1,
  ...(isRetire
    ? { retireAt: new Date(), retireReason: "personal reasons" }
    : {}),
};
member7.retireReason; // 정상

function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}

const member8 = addOptional(
  mInfo1,
  isRetire ? { retireAt: new Date(), retireReason: "personal reasons" } : null
);
member8.retireAt; // 정상
