function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => {
  return a + b;
}

type Add = (a: number, b: number) => number;
// 이것을 call signiture라고 한다.

const add3: Add = (a, b) => a + b;
// 이렇게 먼저 함수 타입을 구현한 후에 함수를 만드는 것이 더 좋다.
