import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  z-index: 10;
  background: 0 0;
  box-shadow: none;

  &.scroll {
    transition: background .2s ease,box-shadow .2s ease;
    background: #fff;
    box-shadow: 0 1px 0 #f7f7f7;

    nav a {
      p{
        color: #000;
      }
    }

    .menu a {
      color: #4a4a4a;
    }

    .hamburguer {
      color: ${(props) => props.theme.colors.green};
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    padding: 0 30px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;

      p {
        font-size: 3.2rem;
        color: #fff;
        font-weight: 400;
        margin-left: 5px;
        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors.green};
        }
      }
    }

    select {
      margin-left: 24px;
      background-color: transparent;
      border: none;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.blue};
      font-weight: bold;
      font-family: 'Plus Jakarta Sans';

      option {
        background: ${(props) => props.theme.colors.green};
        color: #fff;
      }
    }

    img {
      height: 60px;
    }

  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .menu a {
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    text-align: center;

    margin-left: 24px;
    transition: color 0.2s;
  }

  .menu a:hover {
    color: ${(props) => props.theme.colors.green};
  }

  .hamburguer {
    display: none;
    height: 10px;
    color: white;
    transition: color 200ms;
  }

  @media (max-width: 768px) {
    .menu {
      position: absolute;
      display: none;
    }

    .hamburguer {
      display: flex;
      justify-self: flex-end;
      cursor: pointer;
    }
  }

`
