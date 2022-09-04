import styled from "styled-components";

export const PromoWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  gap: 5rem;

  /* align-items: center;
  justify-content: center; */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const PromoText = styled.div`
  width: 50%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(
    848px at 10% 20%,
    rgba(174, 231, 165, 0.9) 0%,
    rgb(181, 205, 154) 90%
  );
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    text-transform: uppercase;
  }

  p {
    margin: 2rem 0;
  }

  button {
    background: #ffc107;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: black;
    cursor: pointer;

    &:hover {
      background: black;
      color: #ffc107;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const LargeLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: black;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }

  h2 {
    color: white;
    font-size: 3.2rem;
  }

  span {
    background: #ffc107;
    color: black;
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 0.1rem;
    }
  }
`;
