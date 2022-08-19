import React from 'react'
import { MdClose } from 'react-icons/md'

import { Container, Nav } from './styles'

interface DropDownMenuProps {
  isOpen: boolean
  onClick: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, onClick }) => {
  return (
    <Container className={isOpen ? 'open' : ''}>
      <MdClose className="close-button" onClick={onClick} />

      <Nav>
        <div>
          <a href="/">HOME</a>
        </div>
        <div>
          <a href="/about">ABOUT US</a>
        </div>
        <div>
          <a href="/our-team">OUR TEAM</a>
        </div>
        <div>
          <a href="/research-areas">RESEARCH AREAS</a>
        </div>
        <div>
          <a href="/latest-news">LATEST NEWS</a>
        </div>
        <div>
          <a href="/contact">CONTACT US</a>
        </div>
      </Nav>
    </Container>
  )
}

export default DropDownMenu
