import '../App.css'
const Card = ({ image, title, price }) => {
  return (
    <>
      <div className="card-div">
        <img src={image} alt={title} className='card-div-img' />
        <h3 className='card-div-title'>{title.slice(0, 16)}...</h3>
        <p className='fw-bold'>${price}</p>
      </div>
    </>
  )
}
export { Card };