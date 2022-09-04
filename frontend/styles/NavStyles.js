import styled from "styled-components";

export const NavWrapper = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  /* background: white; */
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;

    &:hover {
      color: #ffc107;
      transition: all 0.2s ease-in-out;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20%;
    right: -10%;
    background: #ffc107;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    font-size: 0.8rem;
  }
`;

export const Icon = styled.div`
  &:hover {
    color: #ffc107;
    transition: all 0.2s ease-in-out;
  }
`;
