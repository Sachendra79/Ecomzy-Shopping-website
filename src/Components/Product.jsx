import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
const {cart} = useSelector((state) => state)
const dispatch = useDispatch();

const addToCart =() => {
  dispatch(add(post));
  toast.success("Item added to Cart")
}
const removeFromCart =() => {
  dispatch(remove(post.id));
  toast.error("Item removed from Cart");
}


  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5 ">
      <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 m-1">
        <p>{post.title}</p>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold ">${post.price}</p>
      </div>
     
  {
    cart.some((p) => p.id == post.id) ? 
    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
    hover:bg-gray-700 hover:text-white  transition duration-300 ease-in" onClick={removeFromCart}>
      Remove Items
      </button>) :
      (
        <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700 hover:text-white  transition duration-300 ease-in" onClick={addToCart}>
          Add To Cart
        </button>
      )
  }
</div>

    </div>
  );
};

export default Product;
