import { Form, Button } from "react-bootstrap";

const Contact = () => {
  // TODO hacer que el formulario sea controlado
  return (
    <Form className="container w-75 mt-5 text-primary fw-bold">

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Su Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Jhon Doe" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Su Correo Electrónico:</Form.Label>
        <Form.Control type="email" placeholder="correo@gmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Asunto del Mensaje:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control as='textarea' rows={12} />
      </Form.Group>

      <Button onClick={() => alert('Mensaje Enviado')}>Enviar Mensaje</Button>
    </Form>
  )
}
export { Contact }; <h1>Desde el componente contacto</h1>