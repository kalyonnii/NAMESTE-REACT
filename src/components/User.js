import React, { useState } from 'react'

// const User = (props) => {
//   return (
//     <div>
//       <div className='user-card'>
//         <h2>Name:{props.name}</h2>
//         <h3>Location :Kerala</h3>
//         <h4>Contact: 9110762518</h4>
//       </div>
//     </div>
//   )
// }

const User = ({name}) => {
    const [count]=useState(0)
    const [count2]=useState(1)
    return (
      <div>
        <h1 className='font-bold text-2xl'>User component</h1>
        <div className='user-card'>
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
          <h2>Name:{name}</h2>
          <h3>Location :Kerala</h3>
          <h4>Contact: 9110762518</h4>
        </div>
      </div>
    )
  }
  

export default User
1