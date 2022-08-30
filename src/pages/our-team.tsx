import React, { useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, TeamContainer } from '../styles/pages/OurTeam'
import theme from '../styles/theme'

const OurTeam: React.FC = () => {
const postdocs = useRef(null)

const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  postdocs.current.scrollLeft -= postdocs.current.offsetWidth;
}

const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  postdocs.current.scrollLeft += postdocs.current.offsetWidth;
}

  return (
    <Container>
      <Header/>
      <Banner title="Our Team" bannerColor={theme.colors.green} />
      <main>
        <div className="content">
          <h2>Meet <span>Lab Cores</span> Team</h2>
          <div className="head">
            <h3>Head</h3>
            <div className="headContent">
              <img src="/images/jonice-oliveira.png" alt="Jonice Oliveira" />
              <div className="joniceText">
                <h4>JONICE OLIVEIRA</h4>
                <p>
                I am an associate professor at the Federal University of Rio de Janeiro (UFRJ), founder and head of  Lab CORES. My research is at the intersection of Data Science and Social Computing, focusing on Big Social Data (treatment, management and knowledge extraction). In my research, I try to solve real-world problems, with a special interest in crowd dynamics at large scale events, urban problems and determine how the analysis of social networks can help in promoting wellness in neglected populations .
                </p>
                <a href="/">See more</a>
              </div>
            </div>
          </div>
          <TeamContainer>
            <h3>Postdocs</h3>
            <button className="chevronLeft" onClick={handleLeftClick}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={handleRightClick}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={postdocs}>
              <div className="member">
                <img src="/images/livia-ruback.png" alt="Livia Ruback" />
                <p className="name">LIVIA RUBACK</p>
                <ul>
                  <li>Sensing and Monitoring</li>
                  <li>Identification of hate speech</li>
                </ul>
              </div>
              <div className="member">
                <img src="/images/danilo-carvalho.png" alt="Danilo Carvalho" />
                <p className="name">DANILO CARVALHO</p>
                <ul>
                  <li>Pattern Recognition</li>
                  <li>Machine translation methods</li>
                </ul>
              </div>
              <div className="member">
                <img src="/images/claudia-cappeli.png" alt="Claudia Cappeli" />
                <p className="name">CLAUDIA CAPPELI</p>
                <ul>
                  <li>Intelligent Ecosystems</li>
                  <li>Transparency and Digital Democracy</li>
                </ul>
              </div>
              <div className="member">
                <img src="/images/claudia-cappeli.png" alt="Claudia Cappeli" />
                <p className="name">CLAUDIA CAPPELI</p>
                <ul>
                  <li>Intelligent Ecosystems</li>
                  <li>Transparency and Digital Democracy</li>
                </ul>
              </div>
              <div className="member">
                <img src="/images/claudia-cappeli.png" alt="Claudia Cappeli" />
                <p className="name">CLAUDIA CAPPELI</p>
                <ul>
                  <li>Intelligent Ecosystems</li>
                  <li>Transparency and Digital Democracy</li>
                </ul>
              </div>
            </div>
          </TeamContainer>
        </div>
      </main>
      <Footer />
    </Container>
  )
}

export default OurTeam
