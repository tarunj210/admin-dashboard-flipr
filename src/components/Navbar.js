import React, { useState, useContext } from 'react';
import * as FaIcons from "react-icons/fa";
import { SketchPicker } from 'react-color';
import { AppBar, Toolbar } from '@material-ui/core';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import fire from 'firebase/app';
import 'firebase/auth';
import { theme } from "../Theme";
import * as FiIcons from 'react-icons/fi';
import { ThemeContext } from "../Provider";
import ThemeSwitch from "../ThemeSwitch";
import { HiSupport } from "react-icons/hi";
const getStyles = (mode) => ({
    app: {
        height: "100%",
        width: "100%",
        backgroundColor: theme[mode].backgroundColor
    },
    theme: {
        color: theme[mode].highlight
    },
    fiIcon: {
        position: 'relative',
        float: 'right',
        top: 0,
        right: 0,
        padding: '10px',
        fontSize: '25px'
    },
    settings: {
        float: 'right',


    }
});
function Navbar() {
    const [color, setColor] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isRtl, setIsRtl] = useState(false);
    const buttonSelected = selectedButton => ev => {
        setSelectedButton(selectedButton);
    }
    const handleLogout = () => {
        fire.auth().signOut();

    }

    const handleRtl = () => {
        setIsRtl(!isRtl);
    }
    const { mode } = useContext(ThemeContext);
    const styles = getStyles(mode);
    const [colorHexCode, setColorHexCode] = useState('#a020f0');

    return (
        <>

            <IconContext.Provider value={{ color: '#fff' }} >

                <div dir={isRtl ? 'rtl' : ''} style={styles.app}>
                    <AppBar position="static">
                        <Toolbar style={{ backgroundColor: colorHexCode, position: 'relative', display: 'inline' }}>
                            <div style={styles.fiIcon}>
                                <FiIcons.FiUser style={{ marginRight: '15px' }} />
                                <FiIcons.FiMail style={{ marginRight: '15px' }} />
                                <FiIcons.FiFacebook />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <nav className='nav-menu' style={{ backgroundColor: colorHexCode }}>

                        <ul className="nav-menu-items">
                            <Link to="#" className="menu-bars">
                                <ThemeSwitch />
                            </Link>



                            {SidebarData.map((item, key) => {
                                return (
                                    <div className={item.cName}>
                                        <li key={key} onClick={buttonSelected(key)} className={key === selectedButton ? 'selected' : ''}>
                                            <Link to={item.path} >
                                                {item.icon}
                                                <span >{item.title}</span>
                                            </Link>
                                        </li>
                                    </div>
                                )
                            })}
                            <div className='nav-text'>
                                <li key='8' className='nav-text' style={{ cursor: 'pointer', color: 'white' }}>
                                    <HiSupport />
                                    <span onClick={handleRtl}>RTL Support</span>
                                </li>
                            </div>
                            <div className='nav-text'>
                                <li key='8' className='nav-text' style={{ cursor: 'pointer', color: 'white' }}>
                                    <FaIcons.FaRunning />
                                    <span onClick={handleLogout}>Logout</span>
                                </li>
                            </div>
                        </ul>

                    </nav>
                    <div style={styles.settings}>
                        <FiIcons.FiSettings color={colorHexCode} size='25px' onClick={() => setColor(!color)} />
                        <br />
                    </div>



                </div>

            </IconContext.Provider >
            <div className="color-picker">
                {color ? (<SketchPicker
                    color={colorHexCode}
                    onChange={e => setColorHexCode(e.hex)} />) : null}
            </div>
        </>
    )
}

export default Navbar;
