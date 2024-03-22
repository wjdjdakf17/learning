interface User{
  name:string,
  id:number
}

const user: User = { //Interface 설정
  name:'Kane',
  id: 0,
}

//이 객체의 형태를 명시적으로 나타내기 위해서는 interface 선언

//인터페이스는 클래스로도 선언할 수 있습니다.
class UserAccount{
  name :string;
  id: number;

  constructor(name:string, id:number){
    this.name = name;
    this.id = id;
  }
}

//function getAdminUser(): User { //return 값 
  //..
//} 

function deleteUser(user: User){ //매개변수 지정 
  //..
}

const user2:User =new UserAccount("HM",92);


interface Backpack<Type>{
  add: (obj: Type) => void;
  get: ()=> Type;
}
// 이 줄은 TypeScript에 `backpack`이라는 상수가 있음을 알리는 지름길이며
// const backpack: Backpack<string>이 어디서 왔는지 걱정할 필요가 없습니다.
// declare를 사용하면 이미 정의된 변수나 함수를 재정의 가능 타입까지
declare const backpack: Backpack<string>;

// 위에서 Backpack의 변수 부분으로 선언해서, object는 string입니다.
const object = backpack.get();

// backpack 변수가 string이므로, add 함수에 number를 전달할 수 없습니다.
//backpack.add(23);
