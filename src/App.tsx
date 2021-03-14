import React from 'react';
import './style/App.scss';

import NavComponent from './components/NavComponent'
import TodosComponents from "./components/TodosComponents";

function App() {
    return (
        <div className="App">
            <nav>
                <NavComponent />
            </nav>
            
            <TodosComponents />
        </div>
    );
}

export default App;
