import { useState } from 'react'
import { useCart } from "@/hooks/useCart";
import { TiDeleteOutline } from "react-icons/ti";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Modal from '@/components/Modal';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import type { CartItem } from '@/types/Cart';

export default function CartPage() {
  const { cart, deleteFromCart, incrementItem, decrementItem, emptyCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  console.log(cart)
  
  //Add condition of cart is empty
  const cartLength = cart.length
  
  //Total Price
  const totalOrder = cart.reduce((total: number, item: CartItem) => {
  return total + item.product.price * item.quantity
  }, 0);

  const handleClick = () => {
    setShowModal(true);
    //empty cart on completion
    emptyCart()
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const confirmationBar = 
    <Link  className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f] text-center" to="/menu">Start New Order</Link>

  
  const modal = <Modal confirmationBar={confirmationBar}>
    <div>
    <p className='pb-10'>Your order has been successful</p>
    <ImCross 
    size={24} 
    className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-red-500" onClick={handleClose} />
    </div>
  </Modal>

  const renderedCartItems = cart.map((item) => {
    return (
      <div key={item.product.name}>
        <p className="font-bold text-xl pb-2">{item.product.name}</p>
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center  gap-6">
              <span className="font-bold text-[#c9a24d] text-xl">{item.quantity}x @ {item.product.price}</span><span className='font-bold'> {item.product.price * item.quantity}</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <FaMinusCircle
              onClick={() => decrementItem(item.product.id)}
              className="text-[#78716c] hover:text-[#c9a24d] transition" size={35} 
              />
              <FaCirclePlus 
              onClick={() => incrementItem(item.product.id)}
              className="text-[#78716c] hover:text-[#c9a24d] transition" size={35} 
             />
              <TiDeleteOutline className="text-[#a8a29e] hover:text-red-500 transition"  size={45} onClick={() => deleteFromCart(item.product.id)} />
            </div>
          </div>
          <hr></hr>
      </div>
    )
  })

  return (
    <div className="flex flex-col pb-10 pt-10 w-4/5">
      <h1 className="text-[#44403c] text-2xl font-bold pb-4">Your Cart({cartLength})</h1>

      {cart.length === 0 && 
      <div className="pb-10">
        <h2 className="text-[#44403c] text-2xl font-bold pb-10">You have no brunch items in your cart yet!</h2>
      <Link  className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f] text-center" to="/menu">Back to Menu</Link>
      </div>
      }

      <div className="flex flex-col gap-8 pt-5 bg-[#ffffff] p-5 rounded-2xl shadow-2xl w-full">
        {renderedCartItems}
        <div className="flex justify-between">
        <p>Order Total:</p><span className="font-bold">{totalOrder}</span>
      </div>
      <button onClick={handleClick} className="bg-[#c9a24d] p-4 rounded-2xl hover:bg-[#b8943f]">Confirm Order</button>
      {showModal && modal}
      </div>
    </div>
  )
}
