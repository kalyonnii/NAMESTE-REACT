

import {useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

import {useDispatch} from "react-redux"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

const dispatch =useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  //console.log(cartItems?.card?.info?.name)
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="m-auto  p-2 w-6/12 shadow-lg gap-2">
        <button className="p-2 m-2 bg-green-300 rounded-lg text-black"
        onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length==0 && <h1>Cart is Empty Add Items to the cart!!!! </h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
