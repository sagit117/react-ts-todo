import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
    return (
        <div className="nav">
            <Link key="home" to="/home">Home</Link>
            <Link key="todos" to="/todos">Todos List</Link>
        </div>
    )
}

export default NavComponent
