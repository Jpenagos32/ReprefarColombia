import { InputGroup, Form, Button, Container, Col, Row } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SocialMediaIcons } from "./SocialMediaIcons";

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
            <Col xs lg="1" style={{display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
              <SocialMediaIcons/>
            </Col>

          </Row>
        </Container>
      </header>
    </>

  )
}
export { Header };