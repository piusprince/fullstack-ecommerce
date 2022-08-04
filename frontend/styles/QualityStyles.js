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
  p {
    margin-top: 2rem;
  }
`;

export const Video = styled.div``;
