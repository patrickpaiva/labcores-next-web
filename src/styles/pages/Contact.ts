import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 3.6rem;
      font-weight: 300;
      letter-spacing: 1px;
      margin-top: 32px;
      text-align: center;

      span {
        color: ${props => props.theme.colors.blue};
      }
    }

    .endereco, .dadosContato {
      p {
        text-align: center;
        line-height: 28px;
        margin-top: 12px;
      }
    }
    .dadosContato {
      margin-bottom: 18px;
    }
  }
`
export const MapContainer = styled.div`
  width: 95%;
  max-width: 600px;
  max-height: 400px;
  margin-top: 24px;
`
