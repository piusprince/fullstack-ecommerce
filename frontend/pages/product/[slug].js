import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { useStateContext } from "../../lib/context";

export default function ProductData() {
  // useStateContext() returns an object with the following properties:
  // quantity: number
  // setQuantity: function
  const { quantity, increaseQuantity, decreaseQuantity, addToCart } =
    useStateContext();

  // fetch product url
  const { query } = useRouter();
  // console.log(query);

  // fetch product data with graphql query
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  // console.log(results);
  const { data, fetching, error } = results;

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Oops could not fetch data: {error.message}</p>;
  }
  // console.log(data);

  // get product data

  const { description, title, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <Quantity>
          <span>quantity</span>
          <button onClick={increaseQuantity}>+</button>
          <p>{quantity}</p>
          <button onClick={decreaseQuantity} disabled={quantity === 0}>
            -
          </button>
        </Quantity>
        <Buy
          onClick={() => addToCart(data.products.data[0].attributes, quantity)}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
