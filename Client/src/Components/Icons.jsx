import '../App.css'
const Icons = () => {
  const sources = [
    {
      image: "Images/security.svg",
      title: 'Seguridad',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem minima nostrum quasi tenetur repudiandae possimus maiores facere. Modi architecto tenetur a quas, fugit, expedita earum commodi necessitatibus blanditiis dolore laudantium'
    },
    {
      image: "Images/money.svg",
      title: 'Economia',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem minima nostrum quasi tenetur repudiandae possimus maiores facere. Modi architecto tenetur a quas, fugit, expedita earum commodi necessitatibus blanditiis dolore laudantium'
    },
    {
      image: 'Images/check.svg',
      title: 'Calidad',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem minima nostrum quasi tenetur repudiandae possimus maiores facere. Modi architecto tenetur a quas, fugit, expedita earum commodi necessitatibus blanditiis dolore laudantium'
    },
  ]
  return (
    <>
      <div className='icons'>
        {
          sources.map(source => (
            <div key={source.title} className="icons-card">
              <img src={source.image} alt="Icono seguridad" className="icons-image" />
              <div className="icons-body">
                <h3 className="icons-title">{source.title}</h3>
                <p className="icons-text">{source.text}</p>
              </div>
            </div>
          ))
        }
      </div >
    </>
  )
}
export { Icons };