const Brands = () => {
  const brands = [
    "Images/LogoReprefarCuadrado.png",
    "Images/LogoReprefarCuadrado.png",
    "Images/LogoReprefarCuadrado.png",
    "Images/LogoReprefarCuadrado.png",
  ]
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }} className="mt-5">
        {
          brands.map((brand, index) => (
            <img key={index} src={brand} alt="Logo Reprefar" style={{ width: '200px' }} className="rounded" />
          ))
        }
      </div>
    </>
  )
}
export { Brands };