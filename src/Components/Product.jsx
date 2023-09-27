import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Product({addProductToCart}) {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const myProduct = await response.json();
      console.log(myProduct);
      setProduct(myProduct);
      setLoading(false);
    };
    fetchData();
  }, []);
  const Loading = () => {
    return <div>Loading....</div>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5">
          <div className="row d-flex  align-items-center">
            <div className="col-6 ">
              <img
                width="400px"
                src={product.image}
                alt={product.title}
                height="300px"
              />
            </div>
            <div className="col-6 p-5 ">
              <h5 className="display-6 text-black-50 mb-3 ">
                {product.category}
              </h5>
              <h2 className="text-uppercase display-6 ">{product.title}</h2>
              <h5 className="display-6 fw-bolder my-3">${product.price}</h5>
              <p>{product.description}</p>
              <button
                className="btn btn-outline-dark me-2"
                onClick={()=>addProductToCart(product)}
              >
                Add to cart
              </button>
              <NavLink to="/cart" className="btn btn-outline-dark   ">
                Go to cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
}
