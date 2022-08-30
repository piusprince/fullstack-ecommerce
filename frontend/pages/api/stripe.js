import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { cartItems } = req.body;

    try {
      // Create checkout session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "GH", "KE", "NG", "CA", "GB", "AU", "NZ"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          {
            shipping_rate: "shr_1LcIX2ExMvZw8jQeP79NH5yV",
          },
          {
            shipping_rate: "shr_1LcIn0ExMvZw8jQekmks0pta",
          },
        ],

        line_items: cartItems.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),

        // redirect to success page or cancel page
        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (error) {
      console.log("this shit broke", error);
      res.status(500).json({ error });
      // res.status(error.statusCode || 500).json(error.message);
    }
  }
}
