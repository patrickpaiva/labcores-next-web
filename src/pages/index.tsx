import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { Container, Presentation, Projects, Researches, Team } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <main>
        <Presentation>
          <div className='about'>
            <h2>Lab CORES conducts researches using <span>Big Social Data</span></h2>
            <p>Our proposal is to solve real-world problems and promote <span>wellness</span> in populations.</p>
            <a href='/about'>ABOUT US</a>
          </div>
          <div className='diagram'>
            <img src="/images/cores-areas.png" alt="LabCores Working Groups" />
          </div>
        </Presentation>
        <Team>
          <div className='content'>
            <img src="/images/jonice-oliveira.png" alt="Jonice Olveira" />
            <div className='infos'>
              <p className="title">Lab CORES Team</p>
              <p className="name">Jonice Oliveira</p>
              <p className="details">Associate professor at UFRJ, founder and head of <span>Lab CORES</span></p>
              <div className='about'>
                <h2>Meet our <span>multidiciplinary</span> team</h2>
                <p>Our researchers range from postdocs to undergraduate students.</p>
                <a href='/our-team'>OUR TEAM</a>
              </div>
            </div>
          </div>
        </Team>
        <Researches>
          <div className="content">
            <h2>RESEARCH <span>AREAS</span></h2>
            <div className="boxes">
              <div className="box">
                <h3>Domains</h3>
                <ul>
                  <li>Urban Centers</li>
                  <li>Science and Academy</li>
                </ul>
                <a href="\">Know More</a>
              </div>
              <div className="box">
                <h3>Areas</h3>
                <ul>
                  <li>Intelligent Ecosystems</li>
                  <li>Sensing and Monitoring</li>
                  <li>Pattern Recognition</li>
                  <li>Data Engineering and Semantic Treatment</li>
                </ul>
                <a href="\">Know More</a>
              </div>
            </div>
          </div>
        </Researches>
        <Projects>
          <div className="content">
            <h2>OUR <span>PROJECTS</span></h2>
            <div className="newsBox">
              <div className="news">
                <img src="/images/news1.png" alt="News 1 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news2.png" alt="News 2 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news3.png" alt="News 3 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
            </div>
          </div>
        </Projects>
      </main>
      <Footer />
    </Container>
  )
}

export default Home
