import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ECECEC;
  z-index: 999;
  display: grid;
  align-items: center;

  transform: translateY(-100vh);
  transition: all 0.3s ease-in-out;

  &.open {
    transform: translateY(0);
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px 12px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.green};
    font-size: 300%;
  }
`

export const Nav = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 80px);
  align-items: center;
  justify-content: center;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.green};
    text-align: center;
    font-size: 2.4rem;
  }
`
