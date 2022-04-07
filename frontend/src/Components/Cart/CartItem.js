import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // setCartProducts,
  // setSummaryItems,
  // setCartProducts,
  // setSummaryItems,
  setTotalAmount,
} from "../../redux/reducers/userReducers";
// import { useSelector } from "react-redux";

function CartItem({ product, setSummaryProductsFn }) {
  const [count, setCount] = useState(0);
  const prodPrice = parseInt(product.productPrice.split(",").join(""));
  const [price, setPrice] = useState(prodPrice);

  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.user.totalAmount);
  const newProduct = { ...product, count: count };

  useEffect(() => {
    setPrice(count === 0 ? prodPrice : prodPrice * count);
  }, [count, prodPrice]);

  console.log(newProduct);
  console.log(count);

  return (
    <div>
      {/* {product.map((product, index) => ( */}
      {/* <div key={index}> */}
      <div className="flex justify-between items-center gap-5 py-2">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src={product.img}
              alt="item"
              className="rounded-md w-16 h-16 bg-[#F1F1F1] object-fit"
            />
          </div>
          <div>
            <p
              className="text-[#000000] font-bold"
              style={{ fontSize: "15px" }}
            >
              {product.productName}
            </p>
            <p
              className="text-black opacity-50"
              style={{ fontSize: "13px", letterSpacing: "0.32345px" }}
            >
              <span className="mr-1">$</span>
              {price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-4 bg-[#F1F1F1] px-3 py-1">
          <button
            disabled={count === 0 ? "true" : ""}
            onClick={() => {
              setCount((prevState) =>
                prevState === 0 ? prevState : prevState - 1
              );
              if (count !== 0) {
                dispatch(setTotalAmount(totalAmount - prodPrice));
              }
              setSummaryProductsFn({ ...product, count: count - 1 });
            }}
          >
            -
          </button>
          <p
          // onChange={(e) => {
          //   setSummaryProductsFn({ ...product, count: e.target.value });
          // }}
          >
            {count}
          </p>
          <button
            disabled={count === 8 ? "true" : ""}
            onClick={() => {
              setCount((prevState) =>
                prevState === 8 ? prevState : prevState + 1
              );
              if (count !== 8) {
                dispatch(setTotalAmount(totalAmount + prodPrice));
              }
              setSummaryProductsFn({ ...product, count: count + 1 });
            }}
          >
            +
          </button>
        </div>
      </div>
      {/* </div> */}
      {/* // ))} */}
    </div>
  );
}

export default CartItem;
