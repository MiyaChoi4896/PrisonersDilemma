"use client";

// 컴포넌트가 특정 정보를 "기억"하고 표시해야 하는 경우가 종종 있습니다. 
// 예를 들어 버튼이 클릭된 횟수를 세고 싶을 수 있습니다. 
// 이를 위해 컴포넌트에 상태(state)를 추가하면 됩니다.
import { useState } from "react"; //먼저 useState React에서 가져옵니다.

export default function GameCounter() {
  const [count, setCount] = useState(0); //이제 컴포넌트 내부에 상태 변수를 선언할 수 있습니다 .
  //You’ll get two things from useState: 
  // the current state (count), and the function that lets you update it (setCount). 
  // You can give them any names, but the convention is to write [something, setSomething].

  //The first time the button is displayed, count will be 0 because you passed 0 to useState(). 
  // When you want to change state, call setCount() and pass the new value to it. 
  // Clicking this button will increment the counter:

  function handleClick() { //컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 이벤트에 응답할 수 있습니다 .
    console.log("CLICK!");
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>

      <button
        className="border px-4 py-2"
        onClick={handleClick} //컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 이벤트에 응답할 수 있습니다 .
      >
        +1
      </button>
    </div>
  );
}