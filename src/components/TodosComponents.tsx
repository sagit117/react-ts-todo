import React, { useState } from "react";

import TodoList from "./TodoList";
import TodoInput, { ITodo } from "./TodoInput";
import CompletedList from './CompletedList'

function TodosComponents() {
    /** Управление записями */
    const [ items, setItems ] = useState<Array<ITodo>>(getItems())

    function getItems(): ITodo[] { // загрузка записей
        const items: string = localStorage.getItem('items') || ''

        if (items.trim()) return JSON.parse(items)
        return []
    }

    function addTodos(value: ITodo) { // добавление новой записи
        if (!value.title) return

        saveTodo([...items, value])
    }

    function removeTodo(index: number) { // удаление записи
        const newItems = items
        newItems.splice(index, 1)

        saveTodo([...newItems])
    }

    function saveTodo(todos: ITodo[]) { // сохранение списка записей
        setItems(todos)
        localStorage.setItem('items', JSON.stringify(todos))
    }

    function setStatusTodo(index: number) { // изменить статус записи
        const newItems = items
        newItems[index].complete = !newItems[index].complete

        saveTodo([...newItems])
    }

    /** ==== */

    return (
        <div>
            <header>
                <TodoInput onInputTodo={ addTodos } />
            </header>
            <TodoList
                todos={ items }
                onRemoveTodo={ removeTodo }
                setStatusTodo={ setStatusTodo }
            />
            <CompletedList
                todos={ items }
                onRemoveTodo={ removeTodo }
                setStatusTodo={ setStatusTodo }
            />
        </div>
    )
}

export default TodosComponents
