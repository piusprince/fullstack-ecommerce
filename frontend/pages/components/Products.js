import { ProductInfo, ProductWrapper } from "../../styles/ProductStyle";
import Link from "next/link";

export default function Products({ product }) {
  // destructuring product object
  const { title, price, slug, image } = product.attributes;
  return (
    <ProductWrapper>
      <Link href={`/product/${slug}`}>
        <div>
          <img
            src={image.data.attributes.formats.small.url}
            alt="Product image"
          />
        </div>
      </Link>
      <ProductInfo>
        <h2>{title}</h2>
        <p>GHC{price}</p>
      </ProductInfo>
    </ProductWrapper>
  );
}
