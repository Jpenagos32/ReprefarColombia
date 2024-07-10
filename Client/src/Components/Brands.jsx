import '../App.css'

const Brands = () => {
  const brands = [
    { image: "Images/productos/alivit_cal_d.jpeg", id: 1, title: 'Alivit' },
    { image: "Images/productos/traumakrem.jpeg", id: 2, title: 'Traumakrem' },
    { image: "Images/productos/urcubit.jpeg", id: 3, title: 'Urcubit' },
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