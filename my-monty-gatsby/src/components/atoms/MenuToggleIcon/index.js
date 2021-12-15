import React, { useState } from 'react'

import './index.scss'
const MenuToggleIcon = () => {
    const [state, setState] = useState({
        open: false
    });

    const handleClick = (event) => {
        setState({
            ...state,
            open: !state.open
        });
    }

    return (
        <div className={`menu-toggle-icon ${state.open ? ' toggle ' : ''}`} onClick={handleClick}>
            <div className="menu-toggle-icon__line1"></div>
            <div className="menu-toggle-icon__line2"></div>
            <div className="menu-toggle-icon__line3"></div>
        </div>
    )
}

export default MenuToggleIcon;