import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`

export const Projects = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 32px 0;
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
      margin-bottom: 18px;

      span {
        color: ${props => props.theme.colors.green};
      }
    }

    .newsBox {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-evenly;
      gap: 16px 0;
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
        display: flex;
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
