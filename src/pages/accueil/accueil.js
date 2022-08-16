import React from 'react'
import Header from '../header/header';
import Slide from '../slide/slide';
import Menu from '../menu/menu';
import Footer from '../footer/footer';
import Contact from '../contact/contact';

function accueil() {
  return (
    <div id='acceuil'>
        <Header />
        <Slide /> 
        <Menu /> 
        <Contact />
        <Footer /> 
    </div>
  )
}

export default accueil
