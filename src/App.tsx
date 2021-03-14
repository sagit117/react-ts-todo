import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavComponent from './components/NavComponent'

import routes from './routes/routes'

import './style/App.scss'

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <NavComponent />
                </nav>

                <Suspense fallback={ <div>Загрузка...</div> }>
                    <Switch>
                        { routes.map((route, index) => (
                            <Route
                                key={ index }
                                path={ route.path }
                                exact={ route.exact }
                                component={ route.component }
                            />
                        ))}
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
