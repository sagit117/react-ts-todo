import React, { useState } from 'react';

import { ITodo } from "./TodoInput";

interface IProps {
    todo: ITodo
    onRemoveTodo: () => void
    setStatus: () => void
}

function TodoItem(props: IProps) {
    const [ drag, setDrag ] = useState<boolean>(false)

    function dragHandler(v: boolean) {
        setDrag(v)
    }

    return (
        <div
            className={ `todo-item mt-4 rounded ${ drag ? 'drag' : '' }` }
            draggable="true"
            onDragStart={ () => dragHandler(true) }
            onDragEnd={ () => dragHandler(false) }
        >
            <span className={ props.todo.complete ? 'completed': 'no-completed' }>{ props.todo.title }</span>
            <div className="todo-item-action">
                <button
                    className="btn btn-outline-success mr-2"
                    onClick={ () => props.setStatus() }>
                    {props.todo.complete ? 'Выполнено': 'Не выполнено'}
                </button>
                <button
                    className="btn btn-danger"
                    onClick={ () => props.onRemoveTodo() }>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
