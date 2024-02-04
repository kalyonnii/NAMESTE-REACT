import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
const {loggedInUser}=useContext(UserContext)
const {name, cuisines, avgRating, costForTwo, cloudinaryImageId}=resData?.info;
  // const {  name, cusine, rating, costForTwo, time } = resData?.data||{};
  // console.log("image", img);
  // console.log(name);
  //destructuring on the fly

  return (
    <div className="res-card bg-gray-100 rounded-lg hover:bg-gray-300 m-4 p-4 w-[250px] ">
      <img
        className="res-logo w-56 h-56 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        // onLoad={() => console.log("Image loaded successfully")}
        // onError={(e) => console.error("Error loading image:", e)}
      />
      <h3 className="font-bold py-2 text-lg ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4 > User:{ loggedInUser}</h4>
    </div>
  );
};



//Higher order component 

//input - ResturantCard==> RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-green-300 text-black  mx-8 m-4 p-2 rounded-lg">Opened</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}








export default RestaurantCard;
