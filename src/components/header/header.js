import React from "react";
import './header.scss'
import logo from '../../img/logo1.svg'

const Header = function(){
    return(
        <header className="header-mini">
            <img src={logo} alt="logo" />
            <div className="border-left">
            МНОГОФУНКЦИОНАЛЬНЫЙ ЦЕНТР<br /> 
            ПРЕДОСТАВЛЕНИЯ ГОСУДАРСТВЕННЫХ И<br /> 
            МУНИЦИПАЛЬНЫХ УСЛУГ УДМУРСТКОЙ<br /> РЕСПУБЛИКИ
            </div>
        </header>
    )
}

export default Header;