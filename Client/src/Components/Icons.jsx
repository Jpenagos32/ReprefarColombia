import '../App.css'
const Icons = () => {
  const sources = [
    "Images/icono1.svg",
    "Images/icono2.svg",
    "Images/icono3.svg",
  ]
  return (
    <>
      <div className='icons'>
        {
          sources.map(source => (
            <div key={source} className="icons-card">
              <img src={source} alt="Icono seguridad" className="icons-image" />
              <div className="icons-body">
                <h3 className="icons-title">Seguridad</h3>
                <p className="icons-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem minima nostrum quasi tenetur repudiandae possimus maiores facere. Modi architecto tenetur a quas, fugit, expedita earum commodi necessitatibus blanditiis dolore laudantium.
                </p>
              </div>
            </div>
          ))
        }
      </div >
    </>
  )
}
export { Icons };