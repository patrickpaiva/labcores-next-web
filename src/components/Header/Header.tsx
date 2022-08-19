import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropDownMenu from './DropDownMenu';

import { Container } from './styles'

const Header: React.FC = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    setIsOpen(!isOpen)
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
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/our-team">Our Team</a>
          <a href="/research-areas">Research Areas</a>
          <a href="/latest-news">Latest News</a>
          <a href="/contact">Contact Us</a>
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
