import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="assets/img/netflix_logo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="assets/img/usuario.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}