import RestaurantCategory from "./RestaurantCategory";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //this is custom hook

  const [showIndex, setShowIndex]= useState(null)
  //console.log(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_URL+resId
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  // };

  if (resInfo == null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards
  // );
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories)
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 py-3 text-3xl">{name}</h1>
      <h3 className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {/* //image  */}
      {/* <h2>Menu</h2> */}
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}
        {/* <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      </ul>

      {/* {Categories accordions} */}
      {categories.map((category, index) => (

        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index ==showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
      {/* <RestaurantCategory/> */}
    </div>
  );
};

export default RestaurantMenu;
