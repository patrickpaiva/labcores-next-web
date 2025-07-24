import styled from 'styled-components'

interface ContentProps {
  bannerColor: string
}

export const HeroBG = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 300px;
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

export const Content = styled.div<ContentProps>`
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

    span {
      color: ${props => props.bannerColor};
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
