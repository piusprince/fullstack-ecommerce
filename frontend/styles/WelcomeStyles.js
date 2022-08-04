import styled from "styled-components";

export const WelcomeWrapper = styled.image`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.unsplash.com/photo-1600150806193-cf869bcfee05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80");
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;

  div {
    /* background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ); */

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-top: 35%;
    padding-left: 8%;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
    }

    p {
      font-weight: 300;
      color: #fff;
    }

    button {
      align-self: flex-start;
      font-size: 1.5rem;
      font-weight: 700;
      background: #ffc107;
      width: ;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
