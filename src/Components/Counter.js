import React, { Component, useState} from "react";
function Counter(){
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
  
    return (
      <div>
        Current count {count}.
        <div>
            <p>Bạn đã click {count} lần</p>
          <button onClick={handleClick}>Increment Count!</button>
        </div>
      </div>
    )
}
export default Counter;