# computed
  ***method와 다른 점***
  - 함수를 호출이 아니라 데이터 변수 처럼 사용하는 것 차이 
  - computed 소스는 캐싱(이미 인스턴스가 생성될 때 값을 지님)을 한다 
    - vue인스턴스가 생성 될 때 이미 computed는 값이 계산 되어 있다.
    - message가 동적으로 바뀌 었을 때 computed 속성의 값도 변경

  - 템플릿 내에 표현식을 넣을 때 편리 간단한 것만
  ```html
    <div id="example">
      <p>원본 메시지: "{{ message }}"</p>
      <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
    </div>
  ```
  ```js
    var vm = new Vue({
      el: '#example',
      data: {
        message: '안녕하세요'
      },
      computed: {
        // 계산된 getter
        reversedMessage: function () {
          // `this` 는 vm 인스턴스
          return this.message.split('').reverse().join('')
        }
      }
    })
  ```