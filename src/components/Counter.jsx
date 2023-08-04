import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const addHandler=()=>{
        setCount(prev=>prev+1)
    }
    const reduceHandler=()=>{
        setCount(prev=>prev-1)
    }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='reduce-button' onClick={reduceHandler}>Reduce</button>
      <button className='add-button' data-testid="add-button" onClick={addHandler}>Add</button>

      <div>
      <h1>Auto Focus and Input Value Example</h1>
      <input type="text" autoFocus className="input-class" />
    </div>
    </div>
  )
}

export default Counter
