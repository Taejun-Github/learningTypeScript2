type Add2 = {
  (a: number, b: number): number,
  (a: number, b: number, c: number): number,
}

const addtest: Add2 = (a, b, c?:number) => {
  if(c) return a + b + c;
  return a + b;
}

addtest(1,2);
addtest(1,2,3);