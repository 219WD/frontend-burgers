import React, { useEffect, useRef } from 'react';
import BurgerDesarmada from '../assets/burger-desarmada.png';
import '../css/NuestrasBurger.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NuestrasBurger = () => {
    const imgNb = useRef(null);
    const txtNb = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            gsap.fromTo(imgNb.current, { opacity: 0, y: 100 }, {
                opacity: 1,
                y: 0,
                delay: 1,
                scrollTrigger: {
                    trigger: imgNb.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 2
                }
            });

            gsap.fromTo(txtNb.current, { opacity: 0, y: -150 }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: txtNb.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.9
                }
            });
        } else {
            gsap.fromTo(imgNb.current, { opacity: 0, x: -500 }, {
                opacity: 1,
                x: 0,
                delay: 1,
                scrollTrigger: {
                    trigger: imgNb.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 2
                }
            });

            gsap.fromTo(txtNb.current, { opacity: 0, x: 500 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: txtNb.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.9
                }
            });
        }
    }, []);

    return (
        <div className='container-nuestrasBurger'>
            <div className="txt-nuestrasBurger" ref={txtNb}>
                <h2 className='title'>¿Por qué elegir nuestras burger?</h2>
                <p>Usamos los mejores ingredientes para que nuestras hamburguesas lleguen a tu mesa con una calidad premium. Nuestra carne es una mezcla de cortes premium, el mejor y mas cremoso queso cheddar, verduras frescas de nuestra huerta y una mezcla de aderezos y especias del mundo para nuestras salsas.</p>
            </div>
            <div className="img-nB-container" ref={imgNb}>
                <img src={BurgerDesarmada} alt="" className='img-nB' />
            </div>
        </div>
    );
};

export default NuestrasBurger;
