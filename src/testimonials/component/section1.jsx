import React from 'react'
import img1 from '../../assets/img/8.jpg'
import img2 from '../../assets/img/9.png'
import img3 from '../../assets/img/10.jpg'
import img4 from '../../assets/img/11.jpg'
import img5 from '../../assets/img/12.jpg'
import img6 from '../../assets/img/13.jpg'
import img7 from '../../assets/img/14.jpg'
function Section1() {
    const data = [
        {
            id:1,
            name:'Marilyn Keller',
            img:img3,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        },
        {
            id:2,
            name:'Denise Carr',
            img:img4,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        },
        {
            id:3,
            name:'Carol Hughes',
            img:img5,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        },
        {
            id:4,
            name:'Kathleen Turner',
            img:img6,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        },
        {
            id:5,
            name:'Joan Willis',
            img:img7,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        },
    ]
  return (
    <section className='w-full grid'>
        <article className='w-full gridArea grid items-start'>
            <div className='w-[100%] gridArea'>
                <img src={img1} className='w-[50%]' alt="" />
            </div>
            <div className='w-[100%] gridArea translate-y-[60%]'>
                <img src={img2} className='w-[100%] opacity-20' alt="" />
            </div>
        </article>
        <article className='w-full gridArea flex justify-center items-center py-40'>
            <div className='w-[90%] lg:w-[52%] flex flex-wrap justify-center p-7 items-center bg-white z-40' style={{boxShadow:'0px 0px 20px 4px rgba(0, 0, 0, 0.5)'}}>
                {data.map((item)=>(
                    <div key={item.id} className='w-[100%] flex flex-wrap border-t-[3px] border-zinc-300 py-5  justify-center items-center'>
                        <p className='text-[1.1rem] text-zinc-500 '>{item.text}</p>
                        <div className='w-[100%] flex justify-start gap-2 pb-5 pt-14 items-center'>
                            <img src={item.img} className='w-[3rem] h-[3rem] rounded-full' alt="" />
                            <h4 className='text-[1rem]'>{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Section1