import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavComponent() {
    return (
        <div className="nav">
            <Router>
                <Link key="home" to="/home">Home</Link>
                <Link key="todos" to="/todos">Todos List</Link>
            </Router>
        </div>
    )
}

export default NavComponent
