import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating(directly modifying) the state here 
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
         //original state =["pizza"]
        clearCart:(state)=>{
// console.log(state)//["pizza"]
// console.log(current(state));
// state=[];
// console.log(state);//[]
           
            //state.items.length=0 //===== return {items:[]};
            return {items:[]};
        }
    }
})
export const  {addItem, removeItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;