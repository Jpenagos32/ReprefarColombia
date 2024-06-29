import Data from '../../../Server/Data.json'
import { Card } from './Card'
import '../App.css'

const Productos = () => {
  return (
    <>
    <h1 className='text-center mt-5 mb-5'>Catalogo de Productos</h1>
    <br />
      <div className='card-parent'>
        {
          Data.map(item => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        }
      </div>
    </>
  )
}
export {Productos};