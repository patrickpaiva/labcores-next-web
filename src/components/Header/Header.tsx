import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Container } from './styles'

const Header: React.FC = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <Container>
      <nav className={(clientWindowHeight >=80) ? 'scroll' : ''}>
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
      </nav>
    </Container>
  )
}

export default Header
