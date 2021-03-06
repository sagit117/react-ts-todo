import React from 'react';

import TodoItem from "./TodoItem";
import { ITodo } from "./TodoInput";

interface IProps {
    todos: ITodo[]
    onRemoveTodo: (index: number) => void
    setStatusTodo: (index: number) => void
}

function TodoList(props: IProps) {
     const renderTodos = props.todos.map(function(todo, idx) {
         const remove = () => props.onRemoveTodo(idx)
         const setStatus = () => props.setStatusTodo(idx)

         if (!todo.complete) {
             return (
                 <TodoItem
                     todo={ todo }
                     key={ idx }
                     onRemoveTodo={ remove }
                     setStatus={ setStatus }
                 />
             )
         } else {
            return ''
         }
     })

    return (
        <main>
            <div className="todo-list">
                <h3>Список дел</h3>
                {renderTodos}
            </div>
        </main>
    )
}

export default TodoList
