"use client";
import React, { useEffect } from 'react'

function Error({error}: {error: Error}) {
    useEffect(() => {
        console.log(error);
        
    },[error]);
  return (
    <div className='flex items-center justify-center h-screen bg-black'>
      <div className='text-2xl text-red-500'>Error fetching users data</div>
    </div>
  )
}

export default Error;
