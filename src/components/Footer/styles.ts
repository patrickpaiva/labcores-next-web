import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 500px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 60px 30px 0 30px;

    .leftBox {
      max-width: 400px;

      p {
        margin-top: 20px;
        line-height: 2.6rem;
        letter-spacing: 1px;
      }

      img {
        max-width: 250px;
      }
    }

    .rightBox {
      max-width: 400px;
      display: flex;
      flex-direction: column;

      .social {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        p {
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: .5px;
        }

        .socialLogos {
          margin-top: 8px;
          img {
            width: 40px;
            height: 40px;
            margin-left: 12px;
            transition: filter 200ms linear;
            cursor: pointer;

            &:hover {
              filter: brightness(.5);
            }
          }

        }
      }

      .ufrjLogo {
        width: 250px;
        margin-top: 64px;
        align-self: flex-end;
        cursor: pointer;
      }
    }

  }

  .copyright {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    height: 100%;

    .content {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      padding-bottom: 12px;

      .rightBox {
        align-items: center;
        justify-content: center;

        .social {
          align-items: center;
          .socialLogos {
            margin-top: 16px;
            img {
              margin-left: 0px;
              margin-right: 12px;
            }
            img:last-child {
              margin-right: 0px !important;
            }
          }
        }

        .ufrjLogo {
          align-self: center;
          margin-top: 32px;
        }
      }

      .leftBox {
        margin-top: 60px;
        text-align: center;
      }
    }

    .copyright {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`
