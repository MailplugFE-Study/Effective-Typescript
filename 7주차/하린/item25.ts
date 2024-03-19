/**
 * itme25. 비동기 코드에는 콜백 대신 async 함수 사용하기
 * 콜백보다는 프로미스를 사용하는 게 코드 작성과 타입 추론 면에서 유리하기 때문이다.
 * 선택지가 있다면 프로미스보다는 async/await을 사용하면 항상 프로미스를 반환하도록 강제할 수 있다.
 */

/**
 * 과거 JS - 콜백 지옥
 * 코드의 실행 순서는 코드의 작성 순서와 반대가 됩니다.
 * 이러한 콜백이 중첩된 코드는 직관적으로 이해가 어렵고, 요청들을 병렬적으로 처리하거나 오류를 처리하기가 어렵습니다.
 */
fetchURL(url, function (response1) {
  fetchURL(url2, function (response2) {
    fetchURL(url3, function (response3) {
      console.log("1");
    });
    console.log("2");
  });
  console.log("3");
});
console.log("4");

/**
 * ES2015 - 프로미스
 * 코드의 중첩도 적어지고, 실행 순서도 코드 순서와 일치해졌습니다.
 * then, catch 문법으로 오류를 처리하기도 쉬워졌습니다.
 */
const promise1 = fetch(url1);
promise1
  .then((res1) => {
    return fetch(res1);
  })
  .then((res2) => {
    return fetch(res2);
  })
  .then((res3) => {
    return fetch(res3);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * ES2017 - async/await
 * 프로미스를 사용하는 코드를 더 간결하게 만들어줍니다.
 */
async function fetchMembers() {
  try {
    const res1 = await fetch(url1);
    const res2 = await fetch(url2);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Promise.all - 병렬로 비동기 요청 처리하기
 * response 변수 각각의 타입을 Response로 추론합니다.
 * https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.response.html#body
 */
async function fetchMembers2() {
  const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
}

/**
 * 선택지가 있다면 프로미스보다는 async를 사용한다면 항상 프로미스를 반환하도록 강제할 수 있습니다.
 */
const getNumberAsync = async () => 42; // Promise<number>
const getNumberPromise = () => Promise.resolve(42); // Promise<number>

// 캐시된 경우 콜백함수 두개가 동기로 호출되기 때문에 reqStatus는 'success'가 되었다가 바로 'loading'으로 변경됩니다.
// 캐시된 데이터가 없는 경우에는 1. loading -> 2. fetchURL -> 3. success 순으로 호출됩니다.
const _cache: { [url: string]: string } = {};
function fetchWithCache(url: string, callback: (text: string) => void) {
  if (url in _cache) {
    callback(_cache[url]);
  } else {
    fetchURL(url, (text) => {
      _cache[url] = text;
      callback(text);
    });
  }
}

let reqStatus: "loading" | "success" | "error";
function getUser(userId: string) {
  fetchWithCache(`/users/${userId}`, (userInfo) => {
    reqStatus = "success";
  });
  reqStatus = "loading";
}

// 콜백함수를 async/await로 변경하면 캐싱된 경우에도 일관된 동작을 강제할 수 있습니다.
const _cache2: { [url: string]: string } = {};
async function fetchWithCache2(url: string) {
  if (url in _cache) {
    return _cache[url];
  }

  const res = await fetch(url);
  const text = await res.text();
  _cache[url] = text;
  return text;
}

let reqStatus2: "loading" | "success" | "error";
async function getUser2(userId: string) {
  reqStatus2 = "loading";
  const userInfo = await fetchWithCache2(`/users/${userId}`);
  reqStatus2 = "success";
}
