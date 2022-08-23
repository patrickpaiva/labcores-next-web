import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../styles/pages/About'
import theme from '../styles/theme'

const About: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Banner title="About Us" bannerColor={theme.colors.red} />
      <main>
        <div className="content">
          <h2>Humans as <span>sensors</span>. Smarter beings for <span>better cities</span>.</h2>
          <p>
          <img src="/images/about-image.png" alt="Woman with her notebook"/>
            More than entertainment or learning, through social media, we can identify unprecedented levels of citizen engagement and participation. This activity is called “participatory sensing” or “citizen sensing”. Moreover, sensors are embedded into our everyday environment, such as cars, micro-chipped animals, elevators, smart buildings, environmental monitors and others. Many people are now carrying some form of sensor-laden device - a mobile phone, a tablet, a fitness device - from which sensor readings can also be retrieved. In this case, people interact – direct and indirect – with sensors. This is called ‘human-in-the-loop sensing’, empowering the citizen sensing with new kind of data. In citizen sensing, a sensor is not necessarily a hardware sensor, but can be a virtual sensor or a human interpreting sensory data. This data explosion has resulted in the emerging topic of “Big Social Data”. Big Social Data refers to large data volumes that relate to people interactions (with other people or things) or describe their behaviors, needs, and patterns. This data generates a cycle of knowledge creation, which can be useful to resolve problems in urban centers. From this social interaction, we can create more accurate knowledge about the city and its dynamics to support monitoring, surveillance and decision-making tasks of various kinds. <br /> <br />

            The Lab CORES conducts multidisciplinary research in understanding, simulation and supporting of social interactions through the use of Big Social Data, trying to solving real-world problems and promoting wellness in populations. <br /> <br />

            The Lab CORES is organized broadly into working groups including:
          </p>
          <img className="diagram" src="/images/cores-areas.png" alt="LabCores Working Groups" />
        </div>
      </main>
      <Footer/>
    </Container>
  )
}

export default About
