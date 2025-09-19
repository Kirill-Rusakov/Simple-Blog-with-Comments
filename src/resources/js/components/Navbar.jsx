import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">Мой Блог</Link>
                
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-link">Статьи</Link>
                    <Link to="/add-article" className="nav-link">Добавить статью</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar