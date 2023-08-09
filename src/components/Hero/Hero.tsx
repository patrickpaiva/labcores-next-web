import React from 'react'
import en from '../../assets/en'
import pt from '../../assets/pt'

import { Content, HeroBG } from './styles'
import { useRouter } from 'next/router'

const Hero: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt
  return (

    <HeroBG>
      <Content>
        <h1>{translate.hero1} <span>{translate.hero2}</span> <span>{translate.hero3}</span> <span>{translate.hero4}</span> <span>{translate.hero5}</span> <span>{translate.hero6}</span></h1>
        <p>Universidade Federal do Rio de Janeiro</p>
      </Content>
      <img src="/images/ufrj.png" alt="Decania UFRJ" />
    </HeroBG>


  )
}

export default Hero
