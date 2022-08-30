import { useEffect } from "react";
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
import toast from "react-hot-toast";

export default function ProductData() {
  // useStateContext() returns an object with the following properties:
  // quantity: number
  // setQuantity: function
  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    setQuantity,
  } = useStateContext();

  // Reset quantity to 1 when changing products
  useEffect(() => {
    setQuantity(1);
  }, []);

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

  // make a toast notification
  const notify = () => {
    toast.success(`${title} added to cart!`);
  };

  return (
    <DetailsStyle>
      {
        // render small or medium image depending on status of image
        image.data.attributes.formats.small.url ? ( // if image is ready
          <img
            src={image.data.attributes.formats.small.url}
            alt="Product image"
          />
        ) : (
          // if image is not ready
          <img
            src={image.data.attributes.formats.medium.url}
            alt="Product image"
          />
        )
      }
      {/* <img src={image.data.attributes.formats.medium.url} alt={title} /> */}
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <Quantity>
          <span>quantity</span>
          <button onClick={decreaseQuantity} disabled={quantity === 0}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </Quantity>
        <Buy
          onClick={() => {
            addToCart(data.products.data[0].attributes, quantity);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
