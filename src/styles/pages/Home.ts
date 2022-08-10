import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Presentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
  width: 100vw;
  max-width: 1200px;

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      font-weight: 300;
      max-width: 400px;
      text-align: center;

      span {
        color: ${(props) => props.theme.colors.green}
      }
    }

    p {
      margin-top: 12px;
      font-weight: 300;
      max-width: 350px;
      text-align: center;
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
        background-color: ${(props) => props.theme.colors.red};
      }
    }
  }

  .diagram {
    img {
      max-width: 400px;
    }
  }
`
export const Team = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 600px;
  background-color: #ECECEC;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .content {
    width: 100vw;
    max-width: 1200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    img {
      border-radius: 10px;
      max-width: 400px;
    }

    .infos {
      max-width: 400px;
      height: 75%;
      display: flex;
      flex-direction: column;

      .title {
        font-weight: 600;
        font-size: 2.4rem;
      }

      .name {
        font-weight: 300;
        font-size: 3.2rem;
        margin-top: 10px;
      }

      .details {
        margin-top: 5px;
        font-size: 1.8rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.blue};

        span {
          color: ${(props) => props.theme.colors.red};
        }
      }

      .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 30px;

        h2 {
          font-weight: 300;
          max-width: 400px;
          text-align: center;

          span {
            color: ${(props) => props.theme.colors.green}
          }
        }

        p {
          margin-top: 12px;
          font-weight: 300;
          max-width: 350px;
          text-align: center;
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
            background-color: ${(props) => props.theme.colors.red};
          }
        }
      }
    }
  }
`
