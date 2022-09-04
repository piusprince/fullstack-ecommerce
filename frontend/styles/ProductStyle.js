import styled from "styled-components";

export const ProductWrapper = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    cursor: pointer;

    &:hover {
      scale: 1.1;
      transition: all 0.3s ease-in-out;
    }
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export const ImageStyle = styled.div`
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
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
