const nico = {
    nickname: 'nick',
}

// nico.hello(); 타입스크립트에서는 런타임이 아니라 작성 단계에서 오류를 보여준다.

// [1, 2, 3, 4] + false; 이것도 TS에서는 허용되지 않는다.

function divide(a: number, b: number) {
    return a / b;
}

// divide('a', 'b'); 허용되지 않음
divide(1, 1000);

const player = {
    age: 12
}

// player.age = false; 허용되지 않는다.


export {}