import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, ContentLeft, ContentRight } from '../styles/pages/projects'
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
      <Banner title={translate.OUR_PROJECTS} bannerColor={theme.colors.blue} />
      <main>

        <h2>{translate.PROJECTS}</h2>
        <div className="project">
          <h3>{translate.PROJECT_COVID_TITLE}</h3>
          <p>
            <b>{translate.DESCRIPTION}:</b> {translate.PROJECT_COVID_TEXT}
            <br/>
            <br/>
            <strong>{translate.PROJECT_MEMBERS}</strong>: {translate.PROJECT_COVID_PARTICIPANTS}
          </p>
        </div>

      <div className="project">
          <h3>{translate.PROJECT_ORACLE_TITLE}</h3>
          <p>
            <b>{translate.DESCRIPTION}:</b> {translate.PROJECT_ORACLE_TEXT}
            <br/>
            <br/>
            <strong>{translate.PROJECT_MEMBERS}</strong>: {translate.PROJECT_ORACLE_PARTICIPANTS}
          </p>
      </div>

      </main>
      <Footer/>
    </Container>
    
  )
}

export default ResearchAreas
