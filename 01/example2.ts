let a: string = "hello";
let b = "hello";
// 명시적으로 알려주지 않아도 타입스크립트가 타입을 추론한다.
let c: Array<number> = [1, 2, 3];
// c.push('1');

const player = {
    name: 'nico',
    hello(testnumber: number): string {
        return 'test' + testnumber;
    }
}

player.hello(1);

let a1: number = 1;
let b1: string = "il";
let c1: boolean = true;

let a2: number[] = [1, 2];

type Players = {
    name: string,
    age?: number
}

const player2: Players = {
    name: 'nico',
}

const player3: {
    name: string,
    age?: number,
} = {
    name: 'test',
    // age: 1,
}


export {}
