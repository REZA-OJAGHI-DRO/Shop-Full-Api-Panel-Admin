import React from "react";
import { useState } from "react";
import Button from "../../componentGeneral/button";
import Product from "../../componentGeneral/product";
import { useQuery } from "react-query"
import { fetchShopData } from '../../function'

function Section1() {
    
  const [dataProduct, setDataProduct] = useState([]);
  const [imageArray2, setImageArray2] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [title, setTitle] = useState("Shop");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const { isLoading, isError, error, data } = useQuery("posts", fetchShopData);
  if (isLoading) {
   return <div>در حال دریافت اطلاعات...</div>;
  }
  if (isError) {
   return <div> {error.message}:ارور</div>;
  }
  const imageArray = data.map(item => '/' + item.image);
 
  function clickData(x , y) {
      if (x === "allData") {
          setDataProduct(data);
          setImageArray2(imageArray);
          setCurrentPage(1); 
        setTitle('All');
        } else {
        setDataProduct([data[x]]);
        setImageArray2([imageArray[x]]);
        setTitle(y);
        setCurrentPage(1); 
    }
  }


  const totalPages = Math.ceil(dataProduct.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataProduct.slice(indexOfFirstItem, indexOfLastItem);
  const currentImages = imageArray2.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="w-[100%] bg-[rgb(234,234,234)] flex justify-center">
      <div className="2xl:container w-[100%] ">
        <div className="w-[100%] h-[100%] py-20 px-5 xl:px-28">
          <section className="w-[100%] h-[100%] flex justify-between flex-wrap gap-7">
            <article className="w-[100%] xl:w-[26%] flex content-start flex-wrap gap-10">
              <article className="w-[100%] py-5 bg-white flex flex-wrap justify-center items-center">
                <div className=" w-full flex flex-wrap justify-center items-center">
                  <input
                    type="text"
                    className="w-[80%] h-[40px] text-[1rem] border-2 border-zinc-300 me-2"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowDropdown(e.target.value.length > 0);
                    }}
                  />
                  {showDropdown && (
                    <ul className=" z-50 w-[100%] bg-white mt-1">
                      {data
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              clickData(index, item.name);
                              setShowDropdown(false);
                              setSearchTerm('');
                            }}
                            className="w-[100%] text-[1rem] color-1 px-10 py-1 cursor-pointer hover:text-white hover:bg-[rgb(38,159,183)] transition-all duration-300"
                          >
                            {item.name}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </article>
              <article className="w-[100%] bg-white"></article>
              <article className="w-[100%]  bg-white px-5 py-10">
                <p className="w-[100%] text-[2rem] mb-8">
                  Filter by Categories
                </p>
                <p
                  onClick={() => clickData("allData")}
                  className="w-[100%] text-[1rem] color-1 px-5 cursor-pointer hover:text-white hover:bg-[rgb(38,159,183)] transition-all duration-300"
                >
                  all
                </p>
                <ul className="w-[100%] ">
                  {data.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => clickData(index , item.name)}
                      className="w-[100%] text-[1rem] color-1 px-5 py-1 cursor-pointer hover:text-white hover:bg-[rgb(38,159,183)] transition-all duration-300"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </article>
            </article>
            <article className="w-[100%] xl:w-[71%]  bg-white">
              <div className="w-[100%]  border-2 flex items-center p-10">
                <p className="w-[100%] text-[1.2rem] text-zinc-500">
                  Home/ {title}
                </p>
              </div>
              <div className="w-[100%]  flex flex-wrap content-start justify-center py-5">
                <Product data={currentItems} imageArray={currentImages}/>
                {dataProduct.length > itemsPerPage && (
                  <div className="w-full flex justify-center mt-5">
                    {currentPage > 1 && (
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        className="mx-1 px-3 py-1 border bg-white hover:text-white hover:bg-[rgb(38,159,183)] transition-all duration-300"
                      >
                        &lt;
                      </button>
                    )}
                    {getPageNumbers().map((number, index) => (
                      <React.Fragment key={index}>
                        {number === '...' ? (
                          <span className="mx-1">...</span>
                        ) : (
                          <button
                            onClick={() => paginate(number)}
                            className={`mx-1 px-3 py-1 border ${
                              currentPage === number ? 'bg-[rgb(38,159,183)] text-white' : 'bg-white'
                            }`}
                          >
                            {number}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                    {currentPage < totalPages && (
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        className="mx-1 px-3 py-1 border bg-white hover:text-white hover:bg-[rgb(38,159,183)] transition-all duration-300"
                      >
                        &gt;
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Section1;
