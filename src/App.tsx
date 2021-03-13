import React, { useState } from 'react';
import './App.scss';

import TodoList from "./components/TodoList";
import TodoInput, { ITodo } from "./components/TodoInput";
import CompletedList from './components/CompletedList'

function App() {
    const [ items, setItems ] = useState<Array<ITodo>>(getItems())

    function getItems(): ITodo[] {
        const items: string = localStorage.getItem('items') || ''

        if (items.trim()) return JSON.parse(items)
        return []
    }

    function addTodos(value: ITodo) {
        if (!value.title) return

        saveTodo([...items, value])
    }

    function removeTodo(index: number) {
        const newItems = items
        newItems.splice(index, 1)

        saveTodo([...newItems])
    }

    function saveTodo(todos: ITodo[]) {
        setItems(todos)
        localStorage.setItem('items', JSON.stringify(todos))
    }

    function setStatusTodo(index: number) {
        const newItems = items
        newItems[index].complete = !newItems[index].complete

        saveTodo([...newItems])
    }

    return (
        <div className="App">
            <TodoInput onInputTodo={ addTodos } />
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
    );
}

export default App;
