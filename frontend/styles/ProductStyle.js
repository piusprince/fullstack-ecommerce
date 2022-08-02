import styled from "styled-components";

export const ProductWrapper = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  img {
    width: 100%;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export const ProductInfo = styled.div`
  h2 {
    background: var(--primary);
    color: white;
    /* border-radius: 0 0.5rem 0 0; */
    padding: 0.5rem;
    width: 85%;
  }

  p {
    background: var(--secondary);
    color: white;
    padding: 0.5rem;
    width: 30%;
    margin-top: 0.2rem;
  }
`;
