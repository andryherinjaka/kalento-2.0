import React from 'react';
import './menu.css';
import { PopularProduit} from '../data/produit';
import { PopularProduit2} from '../data/produit';
import Panier from '../../images/photo/panier_blanc.png'


function menu() {
  return (
    <div id='menu'>
        <div className='titre'>
            <p>Les produits <span>disponibles</span></p>
        </div>
        
        <div className='cart__produit'>
            {PopularProduit.map(item=>(
            <div className='cart__menu'>
                <img src={item.Url} alt='Img1' />
                <p>{item.title}</p>
                <div>
                    Prix : <span>{item.price}</span>
                </div>
                <span className='ajout'>
                    <img src={Panier} alt='Img1' />
                </span>
                   
            </div>
            )
            )}
        </div>
        <div className='cart__produit' style={{ marginTop:'350px'}}>
            {PopularProduit2.map(item=>(
            <div className='cart__menu'>
                <img src={item.Url} alt='Img1' />
                <p>{item.title}</p>
                <div>
                    Prix : <span>{item.price}</span>
                </div>
                <span className='ajout'>
                    <img src={Panier} alt='Img1' />
                </span>
            </div>
            )
            )}
        </div>
        <div>
            <button className='btn'>Suite...</button>
        </div>
    </div>
  )
}

export default menu
