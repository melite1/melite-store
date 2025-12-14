import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="page">
      <h1 className="page-title">Cart</h1>
      <p className="page-subtitle">Cart UI is next ✅</p>

      <Link className="btn" to="/checkout">
        Go to Checkout →
      </Link>
    </section>
  );
}
