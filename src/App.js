
import './App.css';
import Carrusel from './components/Carrusel';
import Header from './components/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (

    
    <div className="App">

      < Header/> 
      <Container>
      <Row>
        <Col>
          {/* Contenido de la primera columna */}
          <div>
            <h2>Arte</h2>
            <Carrusel/>
            <p>Carrusel Imagenes</p>
          </div>
        </Col>
        <Col>
          {/* Contenido de la segunda columna */}
          <div>
            <h2>Importancia</h2>
            <p>La danza es un elemento muy importante dentro de la cultura boliviana existiendo festividades masivas y colectivas denominada entradas donde conjuntos y fraternidades ocupan espacios públicos para danzar, este fenómeno social solo ocurre en esa magnitud en Bolivia existiendo más de 1200 festividades dentro del país que se repiten anualmente donde se interpretan diversas danzas bolivianas, este fenómeno también tiene carácter internacional </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          {/* Otras partes de tu aplicación */}
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Abrir Video
          </Button>
          <VideoModal show={showModal} handleClose={handleCloseModal} />
        </Col>
      </Row>
    </Container>

    <Footer />
 

     

       

    </div>
    
  );
}

export default App;
