import React from 'react'

import { Content, HeroBG } from './styles'

const Hero: React.FC = () => {
  return (

    <HeroBG>
      <Content>
        <h1>Laboratory of <span>Social</span> <span>Computing</span> <span>and</span> <span>Network</span> <span>Analysis</span></h1>
        <p>Universidade Federal do Rio de Janeiro</p>
      </Content>
      <img src="/images/ufrj.png" alt="Decania UFRJ" />
    </HeroBG>


  )
}

export default Hero
