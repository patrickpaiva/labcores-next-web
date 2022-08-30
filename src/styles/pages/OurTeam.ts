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
        margin-bottom: 32px;

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

export const TeamContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin-bottom: 32px;
  position: relative;

  h3 {
    font-weight: 300;
    font-size: 2.4rem;
    margin-bottom: 12px;
  }

  .chevronLeft {
    position: absolute;
    top: 40%;
    left: -10%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: .7;
    transform: rotateY(180deg);
  }

  .chevronRight {
    position: absolute;
    top: 40%;
    right: -10%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: .7;
  }

  .teamContent {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    scroll-behavior: smooth;
    position: relative;

    &::-webkit-scrollbar{
      display: none;
    }

    .member {
      min-width: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-right: 5px;

      img {
        max-width: 200px;
        margin-bottom: 12px;
      }

      .name {
        text-transform: uppercase;
        font-size: 2.2rem;
        margin-bottom: 8px;
      }
      ul {
        list-style-type: none;
        text-align: center;
        font-weight: 300;

        li {
          margin-bottom: 4px;
        }
      }

    }

    .member:nth-child(3n+1) {
      .name {
        color: ${props => props.theme.colors.green};
      }
    }
    .member:nth-child(3n+2) {
      .name {
        color: ${props => props.theme.colors.red};
      }
    }
    .member:nth-child(3n+3) {
      .name {
        color: ${props => props.theme.colors.blue};
      }
    }
  }

`
