import '../App.css'
import { SocialMediaIcons } from './SocialMediaIcons'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <>
      <footer className="container-fluid p-2 bg-primary mt-5">
        <div className="container">
          <SocialMediaIcons/>
          <p className="text-center text-light mt-2">&copy; Todos los derechos reservados Reprefar Colombia {date}</p>
        </div>
      </footer>
    </>
  )
}
export { Footer };