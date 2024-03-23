import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toDoSlice, { addToDo, changeDone, deleteToDo, selectToDo } from "../../features/ToDo/toDoSlice";
import { useForm } from "react-hook-form";
import { ToDo } from "../../features/ToDo/type";

export const ToDoList = React.memo(() => {
    const dispatch = useDispatch()
    const toDo = useSelector(selectToDo)
    const { register, reset, handleSubmit, formState: { errors } } = useForm<ToDo>()
    const save = (data: ToDo) => {
        dispatch(addToDo(data))
        reset()
    }

    return (<div className="todo">
        <div className="continer">

        <div className="todo_div1">
            <div className="div_h1">
                <h1 className="h1"> My ToDo</h1>

            </div>

            <div className="d1" >
                <div className="form_div">
                    <form onSubmit={handleSubmit(save)} className="form_todo">
                        <div className="div_inp">
                            <input type="text" placeholder="Name" {
                                ...register("name", {
                                    required: "Enter task name"
                                })
                            } />
                            {errors.name && <p>{errors.name.message}</p>}
                            <input type="text" placeholder="Description" {
                                ...register("description", {
                                    required: "Enter task description"
                                })
                            } />
                            {errors.description && <p>{errors.description.message}</p>}
                        </div>
                        <div>
                            <button>Add ToDo</button>
                        </div>

                    </form>
                </div>
                <div className="div2_todo">
                    {toDo.map(elm => {
                        return (<div key={elm?.id}  className="d2_todo">
                            <div >
                                <h2  className="h2" style={elm.done ? { textDecoration: 'line-through', color: "#363535" } : { textDecoration: 'none' }}>{elm.name}</h2>
                                <p style={elm.done ? { textDecoration: 'line-through', color: "#363535" } : { textDecoration: 'none' }}>{elm.description}</p>
                            </div>
                            <div className="div_btn">
                                <button className="btn1" onClick={() => dispatch(changeDone(elm.id))}>Complete</button>
                                <button className="btn2" onClick={() => dispatch(dispatch(deleteToDo(elm.id)))}>Delete</button>
                            </div>

                        </div>)
                    })}
                </div>
            </div>
        </div>
        </div>
    </div>)
})