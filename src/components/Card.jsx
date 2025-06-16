import React from 'react'

const Card = (e) => {
    // console.log(e);
    

    // To get the user name
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded mr-7'>
        {/* <h1 className='text-3xl'>UserName is {e.user}</h1>
        user ko le liya App.jsx se 
        isse hume username ui pe mil jayega
        */}
      <img className='h-32 w-32 rounded-full mb-3 ml-6' src={e.photo} alt="" />
      <h1 className='text-2xl font-semibold mb-4 '>{e.username}</h1>
      {/* ye sab props hai jo hhumne pass kiye hai card me */}
      
      <h2 className='mb-4'>{e.role}, {e.age}</h2>
      <button className='bg-blue-500 text-white px-3 py-2 rounded cursor-pointer font-medium mt-5'>Add Friend</button>
    </div>  
  )
}

export default Card
