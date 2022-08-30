import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavMenu, NavWrapper } from "../../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";
import User from "./User";
import { UseUser } from "@auth0/nextjs-auth0";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  return (
    <NavWrapper>
      <Link href="/">FarmHub</Link>

      <NavMenu>
        <User />
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
