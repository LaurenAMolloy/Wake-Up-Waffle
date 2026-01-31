import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/product';
import { useState } from 'react'

type AddToCartSectionProps = {
  product: Product;
}

export default function AddToCartSection({ product }: AddToCartSectionProps ) {
  //use custom hook for cart functions
  const { addToCart } = useCart();
  
  //local state for quantity
  const [quantity, setQuantity] = useState(1)

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
        onClick={() =>  setQuantity(q => q + 1)} 
        size={42} />
        <p>{quantity}</p>
        <FaMinusCircle 
        className="text-[#c9a24d] hover:text-[#b8943f]"
        onClick={() =>  setQuantity(q => q - 1)} 
        size={42} />
      </div>
      <div className="flex justify-evenly">
        {/* link to cart page here */}
        <button 
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]" 
        onClick={handleBuyNow}>Buy Now</button>
        <button
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]" 
        onClick={() => addToCart(product, quantity)}>Add to cart</button>
      </div>
  </div>
  )
}
