import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">Yeison</div>
            <div className="menu-icon" onClick={() => setIsNavExpanded(!isNavExpanded)}>
            {isNavExpanded ? <FaTimes size={28} /> : <><FaBars size={28} /><span>Menú</span></>}
            </div>
            <div className="navbar-links">
                <button className="nav-button">Solicitar mi crédito</button>
                <a href="registro" className="nav-item">Regístrate</a>
                <a href="login" className="nav-item">Inicia Sesión</a>
                <a href="about" className="nav-item">Acerca de</a>
                <a href="contact" className="nav-item">Contacto</a>
            </div>
            {isNavExpanded && (
                <div className="navbar-links-expanded">
                    <a href="credito" className="nav-item-expanded">Pedir mi crédito ya</a>
                    <a href="requisitos" className="nav-item-expanded">Requisitos</a>
                    <a href="registro" className="nav-item-expanded">Registrarme</a>
                    <a href="pago" className="nav-item-expanded">¿Cómo pagar?</a>
                    <a href="costo" className="nav-item-expanded">¿Cuánto cuesta?</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
