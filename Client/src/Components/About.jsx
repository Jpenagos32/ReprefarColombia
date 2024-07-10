import { Col, Container, Row } from "react-bootstrap";
import { Brands } from "./Brands";

const About = () => {
  return (
    <>
      <div className="container-fluid mt-5 text-center w-100 mb-5">
        <h2 className="text-primary">¿Quien es Reprefar Colombia?</h2>
        <p className="text-center">
          Somos una empresa comprometida con la representación de compañías, productos y marcas en el sector de la salud,contribuyendo al crecimiento y consolidación tanto en el ámbito medico como en el de las droguerías.
        </p>
      </div>
        <hr />
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="text-center">
            <h3 className="text-primary ">Misión</h3>
            <p className="text-justify">
              Nos especializamos en la representación y comercialización de productos farmacéuticos,con el objetivo de mejorar la salud y bienestar de la comunidad, proporcionando soluciones que elevan la calidad de vida
            </p>
          </Col>

          <Col className="text-center">
            <h3 className="text-center text-primary">Visión</h3>
            <p>
            Ambicionamos ser reconocidos como empresa líder en el sur occidente colombiano para el año 2030.Nos destacaremos por nuestra excelencia en la representación de empresas, productos y marcas emergentes en el mercado,consolidándonos como referentes en el sector
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <h2 className="text-center text-primary mt-5">Nuestras Marcas</h2>
        <p>
          En la actualidad Reprefar Colombia cuenta con marcas propias como:
        </p>
        <Brands/>
      </Container>

    </>
  )
}
export { About };