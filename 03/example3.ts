type Nickname = string;
type Health = number;
type Friends = Array<String>;
type Team = "red" | "blue" | "green";
// 팀을 세가지 값으로 제한할 수 있다.

type Player = {
  nickname: Nickname,
  healthBar: Health,
  friends: Friends,
  team: Team,
}

const nico: Player = {
  nickname: "nico",
  healthBar: 10,
  friends: ['a', 'b'],
  team: "green",
}

type Food = string;

const kimchi2: Food = "stinky";

// 타입과 인터페이스의 차이는? 타입은 무엇이든 될 수 있다
// 그러나 인터페이스는 오직 한가지 용도만 가지고 있는데
// 오브젝트의 모양을 특정해주기 위한 것이다.

interface Player2 {
  nickname: string,
  team: Team,
  health: Health,
}
// 타입과 같은 점은 오브젝트의 형태를 정의해준다는 것이지만
// type은 더 많은 곳에서 쓰일 수 있다.

interface User {
  name: string
}

interface Player3 extends User {
}

const nico3: Player3 = {
  name: "nico",
}

// 타입이라면? 상속을 할 때 & 로 연결해 주어야 한다.
// 그런데 인터페이스라면 extends로 상속을 할 수 있다.