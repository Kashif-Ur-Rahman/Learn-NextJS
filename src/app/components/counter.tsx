"use client";

import React, { useState } from 'react'

const Counter = () => {
   const [count, setCount] =  useState(0);
  return (
    <div>

        <h1>This is Counter</h1>
        <button className='bg-black text-white text-bold text-3xl' onClick={() => setCount(count +1)}>Count : {count}</button>
       
    </div>
  )
}

export default Counter;
