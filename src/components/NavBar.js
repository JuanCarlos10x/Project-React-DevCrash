import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <div className='container'>

            <header className='cabecera'>
                <h1>Dev<span>Crash</span></h1>
            </header>

            <nav>
                <ul className='nav'>
                    <li><a href='./#'>Inicio</a></li>
                    <li><a href='./#'>Productos</a></li>
                    <li><a href='./#'>Sobre Nosotros</a></li>
                    <CartWidget />
                </ul>


            </nav>

        </div>
    )
}

export default NavBar 