let a: any = [1, 2, 3, 4];
a[1] = '2';
// 타입스크립트의 보호로부터 빠져나오고 싶다면 any를 사용한다.
// 웬만하면 사용하지 말 것

let eg: unknown;

// let b = eg + 1;
if (typeof eg === 'number') {
    let b = eg + 1;
}

if(typeof eg === 'string') {
    let c = eg.toUpperCase();
}

function hello(): void {
    console.log('test');
}

// never: 함수가 절대로 값을 반환하지 않을 때 사용한다.
function hello2(): never {
    throw new Error("xxx");
}

// never는 타입이 두가지 종류일 때도 사용 가능하다.

function hello3(name: string | number) {
    if (typeof name === 'string') {
        return name;
    } else if (typeof name === 'number') {
        return name;
    } else {
        return name; // 이 경우 타입이 never가 된다.
        // 왜냐하면 string이나 number밖에 파라미터가 들어갈 수 없는데
        // 위에서 두 타입을 모두 체크해줬으므로 여기로 절대 들어올 일이 없다.
        // 그래서 절대 실행될 수 없는 코드이므로 never 타입이다.
    }
}

export {}