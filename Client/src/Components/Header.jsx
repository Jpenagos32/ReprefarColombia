import { InputGroup, Form, Button, Container, Col, Row } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Header = () => {
  return (
    <>
      <header className="container-fluid p-2 bg-primary">
        <Container>
          <Row >
            <Col>
              <Link to='/'>
                <img src="Images/LogoReprefarLargo.png" alt="Logo Reprefar" width='200px' />
              </Link>
            </Col>

            <Col md="auto">
              <InputGroup style={{ maxWidth: 870, minWidth: 300 }} className="mt-2">
                <Form.Control
                  placeholder="Buscar Producto"
                  aria-label="Buscar Producto"
                  aria-describedby="basic-addon2"
                />
                <Button variant="secondary" id="button-addon2">
                  Buscar
                </Button>
              </InputGroup>
            </Col>

            <Col xs lg="2">
              <Button variant="outline-light" className="mt-2"><FaCartShopping /> Ir al Carrito</Button>
            </Col>
            <Col xs lg="1">
              <Button href="https://web.facebook.com/" className="mt-2" target="_blank"><FaFacebookSquare /></Button>
              <Button href="https://www.instagram.com/" className="mt-2" target="_blank"><IoLogoInstagram /></Button>
            </Col>

          </Row>
        </Container>
      </header>
    </>

  )
}
export { Header };