import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, ContentLeft, ContentRight } from '../styles/pages/ResearchAreas'
import theme from '../styles/theme'

const ResearchAreas: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Banner title="Research Areas" bannerColor={theme.colors.blue} />
      <main>
        <h2>Domains</h2>
        <ContentLeft>
          <div className="section">
            <div className="title">Urban Centers</div>
            <div className="box">
              <img src="/images/urban-center.png" alt="Urban Center" />
              <p>
                Scenario that characterizes applications and solutions aimed at solving problems and creating facilities in urban centers. <br /><br />
                <strong>Research Topics</strong>:
                Smart Cities;
                Crowdsensing;
                Opportunistic collaborations(opportunistic sensing, opportunistic networks);
                Urban mobility.
              </p>
            </div>
          </div>
        </ContentLeft>
        <ContentRight>
          <div className="section">
            <div className="title">Science / Academy</div>
            <div className="box">
              <img src="/images/science.png" alt="Science Academy" />
              <p>
                Scenario featuring applications and solutions geared to academia and scientific research. It mainly includes researches focused on analyzing scientific production, technologies and products, as well as the interaction between scenario and society. <br /><br />
                <strong>Research Topics</strong>:
                Scientometrics (metrics on science and production); Altmetrics (Alternative metrics that aim to quantify other aspects of science, eg impact on the population); Tech mining;
                Big scholar data (Techniques for application in massive academic data).
              </p>
            </div>
          </div>
        </ContentRight>
        <h2 id="areas-id">Areas</h2>
        <div className="area" id="ecosystems">
          <h3>Intelligent Ecosystems</h3>
          <p>
            <img src="/images/community.png" alt="Intelligent Ecosystems" />
            Research area dedicated to the development of models, techniques and computational practices focused on intelligent ecosystems. An ecosystem is a metaphor used to represent collaborative arrangements in constant evolution. These communities have autonomous entities with distinct purposes, creating a complex network of relationships for coexistence.
            <br />
            Through social computing resources, different kinds of intelligent ecosystems are analyzed, such as entrepreneurial communities, software development, innovation organizations, and smart cities. Among other purposes, the researches aim to systematize the decision-making process and improve the mechanisms of knowledge management, transparency, and resilience of these environments.
            <br /> <br />
            <strong>Research Topics</strong>: Education; Entrepreneurship and Innovation; Knowledge Management; Decision Support Systems; Emergency; Governance; Team Formation; Fairness, Accountability, Transparency, and Ethics on the Web.
          </p>
        </div>
        <div className="area" id="monitoring">
          <h3>Sensing and Monitoring</h3>
          <p>
            <img src="/images/monitoring.png" alt="Sensing and Monitoring" />
            Through social media, people share opinions, experiences and perspectives, which can be revealed by different formats such as text, images, audio and video. Also, we can identify unprecedented levels of citizen engagement and participation. Users can detect new events, help in dealing with natural disasters, diseases, terrorism, and understand the political scenario and support public manifestations. Citizens consume and share information about their cities - such as problems, events, ideas, suggestions, criticisms, and demands – acting as ‘human sensors’, forming opinions and participating in the city evolution. This activity is called “participatory sensing” or “citizen sensing”, a form of citizen participation in environmental monitoring and action which is bottom-up, empowering a community. <br />

            Moreover, sensors are embedded into our everyday environment, such as cars, micro-chipped animals, elevators, smart buildings, environmental monitors and others. Moreover, many people are now carrying some form of sensor-laden device - a mobile phone, a tablet, a fitness device - from which sensor readings can also be retrieved. In this case, people interact – direct and indirect – with sensors. This is sometimes called ‘human-in-the-loop sensing’, empowering the citizen sensing with new kind of data. In citizen sensing, a sensor is not necessarily a hardware sensor, but can be a virtual sensor or a human interpreting sensory data.
            <br /> <br />
            <strong>Research Topics</strong>: Social IoT; Mobile and New types of human interactions; Event identification; Problems in urban centers (mobility, diseases, etc); Emotion and Sentiment Analysis; Profiling; Hate speech in social media; Fake news, social bots, misinformation, and disinformation on social media; Credibility and reputation in social media, Media Literacy.
          </p>
        </div>
        <div className="area" id="pattern">
          <h3>Pattern Recognition</h3>
          <p>
            <img src="/images/pattern.png" alt="Pattern Recognition" />
            This group is responsible for the creation and application of statistical and computational methods for pattern recognition on structured and unstructured data like texts, images and time series. This module is responsible for providing solutions to the other modules for the creation of intelligent applications.
            <br /><br />
            <strong>Research Topics</strong>: Pattern recognition in streaming data; Learning from few examples (one-shot learning); Learning from unbalanced datasets; Model interpretability; Semantic extraction from unstructured data (images, time series, audio, etc.); Data treatment for bias removal; Topic discovery (events, subjects) in semi-structured and unstructured data; Information Retrieval; Recommendation.
          </p>
        </div>
        <div className="area" id="data">
          <h3>Data Engineering and Semantic Treatment</h3>
          <p>
            <img src="/images/data.png" alt="Data Engineering and Semantic Treatment" />
            In Big Social Data context, the massive growth of data demands new techniques to access, manage, mine, analyze, and act on data. Real-time mining of indirectly self-reported and sousveillance information harvested from social media can offer useful data and insights about unfolding trends and emerging crowd behaviors, especially at times of crises. However, such data often contain variable amounts of “noise”, misinformation and bias (which can get further “amplified” through the viral nature of social media) and usually require some advanced forms of filtering and verification by both machine-based algorithms and human experts before becoming reliable enough for use in decision-making tasks. Eradicating these issues or lessening their effect can be accomplished by verification of data with other sensor nodes, but depends on the density of the network and existence of other related data.
            <br />
            So, this module is responsible for the development of techniques to manage the massive volume of social data, envisioning the urban sensing, dealing with multiple data streams of varying data types, and different knowledge levels of users.
            <br /><br />
            <strong>Research Topics</strong>: Benchmarking, Performance Modelling, and Tuning; Data Integration, Metadata Management, and Interoperability; Data Models, Semantics, Query languages; Social Data Provenance, Cleaning, and Curation; Data Stream Systems and Sensor Networks; Data Visualization and Interactive Data Exploration; Privacy, Security, and Trust; Search and Information Extraction; Temporal, Spatial, Mobile, and Multimedia.
          </p>
        </div>
      </main>
      <Footer/>
    </Container>
  )
}

export default ResearchAreas
