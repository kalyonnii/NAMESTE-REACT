import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../components/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { DATA_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  // state variable - super powerful variable -using hooks--normal . (useState)
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    //console.log("useeffect called")//second called
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(DATA_API);
    console.log("hello");
    const json = await data.json();
    const list =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(list);
    setListOfRestaurant(list);

    setFilteredRestaurant(list);
  };
  // if(ListOfRestaurants.length===0){
  //   return <Shimmer/>
  // }
  const onlineStatus = useOnlineStatus();
  //console.log(onlineStatus);
  if (onlineStatus === false)
    return (
      <h1>
        Looks like your in offline !! please check your internet connection
      </h1>
    );
  //console.log("body rendered"); //first called
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  //normal js variable
  // let ListOfRestaurants = [
  //   {
  //     data: {
  //       id: 1,
  //       img: "img1",
  //       name: " Kerala Food Center",
  //       cusine: "Biryani, North Indian , Asian ",
  //       rating: "3.8",
  //       costForTwo: 40000,
  //       time: 36,
  //     },
  //   },
  //   {
  //     data: {
  //       id: 341,
  //       img: "img1",
  //       name: " Kerala Food Center",
  //       cusine: "Biryani, North Indian , Asian ",
  //       rating: "4.6",
  //       costForTwo: 40000,
  //       time: 36,
  //     },
  //   },
  //   {
  //     data: {
  //       id: 145,
  //       img: "img1",
  //       name: " Kerala Food Center",
  //       cusine: "Biryani, North Indian , Asian ",
  //       rating: "4.8",
  //       costForTwo: 40000,
  //       time: 36,
  //     },
  //   }

  // ];
  // console.log(ListOfRestaurants);
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box p-2 border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
  
            className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              console.log("button clicked");
              //filter logic
              // ListOfRestaurants = resList.filter(
              //   (res) => res.data.rating > 4
              // );
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurant(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username :</label>
          <input
            className="border border-black rounded-lg p-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* restauarent card */}
        {/* {ListOfRestaurants.map((restaurant) => ( */}
        {filteredRestaurant.map((restaurant) => (
          //   // if the restaurant is promoted then add a promoted label to it
          //   restaurant.data.promoted ? (
          //     <RestaurantCardPromoted resData={restaurant} />
          //   ) : (
          //     <RestaurantCard key={restaurant.id} resData={restaurant} />
          //   )

          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
