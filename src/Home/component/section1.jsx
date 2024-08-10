

import React from 'react';
import { useQuery } from "react-query";
import { fetchShopData } from '../../function'
import TitleSection from "../../componentGeneral/titleSection";
import Product from '../../componentGeneral/product'
function Section1() {

 const { isLoading, isError, error, data } = useQuery("posts", fetchShopData);
 if (isLoading) {
  return <div>در حال دریافت اطلاعات...</div>;
 }
 if (isError) {
  return <div> {error.message}:ارور</div>;
 }

  const imageArray = data.map(item => '/' + item.image);

  return (
    <section className="w-full flex justify-center items-center">
        <div className='w-full 2xl:container flex flex-wrap justify-center items-center'>

      <TitleSection
        head1={"A Brush of Perfection"}
        head2={"Add a Flavor to Being a Girl"}
        text={"Lorem ipsum dolor sit amet, consectetur."}
      />
      <Product data={data} imageArray={imageArray}/>
        </div>
    </section>
  );
}

export default Section1;
