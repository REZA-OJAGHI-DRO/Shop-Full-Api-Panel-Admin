import React from 'react'
import '../../App.css'
function Section3() {
    const data = [
        {
            id: 1,
            icon: <i className="bi bi-percent w-[4rem] h-[4rem]  border-1 color-1 rounded-full flex justify-center items-center text-[2.5rem] "></i>,
            title: 'Season Sle',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
        },
        {
            id: 2,
            icon: <i className="bi bi-truck w-[4rem] h-[4rem]  border-1 color-1 rounded-full flex justify-center items-center text-[2.5rem] "></i>,
            title: 'Free Shipping',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
        },
        {
            id: 3,
            icon: <i className="bi bi-person-fill-check w-[4rem] h-[4rem]  border-1 color-1 rounded-full flex justify-center items-center text-[2.5rem] "></i>,
            title: 'Money Back Guarantee',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
        },
    ]
    return (
        <>
        <section className='w-full flex flex-wrap justify-center items-center gap-10'>
            {data.map((val)=>{
                return(
                    <>
                    <div className='section3-home w-[300px] md:w-[350px] h-[300px] flex flex-wrap content-center gap-5 hover:scale-110 transition-all duration-300'>
                        <div className='w-full flex justify-center items-center'>{val.icon}</div>
                        <h4 className='w-[100%] flex justify-center items-center text-[1.5rem]  font-semibold'>{val.title}</h4>
                        <p className='w-[100%] text-center text-[1rem] text-zinc-500'>{val.text}</p>
                    </div>
                    </>
                )
            })}
        </section>
        </>
  )
}

export default Section3