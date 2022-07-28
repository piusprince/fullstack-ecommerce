import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavMenu, NavWrapper } from "../../styles/NavStyles";

export default function Nav() {
  return (
    <NavWrapper>
      <Link href="/">Drip Hub</Link>
      <NavMenu>
        <div>
          <AiOutlineShoppingCart fontSize={25} />
          <h3>Cart</h3>
        </div>
      </NavMenu>
    </NavWrapper>
  );
}
