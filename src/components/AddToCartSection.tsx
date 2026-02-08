import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useCart } from '../context/useCart';
import type { Product } from '../types/product';
import { useState } from 'react';
import { Link } from 'react-router-dom'

type AddToCartSectionProps = {
  product: Product;
}

export default function AddToCartSection({ product }: AddToCartSectionProps ) {
  //use custom hook for cart functions
  const { addToCart, cart } = useCart();
  
  //local state for quantity
  const [quantity, setQuantity] = useState(1)
  
  //Check to see if item exists in cart
  //Display how many?
  const existingItem = cart.find(item => item.product.id === product.id)
  const itemInCart = existingItem?.quantity
  // const isInCart = Boolean(existingItem)
  // console.log(isInCart)

  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      <div className="flex w-full justify-evenly border-2 border-[#c9a24d] rounded-full items-center p-3">
        <FaMinusCircle 
        className="text-[#c9a24d] hover:text-[#b8943f]"
        onClick={() =>  setQuantity(q => q - 1)} 
        size={42} />
        <p>{quantity}</p>
        <FaCirclePlus
        className="text-[#c9a24d] hover:text-[#b8943f]" 
        onClick={() =>  setQuantity(q => q + 1)} 
        size={42} />
      </div>
      <div className="flex justify-evenly md:flex-col gap-3">
        {/* link to cart page here */}
        <Link to="/cart"
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f] text-center" 
        >Buy Now</Link>
        <button
        className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]" 
        onClick={() => addToCart(product, quantity)}>
          Add To Cart
          </button>
      </div>
  </div>
  )
}
