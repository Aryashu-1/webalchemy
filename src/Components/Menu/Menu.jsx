import React from 'react'
import { useState } from 'react'

const Menu = () => {

  const menus = ["Profile", "Genre", "Settings", "Logout"]
  const [isActive,activate] = useState(false)

  function showMenu(){
    activate(true)
  }

  function closeMenu(){
    activate(false)
  }
  

  return (

    <div>
      { !isActive &&
      
      <div className=' items-center justify-center bg-gray-700 h-screen w-[100px]'>
        <img  className=' m-auto h-[70px]' src='https://static.vecteezy.com/system/resources/previews/019/956/195/non_2x/netflix-transparent-netflix-free-free-png.png'></img>
            <a className='text-3xl' onClick={showMenu}>
            <svg className=' m-auto h-8' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
            </a>
           
      </div>
      }

      {isActive && 
      <div className='fixed  w-[100%] h-[100%]'>
        <div className='z-20 w-[200px] h-[100%] bg-gray-700 rounded-r-lg animate-[wiggle_0.49s]'>
          <div className='w-[100%] p-2 flex flex-row justify-start items-center gap-2'>
           <a className='h-[20px]' onClick={closeMenu}>
           <svg className='h-8' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
           </a>
            <span className='text-center font-bold'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcO5AlLD5mElUtTobKbS9OMercrub5nh4iX9l4jW3cFxf1vQMl5goaN3MQsL3iU7TCH8&usqp=CAU"/>
            </span>
          </div>
          {menus.map((val,idx) => <div key={idx} className=' m-[5px] p-2 border-black text-white'><button className='text-white'>{val}</button></div>)}
        </div>
      </div>
      }
      
    </div>

  )
}

export default Menu
