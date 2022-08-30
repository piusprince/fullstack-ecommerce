import { useRouter } from "next/router";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export default function User() {
  const route = useRouter();

  return (
    <div onClick={() => route.push("/api/auth/login")}>
      <FaUserCircle />
      <h3>Profile</h3>
    </div>
  );
}

const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
