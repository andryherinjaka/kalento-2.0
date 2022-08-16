import React from 'react'
import './header.css';
import Hero from '../../images/header/header.jpg';
import Logo from '../../images/header/logo.png';
import Cart from '../../images/photo/panier.png';

const navLink = [
    {
        display: 'Accueil',
        url: '#acceuil'
    },
    {
        display: 'Produits',
        url: '#produit'
    },
    {
        display: 'Menus',
        url: '#menu'
    },
    {
        display: 'Restaurants',
        url: '#restaurant'
    },
    
    {
        display: 'Contact',
        url: '#contact'
    },
    
]

function header() {
  return (
    <div>
        <section id="hero-area">
            <img src={Hero} alt='Hero' />
        </section> 
        <div className='header'>
          <div className='navigation'> 
            <div className="logo" style={{ width:'80px'}}>
              <img src={Logo} alt="Kalento" /> 
            </div>   
            <div className='nav__menu'>
                <ul className='nav__list'>
                    {navLink.map((item, index) => (
                    <li className='nav__item' key={index}>
                        <a href={item.url}>{item.display}</a>
                    </li>
                ))}
                </ul>
            </div>  
            <div className='panier'>
                <img src={Cart} alt='Cart' />
                <span>0</span>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default header
