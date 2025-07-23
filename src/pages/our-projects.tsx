import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Project } from '../styles/pages/projects'
import theme from '../styles/theme'
import en from '../assets/en'
import pt from '../assets/pt'
import projects from '../assets/projects.json'
import { useRouter } from 'next/router'

interface ProjectData {
  id?: string | number
  pt: {
    title: string
    description: string
    people: string
  }
  en: {
    title: string
    description: string
    people: string
  }
}

const ResearchAreas: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : pt

  return (
    <Container>
      <Header />
      <Banner title={translate.OUR_PROJECTS} bannerColor={theme.colors.blue} />
      <main>
        <h2>{translate.PROJECTS}</h2>
        {projects.projects.map((project: ProjectData, index: number) => {
          return (
            <Project key={project.id || index}>
              <h3>{locale === 'pt' ? project.pt.title : project.en.title}</h3>
              <p>
                <b>{translate.DESCRIPTION}:</b>{' '}
                {locale === 'pt'
                  ? project.pt.description
                  : project.en.description}
                <br />
                <br />
                <strong>{translate.PROJECT_MEMBERS}</strong>:{' '}
                {locale === 'pt' ? project.pt.people : project.en.people}
              </p>
            </Project>
          )
        })}
      </main>
      <Footer />
    </Container>
  )
}

export default ResearchAreas