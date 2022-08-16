import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decCountTotal,
  deleteFromKart,
  incCountTotal,
} from "../redux/kart/kartAction";

const Kart = () => {
  const { kart, total } = useSelector((state) => state.kart1);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    console.log("delete");
    let id = parseInt(e.target.id);
    const up = kart && kart.filter((k) => k.id !== id);
    kart &&
      kart.map((p) => {
        if (p.id === id) {
          dispatch(
            deleteFromKart({ updateProd: up, total: p.price * p.count })
          );
          return "";
        }
        return "";
      });
  };

  const handleAdd = (e) => {
    let id = parseInt(e.target.id);
    const up =
      kart &&
      kart.filter((k) => {
        if (k.id === id) {
          k.count += 1;
        }
        return "hello";
      });

    kart.map((prod) => {
      if (prod.id === id) {
        dispatch(incCountTotal({ updateProd: up, total: prod.price }));
        return "";
      }
      return "";
    });
  };

  const handleRemove = (e) => {
    let id = parseInt(e.target.id);

    //const del = kart && kart.filter((k) => k.id !== id);

    kart.map((prod) => {
      if (prod.id === id && prod.count > 1) {
        const up =
          kart &&
          kart.filter((k) => {
            if (k.id === id && k.count > 1) {
              k.count -= 1;
            }
            return "hello";
          });
        dispatch(decCountTotal({ updateProd: up, total: prod.price }));
        return "hh";
      }
      return "";
    });
  };

  return (
    <div className="mx-8 py-28 md:flex gap-4">
      <div className="flex flex-col gap-4 md:w-2/3 mb-5">
        {kart && console.log(kart)}
        {kart &&
          kart.map((prod,i) => {
            return (
              <div
                key={prod.id}
                className=" border-2 border-black rounded grid grid-flow-col justify-items-stretch gap-0 ">
                <img
                  src={prod.image}
                  alt="product"
                  className="w-24 h-24 border-r-2 justify-self-start"
                />
                <div className="pt-2 justify-self-start text-left ">
                  <h3>{prod.title}</h3>
                  <p>
                    Price:$ <span className="text-green-500">{prod.price}</span>
                  </p>
                </div>
                <div className=" flex flex-col justify-between  mr-3 justify-self-end ">
                  <div className="py-3">
                    <button
                      id={prod.id}
                      className="bg-blue-500 hover:bg-blue-400 border-1 
                    border-blue-500 text-white font-bold rounded-tl-lg rounded-bl-lg px-3"
                      onClick={handleRemove}>
                      -
                    </button>
                    <span className="px-3 border-2">{prod.count}</span>
                    <button
                      id={prod.id}
                      className="bg-blue-500 hover:bg-blue-400 border-1 
                    border-blue-500 text-white font-bold rounded-tr-lg 
                    rounded-br-lg px-3"
                      onClick={handleAdd}
                      >
                      +

                    </button>
                  </div>
                  <button
                    className="bg-red-600 text-white font-bold px-3 
                  rounded mb-3 hover:bg-red-400"
                    id={prod.id}
                    onClick={handleDelete}
                    data-testid={"button"+i}>
                    Delete
                    +
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="md:w-1/3  border-2 p-3">
        <h1 className="text-blue-500 text-3xl ">Total</h1>
        <hr />
        {kart &&
          kart.map((prod) => {
            return (
              <div key={prod.id} className="flex justify-between text-gray-500">
                <p>
                  {prod.id}. {prod.title.slice(0, 12)}...
                </p>
                <p>
                  {prod.count} X {prod.price}
                </p>
                <p>{prod.count * prod.price}</p>
              </div>
            );
          })}
        <hr />
        <div className="text-2xl flex justify-between">
          <p className="text-green-500">Total</p>
          <p>
            $<span className="text-green-500">{Math.floor(total)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kart;
