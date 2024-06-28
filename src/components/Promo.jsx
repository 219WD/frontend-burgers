import React, { useEffect, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Promo.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Promo = () => {
    const imgContainer = useRef(null);
    const imgPromo = useRef(null);
    const txtPromo = useRef(null);
    
    // useEffect(() => {
    //     gsap.fromTo(imgContainer.current, { opacity: 0, x: -500 }, {
    //         opacity: 1,
    //         x: 0,
    //         scrollTrigger: {
    //             trigger: imgContainer.current,
    //             start: "top bottom",
    //             end: "top center",
    //             scrub: 1.9
    //         }
    //     });
        
        
    //     gsap.fromTo(imgPromo.current, { opacity: 0, x: -500 }, {
    //         opacity: 1,
    //         x: 0,
    //         delay: 1,
    //         scrollTrigger: {
    //             trigger: imgPromo.current,
    //             start: "top bottom",
    //             end: "top center",
    //             scrub: 2
    //         }
    //     });
        
    //     gsap.fromTo(txtPromo.current, { opacity: 0, x: 500 }, {
    //         opacity: 1,
    //         x: 0,
    //         scrollTrigger: {
    //             trigger: txtPromo.current,
    //             start: "top bottom",
    //             end: "top center",
    //             scrub: 1.9
    //         }
    //     });
    // }, [])

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            gsap.fromTo(imgContainer.current, { opacity: 0, y: 100 }, {
                opacity: 1,
                y: 0,
                delay: 1,
                scrollTrigger: {
                    trigger: imgContainer.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 2
                }
            });

            gsap.fromTo(txtPromo.current, { opacity: 0, y: -150 }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: txtPromo.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.9
                }
            });
        } else {
            gsap.fromTo(imgContainer.current, { opacity: 0, x: -500 }, {
                opacity: 1,
                x: 0,
                delay: 1,
                scrollTrigger: {
                    trigger: imgContainer.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 2
                }
            });

            gsap.fromTo(txtPromo.current, { opacity: 0, x: 500 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: txtPromo.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.9
                }
            });
        }
    }, []);
    

    return (
        <div className='container-promo'>
            <div className="promo">
                <div className="img-promo" ref={imgContainer}>
                    <img src='https://i.imgur.com/Q09itKb.png' alt="" ref={imgPromo} />
                </div>
                <div className="txt-promo" ref={txtPromo}>
                    <h1 className="title-promo">Super <span>promo</span></h1>
                    <p className='p-promo'>El combo perfecto, hamburguesa, papas y gaseosa. Llega a tu casa y a comer!!</p>
                    <h2 className="subtitle-promo">Combo deluxe</h2>
                    <button><FontAwesomeIcon icon={faShoppingCart} /> Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Promo