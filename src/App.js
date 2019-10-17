import '@reshuffle/code-transform/macro'
import React, { useState, useEffect } from 'react';

// import backend logic like any js function
import { addAndGet } from '../backend/helloServer.js';

export default () => {
 const [num, setNum] = useState(undefined);
 useEffect(() => {
   addAndGet(0).then(setNum)
 }, []);
 return (
   <div>
     <h1> Hello World from Reshuffle! </h1>
     <span> Number is: {num} </span>
     <button onClick={() => addAndGet(1).then(setNum)} >
       Increment me
     </button>
   </div>
 );
}
