import React from 'react'

const Waa = () => {
  return (
    <div className='w-[100%] flex flex-col'>
        <div className='flex flex-row items-center w-[100%] justify-between p-3 bg-[#0a5a86] text-white'>
          <div className='w-10 grow-1'><img className='w-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShValDslcVaFc-ic_cG46itJg7aHqiMsLmwsc7fSZxfw&s" alt="" /></div>
          <div className='grow-2'><h1>Computer Society of India</h1></div>
          <div className='flex justify-center items-center gap-6 grow-1'>
            <button>Login</button>
            <button>Register</button>
            <button><img className='w-10' src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" /></button>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#0a5a86] p-3 h-[75vh]  '>
        <div className='m-auto flex flex-col gap-5 rounded-xl bg-slate-400 w-[50%] text-center h-[80%]'>
          <div className='text-center'>
            <h1 className='text-blue-600 font-bold text-xl'>Registration Form</h1>
          </div>
          <div className='flex flex-col bg-inherit gap-8'>
            <input type="text" className='w-[50%] p-2  m-auto rounded-md' placeholder='Student ID'/>
            <input type="text" className='w-[50%] p-2 m-auto rounded-md' placeholder='Email'/>
            <input type="text" className='w-[50%] p-2 m-auto rounded-md' placeholder='Password'/>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='w-[50%] m-auto flex flex-row  justify-center items-center'>
              <label htmlFor="r1">Male</label>
              <input className='r1' type="radio" />
              <label htmlFor="r1">Female</label>
              <input type="radio" htmlFor='r1' />
            </div>
            <div className='w-[50%] m-auto flex flex-row  justify-center items-center'>
              <label htmlFor="d1">Date Of Birth</label>
              <input className='d1 p-1' type="Date" />
            </div>
            <div className='w-[50%] m-auto flex flex-row  justify-center items-center'>
              <label htmlFor="b1">Branch</label>
              <select className='b1 p-1' type="  " placeholder="Select Branch"/>
            </div>
            <div className='w-[50%] m-auto flex flex-row gap-1 justify-center items-center'>
              <button className='p-3 bg-green-500 rounded-lg'>Register</button>
            </div>            
          </div>
        </div>

        </div>
        
        <div className='flex flex-col'>
          <div className=''>
            <ul>
               <li>Help</li>
               <li>Support</li>
            </ul>
            </div>
          <div></div>
        </div>
    </div>
  )
}

export default Waa
