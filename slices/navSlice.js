import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    origin:null,
    destination:null,
    travelTimeInformation:null
}
export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin:(state, action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination = action.payload;
        },
        setTraveltimeInformation:(state,action)=>{
            state.travelTimeInformation= action.payload;
        }
    }
})
export const{setOrigin, setDestination, setTraveltimeInformation}=navSlice.actions;
//selector
export const selectOrigin =(state)=>state.nav.origin;
export const  selectDestination =(state)=>state.nav.destination;
export const  selectTraveltimeInformation=(state)=>state.nav.travelTimeInformation;


export default navSlice.reducer;