import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useReducer, useContext } from 'react';
import { CartContext } from "../context/CartContext";


export default function AddToCartSection() {
  //Get cart and the ways to change it from context
  //const{ addToCart, deleteFromCart, changeQuantity, cart} = useContext(CartContext);


  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      <div className="flex w-full justify-center items-center pt-5">
        <FaCirclePlus onClick={handleIncrement} size={42} />
        <p>1</p>
        <FaMinusCircle onClick={handleDecrement} size={42} />
      </div>
      <div className="flex justify-center">
        {/* link to cart page here */}
        <button>Buy Now</button>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
  </div>
  )
}
