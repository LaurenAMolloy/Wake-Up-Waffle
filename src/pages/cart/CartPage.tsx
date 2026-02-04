import { useState } from 'react'
import { useCart } from "../../context/useCart";
import { TiDeleteOutline } from "react-icons/ti";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";

export default function CartPage() {
  const { cart, deleteFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  
  //Add condition of cart is empty
  const cartLength = cart.length
  
  const totalOrder = cart.reduce((total, item) => {
  return total + item.product.price
  }, 0);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const confirmationBar = 
  <div>
    <Link to="/">Start New Order</Link>
  </div>
  
  const modal = <Modal onClose={handleClose} confirmationBar={confirmationBar}>
    <ImCross 
    size={24} 
    className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-black" onClick={handleClose} />
    <p>Your order has been successful</p>
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
              className="text-[#78716c] hover:text-[#c9a24d] transition" size={35} 
              />
              <FaCirclePlus 
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
