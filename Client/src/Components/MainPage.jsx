import { Tab, Tabs } from "react-bootstrap";
import { Inicio } from "./Inicio";
import { Productos } from "./Productos";
import { About } from "./About";
import { Contact } from "./Contact";
import { useMainStore } from "../stores/mainStore";

const MainPage = () => {
  const {key, setKey} =useMainStore();

  return (
    <div className="container mt-1">
      <Tabs
        activeKey={key}
        id="fill-tab-example"
        onSelect={(key) => {setKey(key)}}
        className="mb-3 "
        fill
        data-bs-theme="light"
      >
        <Tab eventKey="inicio" title="Inicio">
          <Inicio />
        </Tab>
        <Tab eventKey="productos" title="Productos">
          <Productos />
        </Tab>
        <Tab eventKey="nosotros" title="Nosotros">
          <About/>
        </Tab>
        <Tab eventKey="contacto" title="Contacto">
          <Contact/>
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