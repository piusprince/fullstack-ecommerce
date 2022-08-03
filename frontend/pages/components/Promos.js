import { LargeLogo, PromoText, PromoWrapper } from "../../styles/PromosStyles";

export default function Promos() {
  return (
    <PromoWrapper>
      <LargeLogo>
        <h2>
          Farm<span>Hub</span>
        </h2>
      </LargeLogo>
      <PromoText>
        <h1>Never miss a promo</h1>
        <p>
          Be the first to know about our latest promotions and special offers.
          Sign up to our newsletter to receive them in your inbox.
        </p>
        <button>Sign up</button>
      </PromoText>
    </PromoWrapper>
  );
}
