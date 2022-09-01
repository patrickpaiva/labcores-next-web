import React, { useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, TeamContainer } from '../styles/pages/OurTeam'
import theme from '../styles/theme'
import team from '../assets/team.json'

const OurTeam: React.FC = () => {
  const sliders = useRef([null])

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    sliders.current[id].scrollLeft -= sliders.current[id].offsetWidth;
  }

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    sliders.current[id].scrollLeft += sliders.current[id].offsetWidth;
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
                <a href="https://www.joniceoliveira.net/">See more</a>
              </div>
            </div>
          </div>
          <TeamContainer>
            <h3>Postdocs</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 0)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 0)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[0] = item}>
              {team.postdocs.map((item, index) => {
                return (
                  <div className="member" key={index}>
                    <img src={item.photo} alt={item.name} />
                    <p className="name">{item.name}</p>
                    <ul>
                      {item.areas.map((area, id) => {
                        return (
                          <li key={id}>{area}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              } )}
            </div>
          </TeamContainer>
          <TeamContainer>
            <h3>D.Sc</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 1)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 1)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[1] = item}>
              {team.dscs.map((item, index) => {
                  return (
                    <div className="member" key={index}>
                      <img src={item.photo} alt={item.name} />
                      <p className="name">{item.name}</p>
                      <ul>
                        {item.areas.map((area, id) => {
                          return (
                            <li key={id}>{area}</li>
                          )
                        })}
                      </ul>
                    </div>
                  )
              })}
            </div>
          </TeamContainer>
        </div>
      </main>
      <Footer />
    </Container>
  )
}

export default OurTeam
