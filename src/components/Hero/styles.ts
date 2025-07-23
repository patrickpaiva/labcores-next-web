import styled from 'styled-components'

export const HeroBG = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    z-index: 1;
  }

  ::after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.6;
    background: #000;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: #fff;

  h1 {
    font-size: 3.6rem;
    font-weight: 600;
    text-align: center;

    span:nth-child(1) {
      /* color: ${props => props.theme.colors.blue}; */
    }
    span:nth-child(2) {
      color: ${props => props.theme.colors.blue};
    }
    span:nth-child(3) {
      color: ${props => props.theme.colors.red};
    }
    span:nth-child(4) {
      color: ${props => props.theme.colors.green};
    }
    span:nth-child(5) {
      /* color: ${props => props.theme.colors.green}; */
    }
  }

  p {
    font-size: 2rem;
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`
