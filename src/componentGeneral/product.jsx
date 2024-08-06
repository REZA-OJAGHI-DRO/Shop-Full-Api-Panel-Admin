import React from 'react'
import Button from './button'
function Product({data , imageArray}) {

  return (
    <article className='w-[80%] gap-14 flex flex-wrap justify-center items-center'>
        {data.map((val , i)=>{
            return(
                <>
                <figure className=' w-[200px] h-[400px]'>
                    <div className='w-full h-[200px] group overflow-hidden hover:shadow-lg hover:shadow-cyan-500 rounded-lg grid'>
                    <img src={imageArray[i]} alt="" className='w-full h-full gridArea group-hover:scale-110 transition-all duration-300 cursor-pointer object-cover'/>
                    <div className='w-full h-full gridArea bg-[rgba(0,0,0,0.3)] opacity-0 scale-110 cursor-pointer group-hover:opacity-100 transition-all duration-300 flex justify-center items-center'>
                    <i className="bi bi-search text-[2rem] text-white"></i>
                    </div>
                    </div>
                    <figcaption className='w-full h-[200px] flex flex-wrap justify-start content-center'>
                        <h5 className='w-full text-zinc-500 text-[.9rem] mb-3'>{val.name}</h5>
                        <p className='w-full text-[1.5rem]'>{val.price}</p>
                        <h5 className='w-full text-zinc-500 text-[.9rem]'>{val.title}</h5>
                        <div className='w-full text-zinc-500 flex gap-1 mb-2'>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        </div>
                        <Button value={<i className="bi bi-basket3-fill text-[1.2rem]"></i>} href={'#top'} styleButton={'text-white bg-[rgb(38,159,183)] py-1 px-9 rounded-xl flex justify-center items-center border-white  transition-all duration-300 hover:bg-black '}/>
                    </figcaption>
                </figure>
                </>
            )
        })}
      </article>
  )
}

export default Product