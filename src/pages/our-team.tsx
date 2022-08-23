import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, TeamContainer } from '../styles/pages/OurTeam'
import theme from '../styles/theme'

const OurTeam: React.FC = () => {
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
          <TeamContainer />
        </div>
      </main>
      <Footer />
    </Container>
  )
}

export default OurTeam
