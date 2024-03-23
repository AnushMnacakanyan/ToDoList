import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  ToDoList } from "../pages/ToDo";
import { MyError } from "../pages/MyError";

export const MyRouter=React.memo(()=>{
    return(<div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ToDoList></ToDoList>} />
            <Route path="*" element={<MyError></MyError>} />
        </Routes>
        </BrowserRouter>

    </div>)})