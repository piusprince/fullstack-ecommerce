import { ProductWrapper } from "../../styles/ProductStyle";

export default function Products({ product }) {
  // destructuring product object
  const { title, price, description, image } = product.attributes;
  return (
    <ProductWrapper>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{price}</p>
    </ProductWrapper>
  );
}
