import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style/App.scss';

import NavComponent from './components/NavComponent'

const TodosComponent = lazy(() => import('./components/TodosComponents'))
const TheHome = lazy(() => import('./components/TheHome'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <NavComponent />
                </nav>

                <Suspense fallback={ <div>Загрузка...</div> }>
                    <Switch>
                        <Route exact path="/todos" component={ TodosComponent } />
                        <Route exact path="/home" component={ TheHome } />
                        <Route path="*" component={ NotFound } />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
