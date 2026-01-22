import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment_quantity':{
      return {
      ...state,
      quantity: state.quantity + 1,
    };
    }
    case 'decrement_quantity': {
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    } 
  }
  throw Error('Unknown action:' + action.type)
}

export default function AddToCartSection() {
  //current state variable set to initial state
  //dispatch updates the state
  const[state, dispatch] = useReducer(reducer, { quantity: 0 })

  const handleIncrement = () => {
    dispatch({ type: 'increment_quantity' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'decrement_quantity' })
  }

  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      <div className="flex w-full justify-center items-center pt-5">
        <FaCirclePlus onClick={handleIncrement} size={42} />
        <p>{state.quantity}</p>
        <FaMinusCircle onClick={handleDecrement} size={42} />
      </div>
      <div className="flex justify-center">
        <button>Buy Now</button>
        <button>Add to cart</button>
      </div>
  </div>
  )
}
