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
      <div className="flex w-full justify-evenly border-2 border-[#c9a24d] rounded-full items-center p-3">
        <FaCirclePlus
        className="text-[#c9a24d] hover:text-[#b8943f]" 
        onClick={() => incrementItem(id)} 
        size={42} />
        <p>1</p>
        <FaMinusCircle 
        className="text-[#c9a24d] hover:text-[#b8943f]"
        onClick={() => decrementItem(id)} 
        size={42} />
      </div>
      <div className="flex justify-evenly">
        {/* link to cart page here */}
        <button 
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]" 
        onClick={handleBuyNow}>Buy Now</button>
        <button
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]" 
        onClick={() => addToCart(id)}>Add to cart</button>
      </div>
  </div>
  )
}
