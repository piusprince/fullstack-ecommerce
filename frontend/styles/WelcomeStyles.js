import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 5rem;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 10%;
  z-index: 100;
  padding: 5rem;

  h1 {
    color: white;
    font-size: 3.2rem;
    font-weight: 700;
    width: 75%;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 1rem;
    color: white;
    width: 50%;
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
    margin-top: 2rem;
  }
`;
