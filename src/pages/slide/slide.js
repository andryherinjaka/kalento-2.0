import React from 'react'
import './slide.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/autoplay';
import Slide1 from '../../images/slider/slider-img-1.jpg';
import Slide2 from '../../images/slider/slider-img-2.jpg';
import Slide3 from '../../images/slider/slider-img-3.jpg';
import Slide4 from '../../images/slider/slider-img-4.jpg';


const slide = () => {
    const client = [
      {
        img: Slide1,
        title: " Produit 100% bio",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&& ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      },
      {
        img: Slide2,
        title: " Produit 100% bio",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&& ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      },
      {
        img: Slide3,
        title: " Produit 100% bio",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&& ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      }, 
      {
        img: Slide4,
        title: " Produit 100% bio",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&& ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      },
    ];

  return (
    <div className='produit' id='produit'>
      
      <div className="containerSlide" >
        <Swiper  
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={2}
          // navigation
          autoplay={{ deplay: 1000}}
          // pagination={{ clickable: true }}
          style={{ marginLeft:'60px'}}
        >
          {client.map((client, index) => {
            return (
              <SwiperSlide key={index} style={{ display: 'flex' }} >
                <img src={client.img} alt="img" /> 
                <div>
                  <span>{client.title}</span>
                  <p>{client.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>  
      
    </div>
  );
};

export default slide;
