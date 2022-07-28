import { ProductWrapper } from "../../styles/ProductStyle";
import Link from "next/link";

export default function Products({ product }) {
  // destructuring product object
  const { title, price, slug, image } = product.attributes;
  return (
    <ProductWrapper>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h1>{title}</h1>
      <p>{price}</p>
    </ProductWrapper>
  );
}
