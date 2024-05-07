import React from 'react'
import Card from '../Card/Card'
import Menu from '../Menu/Menu'
import Images from '../Images/Images'

const Wafr = () => {
  return (
    <div>
         <div className='flex'>
            <div className='h-screen mr-2'><Menu/></div>
            <div className='w-[200px]'>
                <Images/>
                <Card/>
            </div>
    </div>
    </div>
  )
}

export default Wafr