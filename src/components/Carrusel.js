import React from 'react';
import { Carousel } from 'react-bootstrap';
import morenada from '../Imagenes/morenada.jpg';
import caporal from '../Imagenes/caporal.jpg';
import diablada from '../Imagenes/diablada.jpg';
import saya from '../Imagenes/saya.jpg';
import tinku from '../Imagenes/tinku.jpg';
const Carrusel = () => {
  return (
    <Carousel>
      {/* Contenido de tu Carrusel */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={morenada}
          alt="Primer slide"
        />
       
      </Carousel.Item>
      {/* Otros slides */}



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caporal}
          alt="Primer slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={diablada}
          alt="Primer slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={saya}
          alt="Primer slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tinku}
          alt="Primer slide"
        />
      </Carousel.Item>


    </Carousel>
  );
};

export default Carrusel;
