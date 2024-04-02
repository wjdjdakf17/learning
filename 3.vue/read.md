## Vue

- vite에서 index.html이 roots에 있는 이유는 엔트리포인트로 잡기 때문에


#### v-bind 
  - v-bind 디렉티브는 요소의 속성(attribute)을 동적으로 바인딩할 때 사용
  - 일반적으로 v-bind 디렉티브는 HTML 요소의 속성에 동적으로 값을 할당
  ```js
    <!-- 전체 문법 -->
    <a v-bind:href="url"> ... </a>

    <!-- 약어 -->
    <a :href="url"> ... </a>

    <div id="app">
      <a v-bind:href="url">..</a>
    </div>
    <script>
      new Vue(){
        el:'#app',
        data:{
          url:'http~'
        }
      }
    </script>

    <div id="app" v-bind:class="{ active: isActive }" v-bind:style="{ color: textColor }">
      // v-bind:class="{ 클래스이름: 조건 }"
      This is a dynamically styled div.
    </div>

    <script>
    new Vue({
      el: '#app',
      data: {
        isActive: true,
        textColor: 'red'
      }
    })
    </script>
  ```  

#### v-model (양방향 바인딩)
  - 양식 입력 요소와 애플리케이션 데이터를 양방향으로 바인딩하는 디렉티브
  - 입력과 애플리케이션 상태 간의 동기화를 쉽게 관리
  - v-model 디렉티브는 주로 input, textarea, select와 같은 폼 컨트롤과 함께 사용

#### :v-on
  - @로 대체가능
    ```js
      <!-- 전체 문법 -->
      <a v-on:click="doSomething"> ... </a>

      <!-- 약어 -->
      <a @click="doSomething"> ... </a>


      //<input @keyup="updateText">
      <input v-model="text"> //함수도 필요없어짐

      // Vue에서는 data와 methods는 인스턴스 (this.text)와 같이 직접적으로 접근이 가능
      new Vue({
        el: '#app',
        data:{
          year:2024,
          text:'text'
        },
        methods:{
          //upDateText(event){
          //  this.text = event.target.value;
          //}
        }
      })
    ```