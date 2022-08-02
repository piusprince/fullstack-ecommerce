import Image from "next/image";
import { ImageWrapper, TextWrapper } from "../../styles/WelcomeStyles";

export default function Welcome() {
  return (
    <ImageWrapper>
      <TextWrapper>
        <h1>The store for farm tools</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro hic
          vitae, aut voluptatem, debitis quibusdam exercitationem recusandae ut
          provident minus iusto libero in ad eveniet sapiente alias officiis
        </p>
        <button>Shop Now</button>
      </TextWrapper>
      <Image
        src="https://images.unsplash.com/photo-1531798123643-26d5ab4c264d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Drip Hub Background"
        width="100%"
        height="50%"
        objectFit="cover"
        layout="responsive"
        style={{ borderRadius: "10px" }}
      />
    </ImageWrapper>
  );
}
