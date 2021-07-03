import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToKart, incCountTotal } from "../redux/kart/kartAction";
import { fetchProduct } from "../redux/store";
import { AiOutlineReload } from "react-icons/ai";

const DisplayItems = () => {
  const { products, loading, err } = useSelector((state) => state.products1);
  const { kart, total } = useSelector((state) => state.kart1);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let id = parseInt(e.target.id);
    let flag = 0;
    const item = products.filter((p) => p.id === id);
    const up =
      kart &&
      kart.filter((k) => {
        if (k.id === id) {
          k.count += 1;
          flag = 1;
        }
        return "hello";
      });

    if (kart.length === 0) {
      dispatch(
        addToKart({ prod: { ...item[0], count: 1 }, total: item[0].price })
      );
    } else if (flag === 1) {
      kart.map((prod) => {
        if (prod.id === id) {
          dispatch(incCountTotal({ updateProd: up, total: item[0].price }));
          return "";
        }
        return "";
      });
    } else {
      dispatch(
        addToKart({ prod: { ...item[0], count: 1 }, total: item[0].price })
      );
    }
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center md:mx-24 mx-12 pt-28">
      {products.length > 0 ? (
        products.map((prod) => {
          return (
            <div
              key={prod.id}
              className="lg:w-72 md:w-60 w-10/12 shadow-lg overflow-hidden rounded my-6 mx-6  bg-gray-700 hover:border-black border-2">
              <img
                src={prod.image}
                alt="Product-img"
                className="h-60 lg:w-80 w-full"
              />
              <div className="p-3 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg">{prod.title}</h3>
                  <p>
                    Price : $
                    <span className="text-yellow-300">{prod.price}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-end m-3">
                <button
                  className="text-black bg-white rounded font-bold py-2 px-4"
                  id={prod.id}
                  onClick={handleClick}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <AiOutlineReload className="my-10 text-8xl text-blue-600 animate-spin w-screen" />
      )}
    </div>
  );
};

export default DisplayItems;
