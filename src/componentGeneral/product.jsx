import React, { useState } from 'react';
import Button2 from './button2';
import { setShopProduct } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
function Product({ data, imageArray }) {
  const data2 = useSelector((state) => state.product.ShopProduct);
  const [product, setProduct] = useState(data2);
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState(data);
  const dispatch = useDispatch();

  const onClick = (i) => {
    const selectedProduct = data[i];
    if (!product.some(item => item.id === selectedProduct.id)) {
      const updatedProduct = [...product, selectedProduct];
      setProduct(updatedProduct);
      dispatch(setShopProduct(updatedProduct));
    }
  };
function openModal(i){
  setModal(true);
  setDataModal(data[i]);
  }
function closeModal(){
  setModal(false);
}
console.log(dataModal);
  return (
    <>
    <article className='w-[80%] gap-14 flex flex-wrap justify-center items-center'>
      {data.map((val, i) => (
        <figure key={i} className='w-[200px] h-[400px]'>
          <div onClick={() => openModal(i)} className='w-full h-[200px] group overflow-hidden hover:shadow-lg hover:shadow-cyan-500 rounded-lg grid'>
            <img src={imageArray[i]} alt="" className='w-full h-full gridArea group-hover:scale-110 transition-all duration-300 cursor-pointer object-cover' />
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
            <Button2 value={<i className="bi bi-basket3-fill text-[1.2rem]"></i>} onClick={() => onClick(i)} styleButton={'text-white bg-[rgb(38,159,183)] py-1 px-9 rounded-xl flex justify-center items-center border-white  transition-all duration-300 hover:bg-black '} />
          </figcaption>
        </figure>
      ))}
    </article>

    <div style={{display: modal ? 'block' : 'none'}} className="w-full myElement2 h-screen fixed top-0 bg-white overflow-auto z-50">
            <main className="w-full bg-[rgb(232,231,231)]">
                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex justify-end items-center px-4 sm:px-6 md:px-8 lg:px-12">
                    <i onClick={() => closeModal()} className="bi bi-x-square cursor-pointer text-[3rem] color-1 hover:scale-110 transition-all duration-300"></i>
                </div>
                <div className="w-full flex justify-center pb-10">
                    <div className="w-full max-w-7xl flex flex-wrap justify-center items-start">
                        <section className="w-full sm:w-11/12 md:w-5/6 lg:w-4/5 bg-white flex flex-wrap p-4 sm:p-6 md:p-8 lg:p-10">
                            <article className="w-full lg:w-1/2 h-auto lg:h-[70vh] flex justify-center overflow-hidden items-start mb-4 md:mb-0">
                                <img src={dataModal.image} alt="" className="w-full h-[100%] object-cover hover:scale-110 transition-all duration-300" />
                            </article>
                            <article className="w-full lg:w-1/2 flex flex-wrap content-start gap-2 sm:gap-3 px-2 sm:px-3">
                                <h3 className="w-full text-[1.5rem] color-1">{dataModal.name}</h3>
                                <h4 className="w-full text-[1.8rem]">{dataModal.title}</h4>
                                <p className="w-auto text-[1.5rem] flex items-end text-zinc-700 font-bold mr-4">
                                  {dataModal.price}
                                </p>
                                <p className="w-auto text-[1.2rem] flex items-end text-zinc-500">+ Free Shipping</p>
                                <p className="w-full text-[1rem] text-zinc-500">{dataModal.Description1}</p>
                                <div className="w-full my-4">
                                <Button2 value={'ADD TO CART'} onClick={() => onClick(dataModal.id - 1)} styleButton={'text-white bg-[rgb(38,159,183)] text-base sm:text-lg md:text-xl lg:text-2xl py-2 sm:py-3 px-6 sm:px-8 md:px-10 lg:px-12 rounded-md flex justify-center items-center border-white transition-all duration-300 hover:bg-black'} />
                                </div>
                                <hr className="w-full h-px my-3 bg-zinc-300" />
                                <p className="w-auto mr-2 text-[1.2rem] text-zinc-500">Category: </p>
                                <p className="w-auto text-[1.2rem] color-1">{dataModal.name}</p>
                            </article>
                            <article className="w-full border-t-2 py-4 sm:py-6 md:py-8 lg:py-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                                <h4 className="w-full text-[1.6rem] mb-2 sm:mb-3 md:mb-4">
                                    Description
                                </h4>
                                <p className="w-full text-[1rem] text-zinc-500">{dataModal.Description2}</p>
                            </article>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </>
  );
}

export default Product;
