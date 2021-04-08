import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;  

  @media (min-width: 600px) {
    grid-template-columns:  25% 75%;
  }

`
