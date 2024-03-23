import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "./type";
import { set } from "react-hook-form";
import { RootState } from "../../app/store";

const initialState:{toDo:ToDo[]}={
    toDo:[
        {id:1,name:"Task1",description:"This is my task one",done:false},
        {id:2,name:"Task2",description:"This is my task two",done:false},
        {id:3,name:"Task3",description:"This is my task three",done:false},

    ]
}
export const toDoSlice=createSlice({
    name:"toDo",
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            state.toDo.push(action.payload)
        },
        deleteToDo:(state,action)=>{
            state.toDo=state.toDo.filter(elm=>elm.id!=action.payload)
        },
        changeDone:(state,action)=>{
            state.toDo.find(elm=>{
                if(elm.id==action.payload){
                    elm.done= !elm.done
                }
            })
        }

    }
})
export const {addToDo, deleteToDo, changeDone} = toDoSlice.actions
export const selectToDo = (state: RootState) => state.toDoList.toDo
export default toDoSlice.reducer