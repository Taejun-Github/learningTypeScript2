type Name = string;
type Age = number;
type Player = {
    readonly name: Name,
    age?:Age
}
function playerMaker(name: string): Player {
    return {
        name: 'test',
        age: 1,
    }
}

const nico = playerMaker('nico');

const numberArray: readonly number[] = [1, 2, 3, 4];
// 타입을 정의하는 곳에서 readonly를 써준다.

// tuple에서는 특정 위치에 특정 타입이 있어야 한다.
const player: [string, number, boolean] = ['tuple example', 1, true];
player[0] = 'text는 이렇게 변경 가능하다. 타입이 맞아야 한다';

export {}