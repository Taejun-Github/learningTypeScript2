// abstract class User {
//   constructor(
//     protected firstName: string,
//     protected lastName: string,
//   ) {

//   }
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

interface User {
  firstName: string,
  lastName: string,

  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number,
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}
  sayHi(name: string): string {
    return `Hi There ${name}, Here is ${this.fullName()}`;
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
}
// 추상클래스는 자바스크립트로 컴파일시 남아있지만 인터페이스는 사라진다
// 따라서 인터페이스가 가볍다는 장점을 가진다.