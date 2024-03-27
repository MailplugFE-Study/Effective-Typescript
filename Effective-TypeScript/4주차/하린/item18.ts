/**
 * item18. 매핑된 타입을 사용하여 값을 동기화하기
 *  기존에 작성한 다른 타입에 기반하여 새로운 타입을 쉽게 작성할 수 있는 방법. 주로 keyof 키워드와 함께 사용
 * 두 객체가 정확히 같은 속성을 가지도록 제약을 강제할떼 매핑된 타입을 사용하는 것이 이상적이다.
 */

interface ScatterProps {
  xs: number[];
  ys: number[];
  xRange: [number, number];
  yRange: [number, number];
  color: string;
  onClick: (x: number, y: number, index: number) => void;
}

// 특정 property를 업데이트하기 위한 flag 타입
const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
      return true;
    }
  }
  return false;
}
