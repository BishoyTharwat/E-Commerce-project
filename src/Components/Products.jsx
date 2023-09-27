import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const myData = await response.json();
      if (componentMounted) {
        setData(myData);
        setfilter(myData);
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    fetchData();
  }, []);
  const Loading = () => {
    return <div>Loading....</div>;
  };
  const filterCateg = (category) => {
    let dataList = data.filter((myItem) => myItem.category === category);
    setfilter(dataList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="filters-container d-flex justify-content-center">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterCateg("men's clothing")}
          >
            Men's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterCateg("women's clothing")}
          >
            Women's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterCateg("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterCateg("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 col-lg-3 my-3  p-4 " key={product.id}>
                <div className="card  text-center h-100 p-2">
                  <img src={product.image} height="250px" alt="" />
                  <div className="card-body">
                    <h5>{product.title.substring(0, 18)}..</h5>
                    <p>${product.price} </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-primary">
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center display-3 fw-bolder">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {<ShowProducts />}
          {/* {loading ? <Loading /> : <ShowProducts />} */}
        </div>
      </div>
    </>
  );
}
