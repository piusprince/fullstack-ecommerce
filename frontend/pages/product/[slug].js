import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";

export default function ProductData() {
  // fetch product url
  const { query } = useRouter();
  console.log(query);

  // fetch product data with graphql query
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  console.log(results);
  const { data, fetching, error } = results;

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Oops could not fetch data: {error.message}</p>;
  }
  console.log(data);

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
          <button>+</button>
          <p>0</p>
          <button>-</button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
