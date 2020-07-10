import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function navigation() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item' ><Link to='/'>Home</Link></li>
                <li className='nav__item' ><Link to='/about'>About</Link></li>
                <li className='nav__item' ><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </nav>
    )
}