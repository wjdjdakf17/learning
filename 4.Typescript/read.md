## Typescript

- npm i typescript -g //global 생성
- tsc 파일명 // 컴파일

## 타입을 구축하기 위한 두가지 구문

- interface를 우선적으로 사용하고
- 특정 기능이 필요하다면 type을 사용

## 타입 구성

- 여러가지 타입을 이용하여 새 타입을 작성하기 위해 일상적인 코드에서 가장 많이 사용되는 두 가지 코드로 **유니언**과 **제네릭**이 있다

### 유니언

- 유니언 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법 
- boolean 타입을 **true 또는 false**로 설명 가능 
- string 또는 number의 **리터럴 집합**을 설명 가능
- 다양한 타입을 처리하는 방법을 제공하는데 **array 또는 string을 받는 함수**
```js
  type MyBool = true | false;

  type WindowStates = "open" | "closed" | "minimized";
  type LockStates = "locked" | "unlocked";
  type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

  function getLength(obj: string | string[]) { //문자열 또는 문자열배열
  return obj.length;
}
```

### 제네릭
- 제네릭은 **타입에 변수를 제공하는 방법**
- 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있습니다.
- 제네릭은 고유 타입을 선언 가능

```js
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{name:string}>;

  interface Backpack<Type>{
    add: (obj: Type) => void;
    get: ()=> Type;
  }
  // declare 쪽은 ts 파일 참고
```

## 구조적 타입 시스템
- 두 객체가 같은 형태를 가지면 같은 것으로 간주
```js
  interface Point {
    x: number;
    y: number;
  }

  function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
  const point = { x: 12, y: 26 };
  printPoint(point);

  const point3 = { x: 12, y: 26, z: 89 };
  printPoint(point3); // prints "12, 26"

  const rect = { x: 33, y: 3, width: 30, height: 80 };
  printPoint(rect); // prints "33, 3"

  class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  const newVPoint = new VirtualPoint(13, 56);
  printPoint(newVPoint); // prints "13, 56"

```

## Interface
- 반복되는 type이 있을 때 
```js
  interface User{
    age: number;
    name: string;
  }

  // 변수에 인터페이스 활용
  let person: User={
    age:1,
    name:'1'
  }

  // 함수에 인터페이스 활용
  function getUser(user: User){
    console.log(user)
  }
  getUser({name:'1',age:1});

  //함수의 스펙(구조)에 인터페이스를 활용
  //함수의 정의까지 인터페이스로 정의 가능 !
  interface sumFunction{
    (a: number, b: number): number;
  }

  let sum: sumFunction;
  sum = function(a: number, b: number): number{
    return a + b;
  }
```

## Interface Indexing
```js 
  interface StringArray{
    [index: number]: string;
  }
  let arr: StringArray = ['a','b','c'];
  arr[0] = 10; // error string만  
```
### Interface 딕셔너리 패턴
```js
 interface StringRegexDictionary{

 }

 var obj = {
  
 }
```