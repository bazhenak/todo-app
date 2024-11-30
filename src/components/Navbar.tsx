import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/active-sprint">Активный спринт</Link>
                </li>
                <li>
                    <Link to="/admin">Панель администратора</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;