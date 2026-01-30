import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function AddToCartSection() {
  //Get cart and the ways to change it from context
  const{ addToCart, deleteFromCart, incrementItem, decrementItem } = useContext(CartContext);

  const handleBuyNow = () => {
    console.log("buying now")
    //add to cart
    //navigate to cart page
  }
  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      <div className="flex w-full justify-center items-center pt-5">
        <FaCirclePlus 
        onClick={() => incrementItem(id)} 
        size={42} />
        <p>1</p>
        <FaMinusCircle 
        onClick={() => decrementItem(id)} 
        size={42} />
      </div>
      <div className="flex justify-center">
        {/* link to cart page here */}
        <button onClick={handleBuyNow} >Buy Now</button>
        <button 
        onClick={() => addToCart(id)}>Add to cart</button>
      </div>
  </div>
  )
}
