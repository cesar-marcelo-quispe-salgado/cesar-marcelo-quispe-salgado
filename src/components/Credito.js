import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Credito = () => {
  return (
    <Container>
    <Row>
      <Col>
        <Card className="mt-5">
          <Card.Body>
            <Card.Title className="text-center">
              <h1 className="font-weight-bold">Agradecimientos y Créditos</h1>
            </Card.Title>
            <Card.Text>
              <p>
              La danza tiene validez pedagógica ya que puede ser un factor de conocimiento cultural. Además, puede ser un factor de educación intercultural favoreciendo el conocimiento y la aceptación y tolerancia de la realidad pluricultural de la sociedad actua
              </p>
              <p>
                Desarrollado por{' '}
                <span className="font-weight-bold text-success">Cesar Marcelo Quispe Salgado</span>.
              </p>
              {/* Agrega más contenido según sea necesario */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default Credito;