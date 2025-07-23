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
  const router = useRouter()
  const { locale, pathname, asPath, query } = router
  const translate = locale === 'en' ? en : pt

  function changeLanguage(language: string) {
    const newLocale = language
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <Container className={isOpen ? 'open' : ''}>
      <MdClose className="close-button" onClick={onClick} />

      <Nav>
        <div>
          <Link href="/" locale={locale}>
            {translate.HOME}
          </Link>
        </div>
        <div>
          <Link href="/about" locale={locale}>
            {translate.ABOUT_US}
          </Link>
        </div>
        <div>
          <Link href="/our-team" locale={locale}>
            {translate.OUR_TEAM}
          </Link>
        </div>
        <div>
          <Link href="/research-areas" locale={locale}>
            {translate.RESEARCH_AREAS}
          </Link>
        </div>
        <div>
          <a
            href="https://www.joniceoliveira.net/journal-publications"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate.OUR_PUBLIC}
          </a>
        </div>
        <div>
          <Link href="/contact" locale={locale}>
            {translate.CONTACT_US}
          </Link>
        </div>
        <div className="language">
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('pt')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            PT
          </button>
        </div>
      </Nav>
    </Container>
  )
}

export default DropDownMenu