import React from 'react'
import '../App.css'
function titleSection({head1,head2,text}) {
  return (
    <div className='w-full flex justify-center flex-wrap gap-1 py-10 overflow-hidden'>
        <h5 className='w-full flex justify-center color-1 text-[1.3rem]'>{head1}</h5>
        <h4 className='w-full flex justify-center text-[2rem]'>{head2}</h4>
        <p className='w-full flex justify-center text-[1rem] text-zinc-500 text-center'>{text}</p>
    </div>
  )
}

export default titleSection