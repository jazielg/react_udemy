import React from 'react';

import './Logo.css'
import BurgerLogo from '../../assets/images/burger-logo.png'

const logo = () => (
    <div className="Logo">
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);


export default logo