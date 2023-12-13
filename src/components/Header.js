import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Pagina1 from './Pagina1'; // Importa el componente Pagina1
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Pagina4 from './Pagina4';
import Pagina5 from './Pagina5';
import Pagina6 from './Pagina6';
import Pagina7 from './Pagina7';
import Credito from './Credito';
const Header = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Danzas Tipicas de Bolivia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="P1">Morenada</Nav.Link>
              {/* Redirige a la página Pagina1 */}
              <Nav.Link as={Link} to="P2">Caporal</Nav.Link>
              <Nav.Link as={Link} to="P3">Diablada</Nav.Link>
              <Nav.Link as={Link} to="P4">Saya</Nav.Link>
              <Nav.Link as={Link} to="P5">Danza de los Negritos o Tundiquis</Nav.Link>
              <Nav.Link as={Link} to="P6">Suri Sicuri</Nav.Link>
              <Nav.Link as={Link} to="P7">Danzas de los Incas</Nav.Link>
              <Nav.Link as={Link} to="PC">Credito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {/* Ruta para la página Pagina1 */}
        <Route path="P1" element={<Pagina1 />} />
        <Route path="P2" element={<Pagina2 />} />
        <Route path="P3" element={<Pagina3 />} />
        <Route path="P4" element={<Pagina4 />} />
        <Route path="P5" element={<Pagina5 />} />
        <Route path="P6" element={<Pagina6 />} />
        <Route path="P7" element={<Pagina7 />} />
        <Route path="PC" element={<Credito />} />
      </Routes>
    </Router>
  );
};

export default Header;