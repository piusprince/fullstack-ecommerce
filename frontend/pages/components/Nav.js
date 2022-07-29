import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavMenu, NavWrapper } from "../../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";

export default function Nav() {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavWrapper>
      <Link href="/">Drip Hub</Link>
      <NavMenu>
        <div onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart fontSize={25} />
          <h3>Cart</h3>
        </div>
      </NavMenu>
      {showCart && <Cart />}
      {/* <Cart /> */}
    </NavWrapper>
  );
}
