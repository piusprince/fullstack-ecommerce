import { FooterWrapper } from "../../styles/FooterStyles";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2020 FarmHub</p>
      <div>
        <h2>Get to know us</h2>
        <Link href="/about">About</Link>
        <p>Careers</p>
      </div>
      <div>
        <h2>Payments & Promos</h2>
        <p>Get promo codes</p>
        <p>Win special discounts</p>
      </div>
    </FooterWrapper>
  );
}
