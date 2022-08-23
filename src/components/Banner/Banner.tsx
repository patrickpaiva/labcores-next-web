import React from 'react'
import theme from '../../styles/theme';

import { Content, HeroBG } from './styles'

interface BannerProps {
  title: string
  bannerColor: string;
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const title = props.title
  const words = title.split(" ")
  return (

    <HeroBG>
      <Content bannerColor={theme.colors.red}>
        <h1>{words[0]} <span>{words[1]}</span></h1>
      </Content>
      <img src="/images/ufrj.png" alt="Decania UFRJ" />
    </HeroBG>


  )
}

export default Banner
