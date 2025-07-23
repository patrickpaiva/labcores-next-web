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
      font-weight: 300;
      font-size: 3.6rem;
      text-align: center;
      margin-top: 32px;
      margin-bottom: 32px;
    }

    h3 {
      font-size: 2.0rem;
      font-weight: 300;
      align-self: flex-start;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.6rem;
      text-align: justify;

    }

    .project {
      width: 100%;
      max-width: 940px;
      padding: 0 20px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      p {
        max-width: 90%;
        margin-bottom: 12px;

        img {
          max-width:350px ;
          float: left;
          margin-right: 16px;
        }
      }
    }

  @media (max-width: 900px) {
    main {
      h3 {
        align-self: center;
        text-align: center;
      }
      .area {
      width: 100%;
      max-width: 940px;
      padding: 0 20px;
      margin-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

        p {
          max-width: 100%;
          margin-bottom: 18px;

          img {
            width: 100%;
            max-width: 100%;
            margin-right: 0px;
          }
        }
      }

    }
  }

`

export const Project = styled.div`
  width: 100%;
  max-width: 940px;
  padding: 0 20px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h3 {
    width: 100%;
    text-align: center;
  }

  p {
    max-width: 90%;
    margin-bottom: 12px;

    img {
      max-width: 350px;
      float: left;
      margin-right: 16px;
    }
  }
`

export const ContentLeft = styled.div`
  width: 100%;
  max-width: 940px;
  padding: 0 20px;
  margin-bottom: 32px;

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 2.4rem;
      font-weight: 300;
      align-self: flex-start;
    }

    .box {
      margin-top: 12px;
      min-width: 90%;
      display: flex;
      justify-content: space-around;

      img {
        max-width: 300px;
        object-fit: cover;
      }

      p {
        max-width: 400px;
      }
    }
  }

  @media (max-width: 900px) {
    .section {
      .title {
        align-self: center;
      }
      .box {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    }
  }
`

export const ContentRight = styled.div`
  width: 100%;
  max-width: 940px;
  padding: 0 20px;
  margin-bottom: 32px;

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 2.4rem;
      font-weight: 300;
      align-self: flex-start;
    }

    .box {
      margin-top: 12px;
      min-width: 90%;
      display: flex;
      justify-content: space-around;
      flex-direction: row-reverse;

      img {
        max-width: 300px;
        max-height: 400px;
        object-fit: cover;
      }

      p {
        max-width: 400px;
      }
    }
  }

  @media (max-width: 900px) {
    .section {
      .title {
        align-self: center;
      }
      .box {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    }
  }
`
