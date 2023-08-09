import React from 'react'
import { MdClose } from 'react-icons/md'
import en from '../../../assets/en'
import pt from '../../../assets/pt'

import { Container, Nav } from './styles'
import { useRouter } from 'next/router'

interface DropDownMenuProps {
  isOpen: boolean
  onClick: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, onClick }) => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  function changeLanguage(language) {
    const locale = language;
    router.push('/','/', { locale })
  }

  return (
    <Container className={isOpen ? 'open' : ''}>
      <MdClose className="close-button" onClick={onClick} />

      <Nav>
        <div>
          <a href="/">{translate.HOME}</a>
        </div>
        <div>
          <a href="/about">{translate.ABOUT_US}</a>
        </div>
        <div>
          <a href="/our-team">{translate.OUR_TEAM}</a>
        </div>
        <div>
          <a href="/research-areas">{translate.RESEARCH_AREAS}</a>
        </div>
        <div>
          <a href="/latest-news">{translate.LATEST_NEWS}</a>
        </div>
        <div>
          <a href="/contact">{translate.CONTACT_US}</a>
        </div>
        <div className='language'>
          <a onClick={() => changeLanguage('en')}>EN</a>
          <a onClick={() => changeLanguage('pt')}>PT</a>
        </div>
      </Nav>
    </Container>
  )
}

export default DropDownMenu
