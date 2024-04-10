// 1)
type TextError = {
  errorCode: string;
  errorMessage: string;
};

type ToastError = {
  errorCode: string;
  errorMessage: string;
  toastShowDuration: number; // 토스트를 띄워줄 시간
};

type AlertError = {
  errorCode: string;
  errorMessage: string;
  onConfirm: () => void; // 얼럿 창의 확인 버튼을 누른 뒤 액션
};

// 이 에러 타입의 유니온 타입을 원소로 하는 배열 정의
type ErrorFeedbackType = TextError | ToastError | AlertError;
const errorArr: ErrorFeedbackType[] = [
  { errorCode: "100", errorMessage: "텍스트 에러" },
  { errorCode: "200", errorMessage: "토스트 에러", toastShowDuration: 3000 },
  {
    errorCode: "300",
    errorMessage: "얼럿 에러",
    onConfirm: () => console.log("confirm"),
  },
  {
    errorCode: "999",
    errorMessage: "잘못된 에러",
    toastShowDuration: 3000,
    onConfirm: () => console.log("confirm"),
  },
  // 덕타이핑 언어 특성으로 인해서 별도의 에러를 뱉지 않는다.
  // 이러한 의미를 알 수 없는 무수한 에러 객체가 생겨날 위험성이 커진다.
];

// 2)
type TextError2 = {
  errorType: "TEXT";
  errorCode: string;
  errorMessage: string;
};
type ToastError2 = {
  errorType: "TOAST";
  errorCode: string;
  errorMessage: string;
  toastShowDuration: number;
};
type AlertError2 = {
  errorType: "ALERT";
  errorCode: string;
  errorMessage: string;
  onConfirm: () => void;
};

type ErrorFeedbackType2 = TextError2 | ToastError2 | AlertError2;
const errorArr2: ErrorFeedbackType2[] = [
  {
    errorType: "TEXT",
    errorCode: "100",
    errorMessage: "텍스트 에러",
  },
  {
    errorType: "TOAST",
    errorCode: "200",
    errorMessage: "토스트 에러",
    toastShowDuration: 3000,
  },
  {
    errorType: "ALERT",
    errorCode: "300",
    errorMessage: "얼럿 에러",
    onConfirm: () => console.log("confirm"),
  },
  {
    errorType: "TEXT",
    errorCode: "999",
    errorMessage: "잘못된 에러",
    toastShowDuration: 3000, // 에러 발생
    onConfirm: () => {},
  },
  {
    errorType: "TOAST",
    errorCode: "210",
    errorMessage: "토스트 에러",
    onConfirm: () => {}, // 에러 발생
  },
  {
    errorType: "ALERT",
    errorCode: "310",
    errorMessage: "얼럿 에러",
    toastShowDuration, // 에러 발생
  },
];

// 3)
interface A {
  value: "a"; // unit Type
  answer: 1;
}

interface B {
  value: "string"; // not unit Type
  answer: 2;
}

interface C {
  value: Error; // instantiable Type
  answer: 3;
}

type Unions = A | B | C;
function handle(param: Unions) {
  // 판별자가 value 일 떼
  param.answer; // 1 | 2 | 3

  // 'a'가 리터럴 타입이므로 타입이 좁혀진다.
  //  단, 이는 string 타입에 포함되므로 param은 A 또는 B 타입으로 좁혀진다.
  if (param.value === "a") {
    param.answer; // 1 | 2
  }

  // 유닛 타입이 아니거나 인스턴스화할 수 있는 타입일 경우 타입이 좁혀지지 않는다.
  if (typeof param.value === "string") {
    param.answer; // 1 | 2 | 3
  }
  if (param.value instanceof Error) {
    param.answer; // 1 | 2 | 3
  }

  // 판별자가 answer일 때
  param.value; // string | Error
  if (param.answer === 1) {
    param.value; // a
  }
}
