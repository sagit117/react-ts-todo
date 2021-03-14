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

    function onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) {
        const { key } = (event as React.KeyboardEvent<HTMLInputElement>)
        const { target } = (event as React.ChangeEvent<HTMLInputElement>)

        if (key === 'Enter') {
            saveTodo(target.value)
        }
    }

    return (
        <div className="todo-input mt-4 p-2">
            <div className="input-group">
                <label htmlFor="todo" className="mr-2">Новое дело:</label>
                <input
                    type="text"
                    id="todo"
                    tabIndex={0}
                    className="mr-2 form-control form-control-lg"
                    onChange={ event => setTodo(event.target.value) }
                    onKeyPress={ onKeyPressHandler }
                    value={ todo }
                />
            </div>
            <button className="btn btn-primary" tabIndex={0} onClick={ () => saveTodo(todo) }>Добавить</button>
        </div>
    )
}

export default TodoInput
