import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../styles/pages/Contact'
import theme from '../styles/theme'

const ContactUs: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Banner title="Contact Us" bannerColor={theme.colors.red} />

      <Footer/>
    </Container>
  )
}

export default ContactUs
