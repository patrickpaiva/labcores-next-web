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
        color: ${props => props.theme.colors.green};
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
      background-color: ${props => props.theme.colors.blue};
      padding: 16px 24px;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      border-radius: 4px;
      transition: background-color 0.4s ease-out;

      &:hover {
        background-color: ${props => props.theme.colors.red};
      }
    }
  }

  .diagram {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 32px 0;

    .diagram {
      margin-top: 32px;
      img {
        width: 85vw;
        max-width: 400px;
      }
    }
  }
`
export const Team = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 600px;
  background-color: #ececec;
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
        color: ${props => props.theme.colors.blue};

        span {
          color: ${props => props.theme.colors.red};
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
            color: ${props => props.theme.colors.green};
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
          background-color: ${props => props.theme.colors.blue};
          padding: 16px 24px;
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          border-radius: 4px;
          transition: background-color 0.4s ease-out;

          &:hover {
            background-color: ${props => props.theme.colors.red};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 32px 0;

    .content {
      flex-direction: column;

      img {
        width: 80vw;
        max-width: 300px;
      }

      .infos {
        margin-top: 24px;
        p {
          text-align: center;
        }
      }
    }
  }
`
export const Researches = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
  width: 100vw;
  max-width: 1200px;

  .content {
    width: 100vw;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    h2 {
      font-size: 3.2rem;
      font-weight: 300;

      span {
        color: ${props => props.theme.colors.red};
      }
    }

    .boxes {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .box {
        width: 400px;
        height: 250px;
        padding: 16px 40px;
        border-radius: 10px;
        background-color: #0d6892;
        color: white;
        font-weight: 300;
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        ul {
          margin-top: 10px;
          list-style-position: inside;
          list-style-type: circle;
          li {
            margin-top: 5px;
          }
        }

        h3 {
          font-size: 2.4rem;
          font-weight: 400;
        }

        a {
          margin-top: 6px;
          background-color: transparent;
          border: 1px solid #fff;
          padding: 6px 12px;
          text-decoration: none;
          color: #fff;
          font-weight: 300;
          border-radius: 4px;
          transition: background-color 0.4s ease-out;

          &:hover {
            background-color: ${props => props.theme.colors.green};
          }
        }
      }

      .box:last-child {
        background-color: #ececec;
        color: black;

        a {
          color: black;
          border-color: black;
          transition: color 0.4s ease-out;

          &:hover {
            color: white;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 32px 0;
    .content {
      .boxes {
        flex-direction: column;

        .box {
          height: 100%;
          max-width: 90vw;
          margin-top: 24px;
        }
      }
    }
  }
`
export const Projects = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: #676363;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-weight: 300;

  .content {
    width: 100vw;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    h2 {
      font-size: 3.2rem;
      font-weight: 300;
      padding: 20px 0;

      span {
        color: ${props => props.theme.colors.green};
      }
    }

    .newsBox {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .news {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
          margin-top: 8px;
          font-weight: 300;
        }

        p {
          margin-top: 16px;
          font-size: 1.4rem;
          line-height: 2.4rem;
          text-align: justify;
          text-justify: inter-word;
        }

        a {
          margin-top: 12px;
          background-color: transparent;
          border: 1px solid #fff;
          padding: 6px 12px;
          text-decoration: none;
          color: #fff;
          font-weight: 300;
          border-radius: 4px;
          transition: background-color 0.4s ease-out;

          &:hover {
            background-color: ${props => props.theme.colors.red};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 32px 0;

    .content {
      .newsBox {
        flex-direction: column;
        margin-top: 24px;

        .news {
          margin-bottom: 32px;
          align-items: center;
          h3 {
            font-weight: 600;
          }
        }
      }
    }
  }
`
