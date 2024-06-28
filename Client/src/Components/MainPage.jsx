import { Tab, Tabs } from "react-bootstrap";
import { Inicio } from "./Inicio";
const MainPage = () => {
  return (
    <div className="container mt-1">
      <Tabs
        defaultActiveKey="inicio"
        id="fill-tab-example"
        className="mb-3 "
        fill
        data-bs-theme="light"
      >
        <Tab eventKey="inicio" title="Inicio">
          <Inicio />
        </Tab>
        <Tab eventKey="productos" title="Productos">
          <h1>Contenido de Productos</h1>
        </Tab>
        <Tab eventKey="nosotros" title="Nosotros">
          <h1>Contenido de Nosotros</h1>
        </Tab>
        <Tab eventKey="contacto" title="Contacto">
          <h1>
            Formulario de Contacto
          </h1>
        </Tab>
        <Tab eventKey="blog" title="Blog">
          <h1>
            Entradas de Blog
          </h1>
        </Tab>
      </Tabs>
    </div>

  )
}
export { MainPage };