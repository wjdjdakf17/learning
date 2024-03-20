const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});  // toEqul은 객체나 배열의 모든 필드를 재귀적으로 확인
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});



// 숫자 비교
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});



//부동소수점 동등의 경우 
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});



//문자열 확인
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

//배열 반복 가능 항목
//toContain 메서드를 활용하여 특정 항목 포함 확인
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

//특정 함수가 호출 될 때 오류 확인
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass

  //예외를 발생시키는 함수는 래핑 함수 내에서 호출되어야 함
});



//비동기 코드 테스트
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// async를 활용 \
test('the data is peanut butter', async ()=>{
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async ()=>{
  await expect(fetchData()).rejects.toBe('peanut butter');
});

// 테스트 전 후로 처리해야하는 경우 

//test함수가 실행 전 작업
//test를 위한 data를 저장할 경우 초기설정 등..
beforeEach(() => {
  initializeCityDatabase();
});

//test함수가 실행 후 작업
afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

//일회성 설정
//test 가장 초기에만 실행
beforeAll(() => {
  return initializeCityDatabase();
});

//test 가장 먀지막에만 실행
afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});



//.only() , .skip()
//test.only("run only", () => {
  // 이 테스트 함수만 실행됨
//});

test("not run", () => {
  // 실행 안됨
});

test.skip("skip", () => {
  // 이 테스트 함수는 제외됨
});

test("run", () => {
  // 실행됨
});

// mock

const mockFn = jest.fn() //mock 함수 생성

mockFn();
mockFn(1);

test("함수는 2번 호출됩니다",()=>{
  //console.log(mockFn.mock.calls); //함수가 총 몇번 호출 되었는가 호출된 인수는 무엇인가
  expect(mockFn.mock.calls.length).toBe(2);
});
test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다",()=>{
  //console.log(mockFn.mock.calls); //함수가 총 몇번 호출 되었는가 호출된 인수는 무엇인가
  expect(mockFn.mock.calls[1][0]).toBe(1);
});

const mockFn2 = jest.fn();

function forEachAdd1(arr){
  arr.forEach(num =>{
    mockFn2(num+1)
  });
}
forEachAdd1(10,20,30);

test("함수 호출은 3번",()=>{
  expect(mockFn2.mock.calls.length).toBe(3)
});

test("전달된 값은 11,21,31",()=>{
  expect(mockFn2.mock.calls[0][0]).toBe(11);
  expect(mockFn2.mock.calls[1][0]).toBe(21);
  expect(mockFn2.mock.calls[2][0]).toBe(31);
})


const mockFn3 = jest.fn();

mockFn3
.mockReturnValueOnce(true)
.mockReturnValueOnce(false)
.mockReturnValueOnce(true)
.mockReturnValueOnce(false)
.mockReturnValue(true) //마지막에는 Once제거

//mockResulvedValue 는 비동기 함수
mockFn3.mockResolvedValue({name:"mike"});
test("받아온 이름은 Mike",()=>{
  mockFn3().then(res=>{
    espect(res.name).toBe("Mike");
  });
});


const result = [1,2,3,4,5].filter(num => mockFn3(num));

//홀수인 callback을 만드는 대신에 목함수를 사용해 간단히 테스트
test("홀수는 1,3,5",()=>{
  expect(result).toStrictEqual([1,3,5]);
});
  

//DB에서 데이터를 조회 할 때는 
const fn = require("./fn");// db import
jest.mock("./fn");
fn.createUser.mockReturnValue({name:"Mike"});

test("user를 생성한다",()=>{
  //실제로 createUser 함수가 동작하지는 않고 목함수로 생성처리
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

//호출 확인 메서드 
const mockFn4 = jest.fn();

mockFn4(10, 20);
mockFn4();
mockFn4(30, 40);

test("한번 이상 호출?",()=>{
  expect(mockFn4).toBeCalled();
});
test("정확히 세번 호출?",()=>{
  expect(mockFn4).toBeCalledTimes(3);
});
test("10이랑 20 전달받은 함수가 있는가?",()=>{
  expect(mockFn4).toBeCalledWith(10, 20);
});
test("마지막 함수는 30이랑 40을 받았는가?",()=>{
  expect(mockFn4).lastCalledWith(30, 40);
});