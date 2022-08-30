import { useRouter } from "next/router";
import Image from "next/image";
import handshake from "../public/handshake.jpg";
import styled from "styled-components";
const { motion } = require("framer-motion");

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// Get session from stripe
export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  return (
    <Wrapper>
      <Card>
        <h1>Thanks for placing an order with us</h1>
        <h2>Check your email for confirmation</h2>
        <h2>{order.customer_details.email}</h2>
        <Address>
          <h3>address</h3>
          {Object.entries(order.customer_details.address).map(([key, val]) => {
            <p key={key}>
              {key}: {val}
            </p>;
          })}
        </Address>
        <Product>
          <h3>Products</h3>
          {order.line_items.data.map((item) => {
            <div key={item.id}>
              {/* <p>Product: {item.description}</p> */}
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.unit_amount}</p>
            </div>;
          })}
        </Product>
        <button onClick={() => route.push("/")}>Continue shopping</button>
        <Image
          src={handshake}
          alt="People shaking hands"
          style={{ borderRadius: 20 }}
        />
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5rem 15rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;

  button {
    margin: 2rem;
    font-size: 1.2rem;
    background: #f1f1f1;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
`;

const Address = styled.div`
  width: 100%;
`;

const Product = styled.div`
  width: 100%;
`;
