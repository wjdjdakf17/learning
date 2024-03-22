## Jest

** describe
** it(test)
** expect

- toEqul은 객체나 배열의 모든 필드를 재귀적으로 확인 + undefined배열 항목 개체 키를 무시

*** Truthiness
- **toBeNull** matches only null
- **toBeUndefined** matches only undefined
- **toBeDefined** is the opposite of toBeUndefined
- **toBeTruthy** matches anything that an if statement treats as true
- **toBeFalsy** matches anything that an if statement treats as false

- 이후 내용 jest.test.js 정리