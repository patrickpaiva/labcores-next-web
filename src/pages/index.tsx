import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { Container, Presentation, Projects, Researches, Team } from '../styles/pages/Home'
import en from '../assets/en'
import pt from '../assets/pt'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { InstaFeed } from '../components/InstaFeed/InstaFeed'

const Home: React.FC = () => {

  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  return (
    <Container>
      <Header />
      <Hero />
      <main>
        <Presentation>
          <div className='about'>
            <h2>{translate.LAB_CORES_TEXT}<span>Big Social Data</span></h2>
            <p>{translate.LAB_CORES_PROPOSAL}</p>
            <Link href="/about" locale={ locale }>{translate.ABOUT_US}</Link>
          </div>
          <div className='diagram'>
            <img src="/images/cores-areas.png" alt="LabCores Working Groups" />
          </div>
        </Presentation>
        <Team>
          <div className='content'>
            <img src="/images/jonice-oliveira.png" alt="Jonice Olveira" />
            <div className='infos'>
              <p className="title">{translate.LAB_CORES_TEAM}</p>
              <p className="name">Jonice Oliveira</p>
              <p className="details">{translate.JONICE_DETAILS}<span>{translate.LABCORES}</span></p>
              <div className='about'>
                <h2>{translate.MEET_OUR}<span>{translate.MULTIDICIPLINARY}</span> {translate.TEAM}</h2>
                <p>{translate.MEET_OUR_TEAM_TEXT}</p>
                <Link href="/our-team" locale={ locale }>{translate.OUR_TEAM}</Link>
              </div>
            </div>
          </div>
        </Team>
        <Researches>
          <div className="content">
            <h2>{translate.RESEARCH_EN} <span>{translate.AREAS}</span> {translate.OF} {translate.RESEARCH_PT}</h2>
            <div className="boxes">
              <div className="box">
                <h3>{translate.DOMAIN}</h3>
                <ul>
                  <li>{translate.URBAN_CENTER}</li>
                  <li>{translate.ACADEMY}</li>
                </ul>
                <Link href="/research-areas" locale={ locale }>{translate.KNOW_MORE}</Link>
              </div>
              <div className="box">
                <h3>{translate.AREAS}</h3>
                <ul>
                  <li>{translate.INTEL_ECO}</li>
                  <li>{translate.SENSING_MONITORING}</li>
                  <li>{translate.PATTERN_RECOGNITION}</li>
                  <li>{translate.DATA_ENGINEERING}</li>
                  <li>{translate.COMPUTATIONAL_ETHICS}</li>
                  <li>{translate.TOXIC_DIGITAL_CONTENT}</li>
                </ul>
                <Link href="/research-areas/#areas-id" locale={ locale }>{translate.KNOW_MORE}</Link>
              </div>
            </div>
          </div>
        </Researches>
        <Projects>
          <div className="content">
            <h2>{translate.LATEST} <span>{translate.NEWS}</span></h2>
          </div>
          <InstaFeed />
          {/* <div className="content">
            <h2>{translate.OUR_CONTACT} <span>{translate.PROJECTS}</span></h2>
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
            </div>
          </div> */}
        </Projects>
      </main>
      <Footer />
    </Container>
  )
}

export default Home
