## Jasmine

- 자바스크립트 테스트 프레임워크
- 자바스크립트 테스트 코드 명칭은 'Spec'
<code>
//테스트를 위한 코드를 describe() 메서드 사용
describe('getSum 함수테스트', ()=>{});
describe(테스트 스위트명, specs);
//첫번째 인수 스위트 이름, 두번째 인수 spec함수 내부에 테스트 코드
</code>

- beforeEach(), afterEach(), it() 메서드
- beforeEach => specs 내부의 개별 테스트 케이스가 실행되기 전에 항상 호출되는 초기화 처리 (생략 가능)
- afterEach => 개별 테스트 실행이 된 이후 처리하는 메서드 (생략 가능)
- it => specs 내의 개별 테스트 코드 (it들이 모여 테스트 스위트를 이룸)

<code>
 it('테스트케이스명', '테스트코드');
 //테스트 코드 내부의 expecdt()메서드 => 테스에 대한 검증 
 //toEqual()메서드 => Matcher(기대값)

 expect(테스트 대상 코드).Matcher(기대값);
 Matcher => expect 코드에 따른 결과를 확인하는 메서드

</code>


