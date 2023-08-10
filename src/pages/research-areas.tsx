import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, ContentLeft, ContentRight } from '../styles/pages/ResearchAreas'
import theme from '../styles/theme'
import en from '../assets/en'
import pt from '../assets/pt'
import { useRouter } from 'next/router'

const ResearchAreas: React.FC = () => {

  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  return (
    <Container>
      <Header/>
      <Banner title={translate.RESEARCH_AREAS} bannerColor={theme.colors.blue} />
      <main>
        <h2>{translate.DOMAIN}</h2>
        <ContentLeft>
          <div className="section">
            <div className="title">{translate.URBAN_CENTER}</div>
            <div className="box">
              <img src="/images/urban-center.png" alt="Urban Center" />
              <p>
              {translate.URBAN_CENTER_1}<br/><br/>
              <strong>{translate.RESEARCH_TOPICS}</strong>: {translate.URBAN_CENTER_2}
              </p>
            </div>
          </div>
        </ContentLeft>
        <ContentRight>
          <div className="section">
            <div className="title">{translate.ACADEMY}</div>
            <div className="box">
              <img src="/images/science.png" alt="Science Academy" />
              <p>
              {translate.ACADEMY_1}<br/><br/>
                <strong>{translate.RESEARCH_TOPICS}</strong>: {translate.ACADEMY_2}
              </p>
            </div>
          </div>
        </ContentRight>
        <h2 id="areas-id">{translate.AREAS}</h2>
        <div className="area" id="ecosystems">
          <h3>{translate.INTEL_ECO}</h3>
          <p>
            <img src="/images/community.png" alt="Intelligent Ecosystems" />
            {translate.INTEL_ECO_1}<br />
            {translate.INTEL_ECO_2}<br /> <br />
            <strong>{translate.RESEARCH_TOPICS}</strong>: {translate.INTEL_ECO_3}
          </p>
        </div>
        <div className="area" id="monitoring">
          <h3>{translate.SENSING_MONITORING}</h3>
          <p>
            <img src="/images/monitoring.png" alt="Sensing and Monitoring" />
            {translate.SENSING_MONITORING_1}<br />

            {translate.SENSING_MONITORING_2}
            <br /> <br />
            <strong>{translate.RESEARCH_TOPICS}</strong>: {translate.SENSING_MONITORING_3}
          </p>
        </div>
        <div className="area" id="pattern">
          <h3>{translate.PATTERN_RECOGNITION}</h3>
          <p>
            <img src="/images/pattern.png" alt="Pattern Recognition" />
            {translate.PATTERN_RECOGNITION_1}
            <br /><br />
            <strong>Research Topics</strong>: {translate.PATTERN_RECOGNITION_2}
          </p>
        </div>
        <div className="area" id="data">
          <h3>{translate.DATA_ENGINEERING}</h3>
          <p>
            <img src="/images/data.png" alt="Data Engineering and Semantic Treatment" />
            {translate.DATA_ENGINEERING_1}
            <br />
            {translate.DATA_ENGINEERING_2}
            <br /><br />
            <strong>{translate.RESEARCH_TOPICS}</strong>: {translate.DATA_ENGINEERING_3}
          </p>
        </div>
      </main>
      <Footer/>
    </Container>
  )
}

export default ResearchAreas
