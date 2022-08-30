import Link from "next/link";
import { MoreProductsWrapper } from "../../styles/MoreStyles";

export default function More() {
  return (
    <MoreProductsWrapper>
      <h1>See more products</h1>
      <Link href="/allProducts">
        <button>View more</button>
      </Link>
    </MoreProductsWrapper>
  );
}
