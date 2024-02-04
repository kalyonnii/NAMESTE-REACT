

import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
//   console.log(items);

const dispatch= useDispatch()
const handleAddItem=(item)=>{
  //dispatch an action
  dispatch(addItem(item));
}


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex flex-unwrap justify-between gap-2 text-left"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div>
            <button className="p-2 mt-12 ml-9  bg-green-200 text-xs rounded-lg shadow-lg text-white-400-300 absolute" 
            onClick={()=>handleAddItem(item)}>
            
              Add➕
            </button>
            <img src={CDN_URL + item.card.info.imageId} className="w-28" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
