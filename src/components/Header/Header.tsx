import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropDownMenu from './DropDownMenu';
import en from '../../assets/en'
import pt from '../../assets/pt'

import { Container } from './styles'
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  function changeLanguage(e) {
    const locale = e.target.value;
    router.push('/','/', { locale })
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
          <a href="/">{translate.HOME}</a>
          <a href="/about">{translate.ABOUT_US}</a>
          <a href="/our-team">{translate.OUR_TEAM}</a>
          <a href="/research-areas">{translate.RESEARCH_AREAS}</a>
          <a href="/latest-news">{translate.LATEST_NEWS}</a>
          <a href="/contact">{translate.CONTACT_US}</a>
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
