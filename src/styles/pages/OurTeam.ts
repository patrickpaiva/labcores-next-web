import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;

  main {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 3.6rem;
        font-weight: 300;
        letter-spacing: 1px;
        margin-top: 32px;

        span {
          color: ${props => props.theme.colors.red};
        }
      }

      .head {
        max-width: 900px;
        width: 100%;

        h3 {
          font-weight: 300;
          font-size: 2.4rem;
          margin-bottom: 12px;
        }

        .headContent {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;

          img {
            width: 320px;
            height: 400px;
            object-fit: cover;
          }

          .joniceText {
            max-width: 500px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            h4 {
              font-size: 3rem;
              margin-bottom: 12px;
            }
            p {
              font-size: 1.8rem;
              line-height: 2.8rem;
              text-align: justify;
            }

            a {
              margin-top: 16px;
              background-color: ${(props) => props.theme.colors.blue};
              padding: 16px 24px;
              text-decoration: none;
              color: #fff;
              font-weight: 600;
              border-radius: 4px;
              transition: background-color 0.4s ease-out;

              &:hover {
                background-color: ${(props) => props.theme.colors.green};
              }
            }
          }
        }
      }
  }
  }
`

export const TeamContainer = styled.div``
