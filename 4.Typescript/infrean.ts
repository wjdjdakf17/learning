const str: string = 'hello';

let arr: Array<number> = [1,2,3];
let arr2: Array<string> = ['a','b','c',];

let items: number[] =[1,2,3] //주로 쓰는 방식


//튜플 (각각의 Index에 타입이 정해져있다)
let address: [string, number]  = ['string', 1];

//TS 객체
let obj : object = {};
// let person : object = {
//   name : 'a1',
//   age : 100
// };

// let person : {name:string, age:number} = { // 구체적으로 정의
//   name : 'a1',
//   age : 100
// };

//TS진위값
let flag: boolean = true;

//함수의 타입