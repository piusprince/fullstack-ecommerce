import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  /* display: none; */
`;

export const CartStyle = styled.div`
  width: 50%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 1rem 0rem;
  background: #fff;
  padding: 1rem;
  overflow: hidden;
  img {
    width: 7rem;
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyCart = styled.div`
  display: grid;
  place-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  svg {
    font-size: 5rem;
    color: var(--secondary);
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--secondary);
  }
  p {
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--secondary);
  }
`;