import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  background: var(--primary);
  color: white;
  margin-top: 5rem;
  /* font-size: 1.2rem; */

  h2 {
    font-size: 1.5rem;
    color: white;
  }
`;
