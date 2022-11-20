function superPrint2<V>(a: V[]) {
  return a[0];
}

const a2 = superPrint2<boolean>([true, false]);

type Player<E> = {
  name: string
  extraInfo: E
}

type NicoPlayer = Player<{favFood: string}>
type NicoExtria = {
  favFood: string
}

const nico: Player<{favFood: string}> = {
  name: 'nico',
  extraInfo: {favFood: 'ttong'}
}

const lynn: Player<null> = {
  name: 'test',
  extraInfo: null // 추가 정보가 없는 사람인 경우
}