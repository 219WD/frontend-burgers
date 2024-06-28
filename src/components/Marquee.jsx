import React, { useEffect, useRef } from 'react';
import StarIcon from '../assets/star.svg'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Marquee.css';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(marqueeRef.current, { opacity: 0, yPercent: 100 }, {
            opacity: 1,
            yPercent: 0,
            duration: 2,
            ease: "expo.out"
        });

        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header__marq',
                start: 'top bottom',
                end: 'bottom top', // Ajusta el 'end' según tus necesidades
                scrub: 1.9
            },
            xPercent: -50
        });

        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header__marq',
                start: 'top bottom',
                end: 'bottom top', // Ajusta el 'end' según tus necesidades
                scrub: 1.9
            },
            rotate: -720
        });
    }, []);

    return (
        <div className='header__marq' ref={marqueeRef}>
            <div className="header__marq-wrapp">
                {Array(4).fill().map((_, index) => (
                    <span className="header__marq-txt" key={index}>hamburguesas reales
                        <span className="header__marq-star">
                            <img src={StarIcon} alt="Star Icon" />
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
