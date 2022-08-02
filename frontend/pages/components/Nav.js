import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavMenu, NavWrapper } from "../../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <NavWrapper>
      <Link href="/">Drip Hub</Link>
      <NavMenu>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              {totalQuantities}
            </motion.span>
          )}
          <AiOutlineShoppingCart fontSize={25} />
          <h3>Cart</h3>
        </div>
      </NavMenu>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavWrapper>
  );
}
