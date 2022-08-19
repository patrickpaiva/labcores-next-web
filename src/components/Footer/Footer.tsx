import React from 'react'
import { Container } from './styles';

const Footer: React.FC = () => {

  return(
    <Container>
      <div className="content">
        <div className="leftBox">
          <img src="/Images/logo-footer.png" alt="logo LabCores" />
          <p>Lab CORES is an initiative of the Universidade Federal do Rio de Janeiro.</p>
          <p><strong>Address</strong> <br />
            Av. Athos da Silveira Ramos, 274 <br />
            Ilha da Cidade Universitária <br />
            Rio de Janeiro - RJ <br />
            Brasil</p>
        </div>
        <div className="rightBox">
          <div className="social">
            <p>Follow us on our social networks</p>
            <div className="socialLogos">
              <img src="/Images/youtube.png" alt="YouTube logo" />
              <img src="/Images/instagram.png" alt="instagram logo" />
              <img src="/Images/facebook.png" alt="facebook logo" />
            </div>
          </div>
          <img src="/Images/ufrjLogo.png" alt="Logo UFRJ" className="ufrjLogo" />
        </div>
      </div>
      <p className='copyright'>Made by students of the Lab CORES extension project - 2022</p>
    </Container>
  )
}

export default Footer;
