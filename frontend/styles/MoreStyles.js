import styled from "styled-components";

export const MoreProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
  gap: 1rem;
  margin-top: 5rem;
  margin-bottom: 5rem;

  button {
    align-self: flex-start;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
`;
