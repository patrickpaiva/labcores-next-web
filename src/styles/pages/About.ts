import styled from 'styled-components'

export const Container = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      padding: 0 16px;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: justify;
      line-height: 3.4rem;
      font-size: 1.8rem;

      h2 {
        font-size: 2.8rem;
        margin: 24px 0;
        text-align: center;
        padding: 0 12px;

        span {
          color: ${props => props.theme.colors.green};
        }

        span:last-child {
          color: ${props => props.theme.colors.blue};
        }
      }

      p {
        margin-bottom: 18px;
        text-align: justify;
        img {
          float: left;
          margin-right: 16px;
        }
      }

      .diagram {
        max-width: 600px;
        width: 80vw;
        margin-bottom: 32px;
      }
    }
  }

  @media (max-width: 920px) {
    main {
      .content {
        p {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            max-width: 450px;
            width: 90vw;
            float: none;
            margin-right: 0px;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
`
