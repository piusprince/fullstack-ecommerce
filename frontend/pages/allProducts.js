import Products from "./components/Products";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import { Gallery } from "../styles/Gallery";

export default function AllProducts() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Oops could not fetch data: {error.message}</p>;
  }

  const products = data.products.data;
  // console.log(products);

  return (
    <>
      <h1
        style={{
          marginBottom: "5rem",
        }}
      >
        All Products Page
      </h1>
      <Gallery>
        {products.map((product) => (
          <Products key={product.attributes.slug} product={product} />
        ))}
      </Gallery>
    </>
  );
}
