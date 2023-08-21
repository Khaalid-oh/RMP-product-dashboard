"use client"
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"

function Product() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const productsPerPage = 3
  const pageVisited = pageNumber * productsPerPage

  const displayUsers = products.slice(pageVisited, pageVisited + productsPerPage).map((product) => {
    return (
      <div>
        {products.length > 0 ? (
          <div>
            <div className="flex items-center justify-start w-[%] p-4 text-sm gap-4">
              <div className="">
                <img
                  className="h-20 w-20 rounded-md border-[1px] object-scale-down"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="flex flex-col gap-1 w-[20%]">
                <h2>{product.title}</h2>
                {/* <p>{product.description}</p> */}
                <p className="text-gray-400">Price: {product.price} USD</p>
                {/* <p>Category: {product.category}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  })

  const pageCount = Math.ceil(products.length/productsPerPage)

  const changePage =  ({selected}) => {
    setPageNumber(selected)}
  

  return (
    <div>
     {displayUsers}
     <ReactPaginate
     className="flex gap-2 p-2 border-[1px] w-[20%]"
      previousLabel={'Prev'}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={changePage}

     />
    </div>
  );
}

export default Product;
