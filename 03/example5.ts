type Player = {
  name: string
}

type PlayerA = Player & {
  lastName: string
}

const player: PlayerA = {
  name: "nico",
  lastName: "test",
}

interface PlayerB {
  name: string
}

interface PlayerBB extends PlayerB {
  lastName: string
}

interface PlayerBB {
  health: number
  // 인터페이스는 이런 식으로 재정의도 가능하다.
}

const playerB: PlayerBB = {
  name: "nico",
  lastName: "test",
  health: 4
}
