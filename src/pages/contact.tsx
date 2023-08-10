import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, MapContainer } from '../styles/pages/Contact'
import theme from '../styles/theme'
import Iframe from 'react-iframe'
import en from '../assets/en'
import pt from '../assets/pt'
import { useRouter } from 'next/router'
import { truncateSync } from 'fs'

const ContactUs: React.FC = () => {

  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  return (
    <Container>
      <Header/>
      <Banner title={translate.CONTACT_US} bannerColor={theme.colors.red} />
      <main>
        <h2>{translate.OUR_LOCATION} <span>{translate.LOCATION}</span></h2>
        <MapContainer>
          <Iframe
            url="https://www.google.com/maps/embed/v1/place?q=Center+for+Mathematics+and+Nature+(CCMN)+-+UFRJ+-+Avenida+Athos+da+Silveira+Ramos+-+Cidade+Universitária+da+Universidade+Federal+do+Rio+de+Janeiro,+Rio+de+Janeiro+-+RJ,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            frameBorder={0}
          />
        </MapContainer>
        <div className="endereco">
          <p><strong>{translate.ADDRESS}</strong> <br />
              Av. Athos da Silveira Ramos, 274 <br />
              Bl. E - Room 1038 (NCE) <br />
              Zip Code: 21941-916 <br />
              Ilha da Cidade Universitária <br />
              Rio de Janeiro - RJ <br />
              Brasil
          </p>
        </div>
        <h2>{translate.OUR_CONTACT} <span>{translate.CONTACT}</span></h2>
        <div className="dadosContato">
          <p>
            <strong>Jonice Oliveira - {translate.COORD}</strong> <br />
            Phone: +55 21 3938-3353 <br />
            Fax: +55 21 3938-9515 <br />
            jonice@dcc.ufrj.br
          </p>
          <p>
            <strong>Patricia Mamede - {translate.COORD_ASSIST}</strong> <br />
            Phone: +55 21 3938-3237 <br />
            secretaria@ppgi.ufrj.br
          </p>
        </div>
      </main>

      <Footer/>
    </Container>
  )
}

export default ContactUs
