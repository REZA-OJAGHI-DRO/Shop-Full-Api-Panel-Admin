import React from 'react'
import '../Home.css'
import TitleSection from '../../componentGeneral/titleSection'
import img1 from '../../assets/img/5.jpg'
function Section5() {
  return (
    <section className='w-full h-[60vh] lg:h-[80vh] section5-home-bg flex flex-wrap justify-center content-center'>
        <TitleSection head1={'Testimonials'} head2={'Our Happy Clients'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'}/>
        <div className='w-full flex flex-wrap group justify-center'>
            <img src={img1} alt="" className='rounded-full w-[3rem] group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300'/>
            <p className='text-[1rem] w-full text-center mt-4 font-semibold '>Marilyn Keller</p>
        </div>
    </section>
  )
}

export default Section5