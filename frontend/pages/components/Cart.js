import { useStateContext } from "../../lib/context";
import {
  CartStyle,
  CartWrapper,
  Cards,
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

// Variants with framer motion
const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const cardsVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, addToCart, removeFromCart, totalPrice } =
    useStateContext();
  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        transition={{ type: "tween", duration: 0.5 }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Cards
          variants={cardsVariant}
          initial="hidden"
          animate="visible"
          layout
        >
          {cartItems.length < 1 ? (
            <EmptyCart
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <h3>Your cart is empty</h3>
              <p>You have no items in your cart.</p>
              <AiOutlineShoppingCart />
            </EmptyCart>
          ) : (
            cartItems.map((item) => (
              <Card variants={cardVariant} layout key={item.id}>
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
        </Cards>
        {cartItems.length >= 1 && (
          <div>
            <p>
              <strong>Total: GHC{totalPrice}</strong>
            </p>

            <CheckoutBtn layout>Checkout</CheckoutBtn>
          </div>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
