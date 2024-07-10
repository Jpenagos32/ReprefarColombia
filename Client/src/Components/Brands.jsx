import '../App.css'

const Brands = () => {
  const brands = [
    { image: "Images/LogoReprefarCuadrado.png", id: 1, title: 'Alivit' },
    { image: "Images/LogoReprefarCuadrado.png", id: 2, title: 'Traumakrem' },
    { image: "Images/LogoReprefarCuadrado.png", id: 3, title: 'Urcubit' },
  ]
  return (
    <>
      <div className="mt-3 text-center br-container">
        {
          brands.map((brand) => (
            <figure key={brand.id}>
              <img
                src={brand.image}
                alt="Logo Reprefar"
                style={{ width: '200px' }}
                className="rounded"
                title={brand.title}
              />
              <figcaption className='br-container-figcap'>{brand.title}</figcaption>
            </figure>
          ))
        }
      </div>
    </>
  )
}
export { Brands };