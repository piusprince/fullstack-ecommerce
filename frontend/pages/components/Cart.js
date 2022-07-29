import { useStateContext } from "../../lib/context";
import {
  CartStyle,
  CartWrapper,
  Card,
  CardInfo,
  EmptyCart,
  QuantityWrapper,
} from "../../styles/CartStyles";
import {
  AiOutlineShoppingCart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, addToCart } = useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle>
        {cartItems.length < 1 ? (
          <EmptyCart>
            <h3>Your cart is empty</h3>
            <p>You have no items in your cart.</p>
            <AiOutlineShoppingCart />
          </EmptyCart>
        ) : (
          cartItems.map((item) => (
            <Card key={item.id}>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />

              <CardInfo>
                <h3>{item.title}</h3>
                <p>
                  <strong>Price: {item.price}</strong>
                </p>
                <QuantityWrapper>
                  <span>
                    <strong>Quantity: </strong>
                  </span>
                  <button
                    onClick={() => addToCart(item, -1)}
                    disabled={item.quantity === 1}
                  >
                    <AiFillMinusCircle />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => addToCart(item, 1)}>
                    <AiFillPlusCircle />
                  </button>
                </QuantityWrapper>
              </CardInfo>
            </Card>
          ))
        )}
      </CartStyle>
    </CartWrapper>
  );
}
