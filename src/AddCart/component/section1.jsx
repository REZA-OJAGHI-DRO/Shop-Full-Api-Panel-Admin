import React, { useState, useEffect } from 'react';
import '../../App.css';
import Button2 from '../../componentGeneral/button2';
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalAllProduct, removeFromShopProduct } from '../../store';

function Section1() {
  const data = useSelector((state) => state.product.ShopProduct);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [quantities, setQuantities] = useState(() => {
    return data.map(() => 1);
  });

  const [subtotals, setSubtotals] = useState(() => {
    return data.map((val) => parseFloat(val.price.replace('$', '')));
  });

  useEffect(() => {
    const newTotal = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
    dispatch(updateTotalAllProduct(newTotal));
    setTotal(newTotal);
  }, [subtotals, dispatch]);

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;

    const newSubtotals = [...subtotals];
    newSubtotals[index] = newQuantity * parseFloat(data[index].price.replace('$', ''));

    setQuantities(newQuantities);
    setSubtotals(newSubtotals);
  };

  const handleRemove = (id) => {
    dispatch(removeFromShopProduct(id));
    const newData = data.filter(item => item.id !== id);
    const newSubtotals = newData.map((val, index) => quantities[index] * parseFloat(val.price.replace('$', '')));
    setSubtotals(newSubtotals);
    setQuantities(quantities.filter((_, index) => data[index].id !== id));
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
    <div className="w-full bg-color3 flex justify-center">
      <div className="w-full max-w-7xl flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20">
        <section className="w-full">
          <div className="w-full py-3 sm:py-4 md:py-5">
            <h4 className="w-full flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Cart</h4>
          </div>
          <hr className="w-full h-[5px]  bg-1" />
          <div className="w-full py-3 sm:py-4 md:py-5">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="w-full border-2 flex text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 bg-white">
                    <th className="w-[20%] p-2 flex justify-center items-center"></th>
                    <th className="w-[30%] p-2 flex justify-center items-center">Product</th>
                    <th className="w-[20%] p-2 flex justify-center items-center">Price</th>
                    <th className="w-[10%]  p-2 flex justify-center items-center">Quantity</th>
                    <th className="w-[20%] p-2 flex justify-center items-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, i) => (
                    <tr key={val.id} className="w-full border flex text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 bg-white">
                      <td className="w-[20%] gap-2 h-20 sm:h-24 md:h-28 lg:h-32 flex justify-center items-center">
                        <div className=" h-full flex justify-center items-center">
                          <i onClick={() => handleRemove(val.id)} className="bi bi-x-square cursor-pointer"></i>
                        </div>
                        <div className=" h-full flex justify-center items-center">
                          <img
                            className=" h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                            src={val.image}
                            alt={val.title}
                          />
                        </div>
                      </td>
                      <td className="w-[30%] h-20 sm:h-24 md:h-28 lg:h-32 flex justify-center items-center text-color p-2">
                        {val.title}
                      </td>
                      <td className="w-[20%] h-20 sm:h-24 md:h-28 lg:h-32 flex justify-center items-center">
                        {val.price}
                      </td>
                      <td className="w-[10%] h-20 sm:h-24 md:h-28 lg:h-32 flex justify-center items-center">
                        <input
                          type="number"
                          min="1"
                          value={quantities[i]}
                          className="w-full h-1/2 text-base sm:text-lg md:text-xl lg:text-2xl border-2 bg-white border-zinc-300 text-center"
                          onChange={(e) => handleQuantityChange(i, parseInt(e.target.value))}
                        />
                      </td>
                      <td className="w-[20%] h-20 sm:h-24 md:h-28 lg:h-32 flex justify-center items-center">
                        {subtotals[i].toFixed(2) + '$'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 border flex flex-wrap justify-center pb-6 sm:pb-8 md:pb-10">
              <table className="w-full">
                <tbody>
                  <tr className="w-full border flex">
                    <td className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black bg-white flex justify-start items-center px-4 sm:px-6 md:px-8 lg:px-10">
                      Cart totals
                    </td>
                  </tr>
                </tbody>
              </table>
              <table id="div5" className="w-full">
                <tbody>
                  <tr className="w-full flex px-4 sm:px-6 md:px-8 lg:px-10">
                    <td className="w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 border-b border-zinc-500 text-base sm:text-lg md:text-xl lg:text-2xl flex justify-start items-center text-zinc-500">
                      Subtotal
                    </td>
                    <td className="w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 border-b border-zinc-500 text-lg sm:text-xl md:text-2xl lg:text-3xl flex justify-start items-center text-zinc-500">
                      {total.toFixed(2) + '$'}
                    </td>
                  </tr>
                  <tr className="w-full flex px-4 sm:px-6 md:px-8 lg:px-10">
                    <td className="w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 text-base sm:text-lg md:text-xl lg:text-2xl flex justify-start items-center text-zinc-500">
                      Total
                    </td>
                    <td className="w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 text-lg sm:text-xl md:text-2xl lg:text-3xl flex justify-start items-center text-zinc-500">
                      {total.toFixed(2) + '$'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button2
              onClick={openModal}
                value={`proceed to checkout`}
                styleButton={`w-4/5 text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase bg-[#269FB7] text-white hover:bg-black transition-all duration-300 py-2 sm:py-3 md:py-4`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>

  {/* ********modal******** */}

  <div
    style={{ display: modal ? 'block' : 'none' }}
    className="w-[100%] h-[100vh] fixed top-0 justify-center overflow-y-scroll bg-[rgb(229,229,229)] z-40">
    <div className="2xl:container w-[100%] flex flex-wrap justify-center py-5">
      <section className="w-[90%] pb-10">
        <div className="w-[100%] py-5">
          <h4 className="w-[100%] flex justify-between items-center text-[2.5rem]">
            checkout
            <span><i onClick={closeModal} className="bi bi-x-square cursor-pointer text-[3rem] color-1 hover:scale-110 transition-all duration-300"></i></span>
          </h4>
        </div>
        <hr className="w-[100%] h-[5px] bg-1" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[100%] md:w-[60%] flex flex-wrap justify-center gap-1">
            <div className="w-[90%] p-5">
              <h4 className="w-[100%] flex items-center text-[1.5rem]">
                Billing details
              </h4>
            </div>
            <hr className="w-[90%] h-[3px] bg-zinc-500" />
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2 pt-2">
              <p className="w-[45%] text-[1.5rem] md:text-[1rem]">First name <span className="text-[red]">*</span></p>
              <p className="w-[45%] text-[1.5rem] md:text-[1rem]">Last name <span className="text-[red]">*</span></p>
              <input type="text" className="inpCheckout w-[45%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
              <input type="text" className="inpCheckout w-[45%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Company name (optional)</p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Street address <span className="text-[red]">*</span></p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400 mb-2"
                placeholder="House number and street name" required />
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400"
                placeholder="Apartment,suite,unit,etc.(optional)" />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Town / City <span className="text-[red]">*</span></p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">County (optional)</p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Postcode <span className="text-[red]">*</span></p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Phone <span className="text-[red]">*</span></p>
              <input type="text" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
            </label>
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Email address <span className="text-[red]">*</span></p>
              <input type="email" className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400" required />
            </label>
            <div className="w-[90%] p-5">
              <h4 className="w-[100%] flex items-center text-[1.5rem]">
                Additional information
              </h4>
            </div>
            <hr className="w-[90%] h-[3px] bg-zinc-500" />
            <label htmlFor="i1" className="w-[90%] flex flex-wrap justify-between items-center px-2">
              <p className="w-[100%] text-[1.5rem] md:text-[1rem]">Order notes (optional)</p>
              <textarea name="" id="" cols="30" rows="3"
                className="inpCheckout w-[100%] text-[2rem] md:text-[1.5rem] border border-zinc-400"
                placeholder="Notes about your order,e.g.special notes for delivery."></textarea>
            </label>
          </div>
          <div className="w-[100%] md:w-[40%] flex flex-wrap justify-center content-start">
            <ul className="w-[100%] md:w-[80%] flex flex-wrap justify-center gap-2">
              <li className="w-[90%] text-[2rem] font-bold">Your order</li>
              <li className="w-[90%] flex justify-between border-b-2 border-zinc-400">
                <p className="text-[1.5rem] text-zinc-800">
                  Product
                </p>
                <p className="text-[1.5rem] text-zinc-800">
                  Subtotal
                </p>
              </li>
            </ul>
            <ul className="w-[80%]  flex flex-wrap justify-center gap-2">
              {data.map((val, i) => (
                <li key={i} className="w-[90%] flex justify-between ">
                  <p className="text-[.9rem] text-zinc-800">{val.title}</p>
                  <p className="text-[.9rem] text-zinc-800">{val.price}</p>
                </li>
              ))}
            </ul>
            {/* <ul id="div10" className="w-[30%] flex flex-wrap justify-center gap-2">
            </ul> */}
            <ul id="div11" className="w-[50%] md:w-[40%] flex flex-wrap justify-center gap-2">
            </ul>
            <ul className="w-[100%] md:w-[80%] flex flex-wrap justify-center gap-2">
              <li className="w-[90%] flex justify-between border-b-2 border-zinc-400">
                <p className="text-[1.5rem] text-zinc-800">
                  Subtotal
                </p>
                <p id="total1" className="text-[1.5rem] text-zinc-800">
                {total.toFixed(2) + '$'}
                </p>
              </li>
              <li className="w-[90%] flex justify-between border-b-2 border-zinc-400">
                <p className="text-[1.5rem] text-zinc-800">
                  Total
                </p>
                <p id="total2" className="text-[1.5rem] text-zinc-800">
                {total.toFixed(2) + '$'}
                </p>
              </li>
              <li className="w-[90%] flex justify-center">
                <button id="send111"
                  className="w-[50%] text-[1.5rem] uppercase bg-[#269FB7] text-white hover:bg-black transition-all duration-300 py-2">place order</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
    </>
  );
}

export default Section1;
