import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map( todo => {
            console.log(todo.id);
            return (
                <div 
                    className="todo-item" 
                    key={todo.id}
                    onClick={ () => {deleteTodo(todo.id)} }
                    >
                    {todo.content}
                   
                        <span className="material-icons todo-icon">
                            delete 
                        </span>
                   
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todo for today</p>
    )
    return (
        <div className="todos ">
             {todoList}
        </div>
    )
};

export default Todos