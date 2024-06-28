import { Carousel } from "react-bootstrap";
const Inicio = () => {
  return (
    <Carousel data-bs-theme="dark">

      <Carousel.Item className="w-100">
        <img
          src="Images/LogoReprefar.png"
          alt=""
          className="d-block img-fluid "
          width='300px'
          style={{ margin: 'auto' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="w-100">
        <img
          src="Images/LogoReprefarLargo.png"
          alt=""
          className="d-block img-fluid"
          width='auto'
          style={{ margin: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="w-100">
        <img
          src="Images/LogoReprefar.png"
          alt=""
          className="d-block img-fluid"
          width='300px'
          style={{ margin: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
export { Inicio };