import React from 'react'
import { Container } from './styles';
import en from '../../assets/en'
import pt from '../../assets/pt'
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : pt

  return(
    <Container>
      <div className="content">
        <div className="leftBox">
          <img src="/images/logo-footer.png" alt="logo LabCores" />
          <p>{translate.FOOTER_INITIATIVE}</p>
          <p><strong>{translate.ADDRESS}</strong> <br />
            Av. Athos da Silveira Ramos, 274 <br />
            Ilha da Cidade Universitária <br />
            Rio de Janeiro - RJ <br />
            Brasil</p>
        </div>
        <div className="rightBox">
          <div className="social">
            <p>{translate.SOCIAL_MEDIA}</p>
            <div className="socialLogos">
              <a href="https://www.youtube.com/channel/UCF39iCywI12ywKXXFyW1Ouw" target="_blank"><img src="/images/youtube.png" alt="YouTube logo" /></a>
              <a href="https://www.instagram.com/labcores.ufrj" target="_blank"><img src="/images/instagram.png" alt="instagram logo" /></a>
              <a href="https://www.facebook.com/LabCORES/" target="_blank"><img src="/images/facebook.png" alt="facebook logo" /></a>
              <a href="https://www.researchgate.net/lab/Lab-CORES-Jonice-Oliveira" target="_blank"><img src="/images/research.png" alt="research logo" /></a>
            </div>
          </div>
          <a className='ufrjLink' href="https://ufrj.br/" target="_blank"><img src="/images/ufrjLogo.png" alt="Logo UFRJ" className="ufrjLogo" /></a>
          {/* <img src="/Images/ufrjLogo.png" alt="Logo UFRJ" className="ufrjLogo" /> */}
        </div>
      </div>
      <p className='copyright'>{translate.FOOTER_MADE_BY_STUDENTS} - 2022</p>
    </Container>
  )
}

export default Footer;
