import React from 'react';
import NavIcon from './NavIcon';

const Navbar = ({tabs, handleNavClick}) => {
    const navsList = tabs.map( tab => {
        return (
            <div className={tab.active ? "nav__item nav__item_active" : "nav__item"} 
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}>
                <NavIcon icon={tab.icon} />
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