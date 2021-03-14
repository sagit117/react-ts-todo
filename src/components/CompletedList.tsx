import React, { useState } from "react";

import TodoItem from "./TodoItem";
import { ITodo } from "./TodoInput";

interface IProps {
    todos: ITodo[]
    onRemoveTodo: (index: number) => void
    setStatusTodo: (index: number) => void
}

function CompletedList(props: IProps) {
    const [ showList, setShowList ] = useState<boolean>(false)

    const renderTodos = props.todos.map(function(todo, idx) {
        const remove = () => props.onRemoveTodo(idx)
        const setStatus = () => props.setStatusTodo(idx)

        if (todo.complete) {
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

    function onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Spacebar' || event.key === ' ') {
            setShowList(!showList)
        }
    }

    return (
        <main>
            <div className="completed-list">
                <div className="completed-todo-title">
                    <h3>Выполненные</h3>
                    <div
                        className="btn"
                        onClick={ () => setShowList(!showList) }
                        onKeyPress={ onKeyPressHandler }
                        tabIndex={0}
                        role="button"
                        title={ showList ? 'Скрыть' : 'Показать' }
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className={ !showList ? 'hide' : '' }
                        >
                            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
                        </svg>
                    </div>
                </div>
                { showList && renderTodos }
            </div>
        </main>
    )
}

export default CompletedList
