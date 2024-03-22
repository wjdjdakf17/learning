## 함수형과 클래스형 컴포넌트 차이

- 일반적인차이점 
  **Class**
  - 클래스형 컴포넌트는 state와 LifleCycle API의 사용이 가능하다.
  - 임의 메서드를 정의할 수 있다.

  **Function**
  - 함수형 컴포넌트는 state와 LifeCycle API의 사용이 가능하다.*(16.8 이후 Hook으로 해결가능)*
  - 클래스형 컴포넌트 보다 선언하기 훨씬 편하다
  - 메모리 자원을 클래스형 컴포넌트보다 덜 사용한다.
  - 빌드한 결과물의 크기 역시 작다

  ## 선언방식

  **Class**
  ```js
    import React, {component} from 'react';

    class App extends Component{
      render(){
        const text = 'text'
        return <div className ='react'>{text}</div>
      }
    }
    export default App;
  ```
  - 클래스형 컴포넌트는 *class키워드가 필요*하며, *Component를 상속*받아야 한다 
  - 또한 화면에 표시하기 위한 *render()메서드*가 반드시 필요히다

  
  **Function**
  ```js
    import React from 'react';

    const App = () =>{
      const text = 'Hi ~'
      return <div className='react'>{text}</div>
    }

    export default App;
  ```
