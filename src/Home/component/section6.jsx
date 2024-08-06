import React from 'react'
import TitleSection from '../../componentGeneral/titleSection'
import { useQuery } from "react-query";
import { fetchShopData } from '../../function'
import Product from '../../componentGeneral/product'
function Section6() {
    
    const { isLoading, isError, error, data } = useQuery("posts", fetchShopData);
    if (isLoading) {
     return <div>در حال دریافت اطلاعات...</div>;
    }
    if (isError) {
     return <div> {error.message}:ارور</div>;
    }
   
     const lastFourData = data.slice(-4);
     const imageArray = lastFourData.map(item => '/' + item.image);
  return (
    <section className='w-full flex justify-center'>
        <div className='w-full 2xl:container flex flex-wrap justify-center content-center'>
            <TitleSection head1={'Blossom into a New You!'} head2={'Latest Products'} text={'Lorem ipsum dolor sit amet, consectetur.'}/>
            <Product data={lastFourData} imageArray={imageArray}/>
        </div>
    </section>
  )
}

export default Section6