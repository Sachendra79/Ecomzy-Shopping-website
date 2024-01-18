import React from "react";
import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
 const dispatch= useDispatch();
   const removeFromCart = () =>
   {
         dispatch(remove(item.id));
         toast.error("item removed");
   }

  return (
    <div className="border-b-2 border-opacity-50 border-black ">
      <div className="flex mt-6">
        <div className="w-[240px]">
          <img className="h-full w-full" src={item.image} alt="" />
        </div>

           <div className="mx-3 gap-28 flex flex-col gap-11">
        <div >
          <h1 className="text-gray-700 font-semibold text-lg text-left  m-1">{item.title}</h1>
          <h1 className=" font-semibold font-normal text-[10px] text-left">{item.description.split(" ").slice(0,18).join(" ") + "..."}</h1>
        </div>

        <div className="flex justify-between ">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div className=" bg-red-300 w-10 h-9 rounded-full flex justify-center items-center" onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
