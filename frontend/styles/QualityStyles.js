import styled from "styled-components";

export const QualityWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 5rem;
  margin-top: 5rem;

  // media query between 768px and 1024px
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    gap: 2rem;
    margin-top: 5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    gap: 1rem;
  }
`;

export const TextWrapper = styled.div`
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(
    848px at 10% 20%,
    rgba(174, 231, 165, 0.9) 0%,
    rgb(181, 205, 154) 90%
  );
  padding: 2rem;
  p {
    margin-top: 2rem;
  }
`;

export const Video = styled.div``;
