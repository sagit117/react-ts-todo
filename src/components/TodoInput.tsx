import React, { useState } from "react";

export interface ITodo {
    title: string
    complete: boolean
}

interface IProps {
    onInputTodo: (value: ITodo) => void
}

function TodoInput(props: IProps) {
    const [ todo, setTodo ] = useState<string>('')

    function saveTodo(value: string) {
        props.onInputTodo({ title: value, complete: false })
        setTodo('')
    }

    return (
        <div className="todo-input mt-4 p-2">
            <input
                type="text"
                className="mr-2 form-control form-control-lg"
                onChange={ event => setTodo(event.target.value) }
                value={ todo }
            />
            <button className="btn btn-primary" onClick={ () => saveTodo(todo) }>Добавить</button>
        </div>
    )
}

export default TodoInput
