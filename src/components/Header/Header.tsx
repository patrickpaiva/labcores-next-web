import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropDownMenu from './DropDownMenu';
import en from '../../assets/en'
import pt from '../../assets/pt'

import { Container } from './styles'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: React.FC = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const translate = locale === 'en' ? en : pt

  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  function changeLanguage(e) {
    const locale = e.target.value;
    router.push({ pathname, query }, asPath, { locale })
  }

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <Container className={(clientWindowHeight >=80) ? 'scroll' : ''}>
      <nav>
        <a href="/">
          <img src="/images/logo.png" alt="LabCores" />
          <p>cores</p>
        </a>
        <div className="menu">
          <Link href="/" locale={ locale }>{translate.HOME}</Link>
          <Link href="/about" locale={ locale }>{translate.ABOUT_US}</Link>
          <Link href="/our-team" locale={ locale }>{translate.OUR_TEAM}</Link>
          <Link href="/research-areas" locale={ locale }>{translate.RESEARCH_AREAS}</Link>
          <a href="https://www.joniceoliveira.net/journal-publications" target="_blank">{translate.OUR_PUBLIC}</a>
          {/* <Link href="/latest-news" locale={ locale }>{translate.LATEST_NEWS}</Link> */}
          <Link href="/our-projects" locale={ locale }>{translate.OUR_PROJECTS}</Link>
          <Link href="/contact" locale={ locale }>{translate.CONTACT_US}</Link>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>
        <div className={(clientWindowHeight >=80) ? 'hamburguer scroll' : 'hamburguer'} onClick={handleIsOpen}>
          <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="3" fill="currentColor"/>
            <rect x="10" y="7" width="20" height="3" fill="currentColor"/>
          </svg>
        </div>
      </nav>
      <DropDownMenu isOpen={isOpen} onClick={handleIsOpen} />
    </Container>
  )
}

export default Header
