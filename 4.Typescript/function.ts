function sum(a: number, b: number) : number{
  return a + b
}

//TS 옵셔널 파라미터 (? 입력)
function log(a:string, b?:string){

}

// 중복되는 Type 선언할때

// 방식 1
type Todo = {
  id: number;
  title: string;
  done: boolean;
}
// 방식 2
interface Todos{
  id: number;
  title: string;
  done: boolean;
}

interface User2{
  age: number;
  name: string;
}

let person: User2={
  age:1,
  name:'1'
}

function getUser(user: User2) : void{
  console.log(user)
}
getUser({name:'1',age:1});

