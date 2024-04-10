interface DeliveryTipA {
  tip: number;
}

interface FilterA extends DeliveryTipA {
  tip: string; // number타입의 tip에 string타입의 tip을 작성했기 때문에 호환된지 않는다는 에러 발생!
}

/*
 'FilterA' 인터페이스가 'DeliveryTipA' 인터페이스를 잘못 확장합니다.
  'tip' 속성의 형식이 호환되지 않습니다. 'string' 형식은 'number' 형식에 할당할 수 없습니다
 */

/*
인터페이스를 extends로 확장할 때 규칙이 있음.
인터페이스를 확장할 때는 부모 인터페이스의 속성을 재정의할 수 없음.
왜나하면 부모 인터페이스의 속성을 재정의하면 부모 인터페이스의 속성을 무시하게 되기 때문.
*/

type DeliveryTipB = {
  tip: number;
};

type FilterB = DeliveryTipB & {
  tip: string; // tip은 number면서 string 인 타입, 즉 never가 됨
};

/*
하지만  &를 이용해서 타입을 확장해주면 해당 타입은 never가 되기 때문에 에러가 발생하지 않음.
*/
