import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

export default function ProductData() {
  // fetch product data with graphql query
  const [results] = useQuery({ query: GET_PRODUCT_QUERY });
  console.log(results);

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>title</h3>
        <p>description</p>
      </div>
      <div>
        <span>quantity</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
}
