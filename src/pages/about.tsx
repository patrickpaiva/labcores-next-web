import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../styles/pages/About'
import theme from '../styles/theme'
import en from '../assets/en'
import pt from '../assets/pt'
import { useRouter } from 'next/router'

const About: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  return (
    <Container>
      <Header/>
      <Banner title={translate.ABOUT_US} bannerColor={theme.colors.red} />
      <main>
        <div className="content">
          <h2>{translate.ABOUT_HUMAN_AS} <span>{translate.ABOUT_SENSORS}</span>. {translate.ABOUT_SMARTER_BEINGS} <span>{translate.ABOUT_BETTER_CITIES}</span>.</h2>
          <p>
          <img src="/images/about-image.png" alt={translate.ABOUT_WOMAN_WITH_NOTEBOOK}/>
            {translate.ABOUT_1} <br /> <br />

            {translate.ABOUT_2} <br /> <br />

            {translate.ABOUT_3}
          </p>
          <img className="diagram" src="/images/cores-areas.png" alt={translate.ABOUT_WORKING_GROUPS} />
        </div>
      </main>
      <Footer/>
    </Container>
  )
}

export default About
