import React from 'react'

// importing the Navbar component
// COMPONENTS IN REACT
const App = () => {
  return (
   <>
    {/* these are the fragments <> </> */}
   <nav className='flex py-5 px-10 item-center justify-between bg-slate-600   '>
    <h2 className='text-2xl'>Pratham Jaulkar</h2>
    <div className='flex gap-9 items-center'>
      <h4 className='text-xl cursor-pointer'>About</h4>
      <h4 className='text-xl cursor-pointer'>Services</h4>
      <h4 className='text-xl cursor-pointer'>Contact</h4>
      <h4 className='text-xl cursor-pointer'>Your Account</h4>
    </div>
   </nav>
   </>
  )
}

export default App
