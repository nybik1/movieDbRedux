import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function navigation() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item' ><Link to='/'>Home</Link></li>
                <li className='nav__item' ><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}