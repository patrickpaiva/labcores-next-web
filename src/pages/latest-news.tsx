import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Projects } from '../styles/pages/LatestNews'
import theme from '../styles/theme'

const LatestNews: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Banner title="Latest News" bannerColor={theme.colors.green} />
      <Projects>
          <div className="content">
            <h2>OUR <span>PROJECTS</span></h2>
            <div className="newsBox">
              <div className="news">
                <img src="/images/news1.png" alt="News 1 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news2.png" alt="News 2 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news3.png" alt="News 3 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news1.png" alt="News 1 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news2.png" alt="News 2 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
              <div className="news">
                <img src="/images/news3.png" alt="News 3 Image" />
                <h3>News Sample</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="\">Know More</a>
              </div>
            </div>
          </div>
        </Projects>
      <Footer/>
    </Container>
  )
}

export default LatestNews
