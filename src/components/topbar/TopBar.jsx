import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import "./topbar.scss"
const TopBar = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Karan</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span><a href="tel:8532055221">8532055221</a>
</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span> <a href="mailto:joshikaran392@gmail.com">joshikaran392@gmail.com</a> </span>
                    </div>
                </div>
                <div className="right">
                    <div onClick={() => setMenuOpen(!menuOpen)} className="hamBurger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
