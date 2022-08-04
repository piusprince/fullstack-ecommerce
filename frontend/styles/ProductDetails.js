import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    
    button {
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: black;
    background: #ffc107;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
