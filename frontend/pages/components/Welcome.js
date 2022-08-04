import Image from "next/image";
import { WelcomeWrapper, TextWrapper } from "../../styles/WelcomeStyles";

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <div>
        <h1>The store for farm tools</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro hic
          vitae, aut voluptatem, debitis quibusdam exercitationem recusandae ut
          provident minus iusto libero in ad eveniet sapiente alias officiis
        </p>
        <button>Shop Now</button>
      </div>
    </WelcomeWrapper>
  );
}
