import './Footer.css';

import Carousel from 'react-img-carousel';
require('react-img-carousel/lib/carousel.css');

export default function Footer() {
  return (
    <div className='subsection' id='slideshowContainer'>
      <Carousel autoplay='true' autoplaySpeed='3500' viewport='300px' slideHeight='300px' cellPadding={ 5 }>
        <img
          className='carouselPic'
          alt='Claire and a friend a sunset'
          src='https://drive.google.com/uc?id=1WTXbwEpA-G2ADZPQGJBCEc7U3Qf6wH7A'
        />
        <img
          className='carouselPic'
          alt='Claire with Purdue Medical Innovation, Networking, and Design (Spring 2021)'
          src='https://drive.google.com/uc?id=18QUarIwus-hN09KRTbeM8VouaEmJmqsu'
        />
        <img
          className='carouselPic'
          alt='Claire on a hike'
          src='https://drive.google.com/uc?id=1bi3BE3V2iobbWGK8_wEDuV6TeLXjiTSc'
        />
        <img
          className='carouselPic'
          alt="Claire volunteering at the Fall 2021 Spark Challenge"
          src='https://drive.google.com/uc?id=1Rj0pa7BIQfDuXtPXuw2gsxdnqI0wjSi1'
        />
        <img
          className='carouselPic'
          alt='Claire and her sister half way through a 5 mile hike'
          src='https://drive.google.com/uc?id=1vg_p2EasJ-WM9GPM4vR4-oizlf09musI'
        />
        <img
          className='carouselPic'
          alt='An exhibit from the Chicago 2021 Botanic Gardens light show'
          src='https://drive.google.com/uc?id=1Syy-mGDD_88kMYujNBrZXY51xtbZIioA'
        />
        <img
          className='carouselPic'
          alt='Claire volunteering with friends to rake leaves'
          src='https://drive.google.com/uc?id=1oQTTHtTktxZmh98uDrCaUMfkj-wNJ0E_'
        />
        <img
          className='carouselPic'
          alt='Claire at her remote Google internship'
          src='https://drive.google.com/uc?id=16vyjb4MAx8IkPovk3TyGbkDJU8rUeA0-'
        />
        <img
          className='carouselPic'
          alt='Claire with her family at a Purdue football game'
          src='https://drive.google.com/uc?id=1EZP2UgwSvYeeWpB9BEhVSgSAAy6rgtg9'
        />
      </Carousel>

      <h5 id='footer'>Copyright © {new Date().getFullYear()} Claire Poukey. All Rights Reserved</h5>
    </div>
  );
}
