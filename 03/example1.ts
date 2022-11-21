abstract class User {
  constructor (
    protected firstName: string,
    protected lastName: string,
    public nickname: string,
  ) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  abstract abstractMethod(arg: number): void
}


class Player extends User{
  abstractMethod(arg: number): void {
    console.log(arg);
  }
}

const nico = new Player("nico", "last", "nick");

