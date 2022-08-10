import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Hero />
      <main>
      </main>
    </Container>
  )
}

export default Home
