import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { Container, Presentation, Team } from '../styles/pages/Home'

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
        <Team>
          <div className='content'>
            <img src="/images/jonice-oliveira.png" alt="Jonice Olveira" />
            <div className='infos'>
              <p className="title">TIME LabCORES</p>
              <p className="name">Jonice Oliveira</p>
              <p className="details">Professora associada da UFRJ, Fundadora e Head do <span>LabCORES</span></p>
              <div className='about'>
                <h2>Meet our <span>multidiciplinary</span> team</h2>
                <p>Our researchers range from postdocs to undergraduate students.</p>
                <a href='/ourt-team'>OUR TEAM</a>
              </div>
            </div>
          </div>
        </Team>
      </main>
    </Container>
  )
}

export default Home
