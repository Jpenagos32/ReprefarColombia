import { Brands } from "./Brands";
import { Icons } from "./Icons";

const Inicio = () => {
  const styles = {
    width: '70%'
  }
  return (
    <>
      <div className="container-fluid">
        <img
          src="Images/LogoReprefarLargo.png"
          alt="Logo de reprefar"
          className="img-fluid mb-5 mt-5 rounded mx-auto d-block"
          style={styles}
        />
        <h1 className='text-center'>Reprefar Colombia</h1>
        <p className="text-center text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem at accusamus deleniti fuga sapiente nisi, repellendus ducimus accusantium praesentium iste consequuntur provident ab blanditiis minima vitae incidunt pariatur aperiam voluptatem?
        </p>
        <hr />
        
        <h2 className="text-center text-primary mt-5">Las Mejores Marcas</h2>
        <Brands />

        <h2 className="text-center text-primary mt-5">La Mejor Calidad</h2>
        <Icons/>

      </div>
    </>
  )
}
export { Inicio };