// const math = require('./test2');
// console.log(math);
// console.log(math.add(math.PI, math.E));


//하나만 내보낸 모듈은 이름이 달라져도 불러올 수 있음
// const add = require('./test2');
// console.log(add);

// const onlyOne = require('./test2');
// console.log(onlyOne);


//const {} = 객체 구조분해 해 가져오기 때문에 이름이 동일해야함
// const {add, E, PI} = require('./test2');
// console.log(add(E, PI));



//구조분해
// import { add, E, PI } from './test2.js';
// console.log(add(E, PI));


import * as math from './test2.js';

console.log(math.add(2, 3));
console.log(math.PI);
console.log(math.E); 