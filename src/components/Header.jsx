import React, { useEffect, useRef, useState } from 'react';
import '../css/Header.css';
import Arrow from '../assets/arrow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const Header = () => {
    const [currentBurger, setCurrentBurger] = useState(0);

    const burgers = [
        {
            name: "Pulled Pork",
            description: "Hamburguesa de bondiola de cerdo desmenuzada, queso cheddar milkaut, panceta ahumada y nuestra salsa barbacoa.",
            image: 'https://i.imgur.com/1dp7XQB.png'
        },
        {
            name: "Patty Melt",
            description: "Delicioso Patty Melt en pan de molde, queso cheddar milkaut y salsa Melt.",
            image: 'https://i.imgur.com/JftOGbD.png'
        },
        {
            name: "Mozzarella",
            description: "Sabrosa hamburguesa doble con queso cheddar milkaut, panceta ahumada y bastones de mozzarella.",
            image: 'https://i.imgur.com/nP4kfsT.png'
        }
    ];

    const tl = useRef(null);
    useEffect(() => {
        gsap.set(".slider, .slider img", { y: -500, opacity: 0 });
        tl.current = gsap.timeline({ paused: true })
            .to(".slider, .slider img", {
                opacity: 1,
                y: -35,
                delay: 1,
                duration: 1,
                stagger: 0.5,
                ease: "power4.inOut",
            });

        tl.current.play();

        gsap.set(".txt", { y: -500, opacity: 0 });
        tl.current = gsap.timeline({ paused: true })
            .to(".txt", {
                opacity: 1,
                y: -35,
                delay: 2,
                duration: 1,
                stagger: 0.5,
                ease: "power4.inOut",
            });

        tl.current.play();

        gsap.set(".buttons", { y: 50, opacity: 0 });
        tl.current = gsap.timeline({ paused: true })
            .to(".buttons", {
                opacity: 1,
                y: 0,
                delay: 2,
                duration: 1,
                stagger: 0.5,
                ease: "power4.inOut",
            });

        tl.current.play();
    }, []);

    const changeBurger = (indexChange) => {
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentBurger((prev) => {
                    const nextIndex = (prev + indexChange + burgers.length) % burgers.length;
                    gsap.set('.slider img', { x: indexChange * 30, opacity: 0 });
                    gsap.set('.txt h1, .txt p, .txt h2, .txt button', { x: indexChange * 30, opacity: 0 });
                    gsap.to('.slider img', { x: 0, opacity: 1, duration: 0.5 });
                    gsap.to('.txt h1, .txt p, .txt h2, .txt button', { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 });
                    return nextIndex;
                });
            }
        });

        tl.to('.txt h1, .txt p, .txt h2, .txt button', { x: indexChange * -30, opacity: 0, duration: 0.5, stagger: 0.1 })
            .to('.slider img', { x: indexChange * -30, opacity: 0, duration: 0.5 }, '-=0.4');
    };

    const nextBurger = () => changeBurger(1);
    const prevBurger = () => changeBurger(-1);

    return (
        <div className='container'>
            <div className="txt">
                <h2>Llegó la nueva <span>Burguer</span></h2>
                <p>{burgers[currentBurger].description}</p>
                <h1>{burgers[currentBurger].name}</h1>
                <button><FontAwesomeIcon icon={faShoppingCart} /> Agregar al Carrito</button>
            </div>
            <div className="slider">
                <img src={burgers[currentBurger].image} alt={burgers[currentBurger].name} />
            </div>
            <div className="buttons">
                <button className='prev' onClick={prevBurger}><img src={Arrow} alt="Previous" className='arrow' /></button>
                <button className='next' onClick={nextBurger}><img src={Arrow} alt="Next" className='arrow right' /></button>
            </div>
        </div>
    );
};

export default Header;
