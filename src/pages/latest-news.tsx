import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../styles/pages/LatestNews'
import theme from '../styles/theme'

const LatestNews: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Banner title="Latest News" bannerColor={theme.colors.green} />

      <Footer/>
    </Container>
  )
}

export default LatestNews
