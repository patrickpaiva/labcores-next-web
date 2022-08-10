import React from 'react'
import Image from 'next/image'

import { Content, HeroBG } from './styles'

const Hero: React.FC = () => {
  return (

    <HeroBG>
      <Content>
        <h1>Laboratory of Social Computing and Network Analysis</h1>
        <p>Universidade Federal do Rio de Janeiro</p>
      </Content>
      <img src="/images/ufrj.png" alt="Decania UFRJ" />
    </HeroBG>


  )
}

export default Hero
