import React, { useEffect, useRef } from 'react';
import '../css/Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import BurgerIcon from '../assets/burgerIcon.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    const cardsRef = useRef([]);
    const iconRef = useRef(null);
    const titleRef = useRef(null);

    const burgersCards = [
        {
            burguerImg: 'https://i.imgur.com/1dp7XQB.png',
            burguerName: "Pulled Pork",
            burguerDescription: "Hamburguesa de bondiola de cerdo desmenuzada, queso cheddar milkaut, panceta ahumada y nuestra salsa bbq.",
            burguerPrice: "$8000"
        },
        {
            burguerImg: 'https://i.imgur.com/JftOGbD.png',
            burguerName: "Patty Melt",
            burguerDescription: "Delicioso Patty Melt en pan de molde, queso cheddar milkaut y salsa Melt.",
            burguerPrice: "$7500"
        },
        {
            burguerImg: 'https://i.imgur.com/nP4kfsT.png',
            burguerName: "Mozzarella",
            burguerDescription: "Sabrosa hamburguesa doble con queso cheddar milkaut, panceta ahumada y bastones de mozzarella.",
            burguerPrice: "$8500"
        },
        {
            burguerImg: 'https://i.imgur.com/dbecDlg.png',
            burguerName: "Hot Guacamole",
            burguerDescription: "Deliciosa hamburguesa doble con guacamole, cebolla, lechuga, tomate y salsa de jalapeños encurtidos.",
            burguerPrice: "$9000"
        },
        {
            burguerImg: 'https://i.imgur.com/ep65MeM.png',
            burguerName: "Cuadruple",
            burguerDescription: "La pesadilla del cardiologo, hambueguesa cuadruple, queso cheddar milkaut y panceta ahumada. ",
            burguerPrice: "$12500"
        },
        {
            burguerImg: 'https://i.imgur.com/EAJ1As4.png',
            burguerName: "Americana",
            burguerDescription: "Clasica hamburguesa doble carne, doble cheddar milkaut, panceta ahumada y salsa bbq.",
            burguerPrice: "$7000"
        }
    ];

    useEffect(() => {
        gsap.fromTo(iconRef.current, { rotation: 0 }, {
            rotation: 720,
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.9
            }
        });

        gsap.fromTo(titleRef.current, { opacity: 0, y: 20 }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top bottom",
                end: "top center",
                scrub: 1.9
            }
        });

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "top center",
                    scrub: true
                }
            });
        });
    }, []);

    const handleHover = (index, enter) => {
        gsap.to(cardsRef.current[index].querySelector('.burguerPrice'), { opacity: enter ? 0 : 1, duration: 0.1 });
        gsap.to(cardsRef.current[index].querySelector('.agregarCarrito'), { display: enter ? 'flex' : 'none', opacity: enter ? 1 : 0, duration: 0.1 });
    };

    return (
        <div className='container-cards'>
            <img src={BurgerIcon} alt="Burger Icon" className='burguerIcon' ref={iconRef} />
            <h1 className='title' ref={titleRef}>Explorá <span>Nuestro Menú</span></h1>
            <div className="cards">
                {burgersCards.map((burger, index) => (
                    <div className="card" 
                        key={index} 
                        ref={el => cardsRef.current[index] = el}
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    >
                        <img src={burger.burguerImg} alt={burger.burguerName} className='burguerImg' />
                        <h2 className='burguerName'>{burger.burguerName}</h2>
                        <p className='burguerDescription'>{burger.burguerDescription}</p>
                        <h2 className='burguerPrice'>{burger.burguerPrice}</h2>
                        <button className='agregarCarrito'>
                            <FontAwesomeIcon icon={faShoppingCart} /> Agregar al Carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
