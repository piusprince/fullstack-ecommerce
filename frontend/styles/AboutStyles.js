import styled from "styled-components";

export const Features = styled.div`
  display: flex;
  margin: 5rem 0;
  gap: 2rem;

  div {
    background: radial-gradient(
      848px at 10% 20%,
      rgba(174, 231, 165, 0.9) 0%,
      rgb(181, 205, 154) 90%
    );
    padding: 2rem;
    border-radius: 0.5rem;
  }

  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
`;
