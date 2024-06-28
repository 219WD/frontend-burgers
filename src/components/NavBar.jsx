import React, { useEffect, useRef, useState } from 'react';
import '../css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cruz from '../assets/cruz.png';
import gsap from 'gsap';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const tl = useRef(null);
    useEffect(() => {
        gsap.set(".logo, .menu-icon, .carritoIcon", { scale: 0, opacity: 0 });
        tl.current = gsap.timeline({ paused: true })
            .to(".logo, .menu-icon, .carritoIcon", {
                opacity: 1,
                scale: 1,
                delay: 1,
                duration: 1,
                stagger: 0.5,
                ease: "power4.inOut",
            });

        tl.current.play();
    }, []);


    const handleMenuOpen = () => {
        gsap.to('.nav-links', { right: 0, duration: 0.8, ease: 'power4.inOut' });
        gsap.to('nav', { zIndex: 2 });
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        gsap.to('.nav-links', { right: '-100%', duration: 0.8, ease: 'power4.inOut' });
        gsap.to('nav', { zIndex: 1 });
        setMenuOpen(false);
    };

    return (
        <div className="nav-container">
            <img src='https://i.imgur.com/DKkGUgU.png' alt="" className='logo' />
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className='carritoIcon' />
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <div className="close">
                    <button onClick={handleMenuClose}><img src={Cruz} alt="Close" className='cruz' /></button>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="menu-icon" onClick={handleMenuOpen}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
