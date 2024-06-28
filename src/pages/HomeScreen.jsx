import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Marquee from '../components/Marquee'
import Promo from '../components/Promo'
import NuestrasBurger from '../components/NuestrasBurger'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Marquee />
            <Cards />
            <NuestrasBurger />
            <Promo />
        </div>
    )
}

export default HomeScreen