import React, { useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, TeamContainer } from '../styles/pages/OurTeam'
import theme from '../styles/theme'
import teamEn from '../assets/team_en.json'
import teamPt from '../assets/team_pt.json'
import en from '../assets/en'
import pt from '../assets/pt'
import { useRouter } from 'next/router'

const OurTeam: React.FC = () => {
  const sliders = useRef([null])
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt
  const team = locale === 'en' ? teamEn : teamPt

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
      <Banner title={translate.OUR_TEAM} bannerColor={theme.colors.green} />
      <main>
        <div className="content">
          <h2>{translate.MEET} <span>{translate.LABCORES}</span> {translate.TEAM}</h2>
          <div className="head">
            <h3>{translate.COORD}</h3>
            <div className="headContent">
              <img src="/images/jonice-oliveira.png" alt="Jonice Oliveira" />
              <div className="joniceText">
                <h4>JONICE OLIVEIRA</h4>
                <p>
                {translate.ABOUT_4}
                </p>
                <a href="https://www.joniceoliveira.net/">{translate.SEE_MORE}</a>
              </div>
            </div>
          </div>

          <TeamContainer>
            <h3>{translate.COORDENATORS}</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 3)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 3)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[3] = item}>
              {team.coordenators.map((item, index) => {
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

          <TeamContainer>
            <h3>{translate.COLLAB}</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 2)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 2)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[2] = item}>
              {team.colab.map((item, index) => {
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

          <TeamContainer>
            <h3>{translate.DSC}</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 0)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 0)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[0] = item}>
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
              } )}
            </div>
          </TeamContainer>

          <TeamContainer>
            <h3>{translate.MSC}</h3>
            <button className="chevronLeft" onClick={(e) => handleLeftClick(e, 1)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <button className="chevronRight" onClick={(e) => handleRightClick(e, 1)}><img src="/images/chevron-icon.png" alt="arrow left" /></button>
            <div className="teamContent" ref={(item) => sliders.current[1] = item}>
              {team.mscs.map((item, index) => {
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
