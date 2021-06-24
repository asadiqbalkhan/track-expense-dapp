import React, {useState, useEffect} from 'react'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem} from './NarbarElements'

import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav, [])
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>
                        blockchain-tracker
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} >about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='track-expenses'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} >track expenses</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='benefits'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} >benefits</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
