import Home from '../componentes/Home'
import { Container } from '../styles/styles'
import Navbar from '../componentes/Navbar'
import Footer  from '../componentes/Footer'




export default function Principal() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <Footer/>
    </Container>
  )
}
