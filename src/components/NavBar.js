import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className='container'>

            <header className='cabecera'>
                <Link to='/'><h1>Dev<span>Crash</span></h1></Link>
            </header>

            <nav>
                <ul className='nav'>

                    <Link to='/category/1'><li>Gadgets</li></Link>
                    <Link to='/category/2'><li>Computacion</li></Link>
                    <Link to='/category/3'><li>Productividad</li></Link>

                    <CartWidget />
                </ul>


            </nav>

        </div>
    )
}

export default NavBar;