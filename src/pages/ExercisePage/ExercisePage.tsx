import ToDoItem from "../TodoItem/TodoItem"
// import React from "react"
import { getData } from "../Data/Data.tsx"
import InputBox from "../InputBox/InputBox.tsx"

export const ExercisePage = () => {
    const data = getData()
    const cards = data.map(item => {
        return (
            <ToDoItem 
                key={item.id}
                description={item.description}
            />
        )
    })
    return (
        <div className="main">
            <h1 style={{color: 'white', fontSize: '50px'}}>To-Do List</h1>
            <InputBox />
            {cards}
        </div>
    );
}