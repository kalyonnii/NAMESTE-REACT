import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //local variable
  // let btnName = "Login";
  //local state variable
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);


  //subscribing the store using the selector 
  const cartItems = useSelector((store)=>store.cart.items)
console.log(cartItems)


  //console.log(loggedInUser);
  return (
    <div className="header flex justify-between bg-pink-50 shadow-lg m-2 sm:bg-yellow-100  lg:bg-green-200">
      <div className="logo-container">
        <img className="logo w-5/12 m-2 p-2 rounded-3xl" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-black  ">
            <Link to="/cart">🛒-({cartItems.length} Items)</Link>
          </li>
          <li>
            <button
              className="login bg-pink-300 w-30 px-2 rounded-sm text-gray-50 "
              onClick={() => {
                
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                // console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
