const Brands = () => {
  const brands = [
    {image: "Images/LogoReprefarCuadrado.png",id: 1},
    {image: "Images/LogoReprefarCuadrado.png",id: 2},
    {image: "Images/LogoReprefarCuadrado.png",id: 3},
    {image: "Images/LogoReprefarCuadrado.png",id: 4},
  ]
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }} className="mt-3">
        {
          brands.map((brand) => (
            <img key={brand.id} src={brand.image} alt="Logo Reprefar" style={{ width: '200px' }} className="rounded" />
          ))
        }
      </div>
    </>
  )
}
export { Brands };