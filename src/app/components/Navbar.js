import React from 'react';
import NavIconController from './NavIconController';

const Navbar = ({tabs, handleNavClick}) => {
    const navsList = tabs.map( tab => {
        return (
            <div className={tab.isActive ? "nav__item nav__item_active" : "nav__item"} 
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}>
                <NavIconController icon={tab.icon} />
            </div> 
        )
    })

    return (
        <nav className="nav">
            <div className="nav__container">
                {navsList}
            </div>
        </nav>
    )
}

export default Navbar;