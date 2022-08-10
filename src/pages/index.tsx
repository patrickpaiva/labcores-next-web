import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { Container, Presentation } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <main>
        <Presentation>
          <div className='about'>
            <h2>LabCORES conducts researches using <span>Big Social Data</span></h2>
            <p>Our proposal is to solve real-world problems and promote <span>wellness</span> in populations.</p>
            <a href='/about-us'>ABOUT US</a>
          </div>
          <div className='diagram'>
            <img src="/images/cores-areas.png" alt="LabCores Working Groups" />
          </div>
        </Presentation>
      </main>
    </Container>
  )
}

export default Home
