import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 1rem;
  text-align: center;

  .item {
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.4s;
  }

  .item img,
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .item:hover {
    filter: brightness(1.3);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
