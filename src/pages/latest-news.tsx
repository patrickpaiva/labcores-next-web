import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Projects } from '../styles/pages/LatestNews'
import theme from '../styles/theme'

interface NewsItem {
  id: number
  image: string
  title: string
  description: string
  link: string
}

const LatestNews: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: '/images/news1.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    },
    {
      id: 2,
      image: '/images/news2.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    },
    {
      id: 3,
      image: '/images/news3.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    },
    {
      id: 4,
      image: '/images/news1.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    },
    {
      id: 5,
      image: '/images/news2.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    },
    {
      id: 6,
      image: '/images/news3.png',
      title: 'News Sample',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '#'
    }
  ]

  return (
    <Container>
      <Header />
      <Banner title="Latest News" bannerColor={theme.colors.green} />
      <Projects>
        <div className="content">
          <h2>
            OUR <span>PROJECTS</span>
          </h2>
          <div className="newsBox">
            {newsItems.map((newsItem) => (
              <div key={newsItem.id} className="news">
                <img src={newsItem.image} alt={`${newsItem.title} Image`} />
                <h3>{newsItem.title}</h3>
                <p>{newsItem.description}</p>
                <a href={newsItem.link}>Know More</a>
              </div>
            ))}
          </div>
        </div>
      </Projects>
      <Footer />
    </Container>
  )
}

export default LatestNews