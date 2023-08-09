import React from 'react'
import { MdClose } from 'react-icons/md'
import en from '../../../assets/en'
import pt from '../../../assets/pt'

import { Container, Nav } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface DropDownMenuProps {
  isOpen: boolean
  onClick: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, onClick }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const translate = locale === 'en' ? en : pt

  function changeLanguage(language) {
    const locale = language;
    router.push({ pathname, query }, asPath, { locale })
  }

  return (
    <Container className={isOpen ? 'open' : ''}>
      <MdClose className="close-button" onClick={onClick} />

      <Nav>
        <div>
          <Link href="/" locale={ locale }>{translate.HOME}</Link>
        </div>
        <div>
          <Link href="/about" locale={ locale }>{translate.ABOUT_US}</Link>
        </div>
        <div>
          <Link href="/our-team" locale={ locale }>{translate.OUR_TEAM}</Link>
        </div>
        <div>
          <Link href="/research-areas" locale={ locale }>{translate.RESEARCH_AREAS}</Link>
        </div>
        <div>
          <Link href="/latest-news" locale={ locale }>{translate.LATEST_NEWS}</Link>
        </div>
        <div>
          <Link href="/contact" locale={ locale }>{translate.CONTACT_US}</Link>
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
