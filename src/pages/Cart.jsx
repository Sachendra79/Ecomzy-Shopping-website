import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
const [totalAmount, setTotalAmount] = useState(0);

  useEffect ( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc+ curr.price ,0));
  },[cart]);


  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-evenly">

          <div className="w-96 gap-48">
            {cart.map((item, index) => {
              return <CartItem  key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

           <div className="flex flex-col gap-[20vh]">
           
           <div className="flex flex-col justify-between ">
            <div className="font-semibold text-green-600">Your Cart</div>
            <div className=" font-bold text-green-700 text-2xl">Summary</div>
            <p>
              <span className="font-semibold font-semibold">Total Items: {cart.length}</span>
            </p>
           </div>

           <div>
            <p className="font-semibold  ">Total Amount :<span className="font-bold">${totalAmount}</span> </p>
            <button className="bg-green-700 w-64 text-white h-10 rounded-md">
              Checkout Now
              </button>
           </div>


            </div>

        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="font-bold ">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white w-32 h-10 rounded-sm">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
