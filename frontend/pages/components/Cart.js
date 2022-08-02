import { useStateContext } from "../../lib/context";
import {
  CartStyle,
  CartWrapper,
  Card,
  CardInfo,
  EmptyCart,
  QuantityWrapper,
  CheckoutBtn,
} from "../../styles/CartStyles";
import {
  AiOutlineShoppingCart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, addToCart, removeFromCart, totalPrice } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
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
                  <strong>Price: GHC{item.price}</strong>
                </p>
                <QuantityWrapper>
                  <span>
                    <strong>Quantity: </strong>
                  </span>
                  <button onClick={() => removeFromCart(item)}>
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
        {cartItems.length >= 0 && (
          <div>
            <p>
              <strong>Total: GHC{totalPrice}</strong>
            </p>

            <CheckoutBtn>Checkout</CheckoutBtn>
          </div>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
