import Link from "next/link";

import { WelcomeWrapper, TextWrapper } from "../../styles/WelcomeStyles";

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <div>
        <h1>The store for farm tools</h1>
        <p>
          Wanting to buy a new tool for your farm? We have a wide range of tools
          for you to choose from. We have tools for all kinds of farms, from
          small to large. We have tools for all kinds of farms, from small to
          large.
        </p>
        <Link href="/allProducts">
          <button>Shop Now</button>
        </Link>
      </div>
    </WelcomeWrapper>
  );
}
