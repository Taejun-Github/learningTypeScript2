type SuperPrint = {
  // (arr: number[]): void
  // (arr: boolean[]): void
  // (arr: Array<number | boolean>): void
  <T,>(arr: (T)[]): T // Generic
  <T, M>(arr: T[], arg2: M): T

}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3,4]);
const b = superPrint([true,false,true]);
const c = superPrint(["1","2",true, 1]); // 제네릭으로 해결된다.

// 제네릭은 왜 쓸가? T를 받아서 T를 리턴한다는 것. 즉, 같은 타입을 받고 반환한다는 것이 필요하다
// 제네릭을 쓰지 않은 자바스크립트에서는 이렇게 파라미터와 반환 타입을 맞춰줄 수가 없다.