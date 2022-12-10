import React, { useState } from 'react'

const Counter = (props) => {
    const [state, setState] = useState({count:0, color:"Red"});
    const countMe = state.count;  // this in not necessary. But if we defined it here like this, in line 33
    // we can just put <h1>{countMe}</h1> without state.count


//This function will increment only by one, because the value of count in both setState is the same value 
//which is the value when we render our function, so they overwrite each other.
// each time we call the setState, our function will rerender with the new value of count. 
const IncrementMe = () => {
    setState({count: countMe + 1
    });
    
    setState({
        count: countMe + 1
    });
   
}

//This way, on the other hand, will increment by 2
  const IncrementMe2 = () =>{ 
  setState(prevState =>  {return {count:prevState.count+1
} })  // if we made it like this, it will overwrite every thing inside State, so color will be deleted.
// So we should spread out our prevState first in order to keep all other values inside object state.


setState(prevState =>  {return {...prevState,count:prevState.count+1
} })
}
  return (
    <div>
      <button onClick={IncrementMe2}>+</button>
      <h1>{state.count} {state.color}</h1>  {/*here*/}

    </div>
  )
}

export default Counter

//Or we can make it like this withour using object for State:

// import React, { useState } from 'react';
    
    
// const Counter = props => {
//     const [count, setCount] = useState(0);
 
//     const handleClick = () => {
//         setCount(count + 1);
//     }
 
//     return (
//         <div>
//             { count }
//             <button onClick={ handleClick }>Click Me</button>
//         </div>
//     );
// }
    
// export default Counter;
