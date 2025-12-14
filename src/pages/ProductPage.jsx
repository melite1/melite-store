import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { formatUSD } from "../utils/formatCurrency";
import ProductCard from "../components/ProductCard";
import { useMemo, useState } from "react";

export default function ProductPage() {
  const { id } = useParams();

  const product = useMemo(
    () => products.find((p) => String(p.id) === String(id)),
    [id]
  );

  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("details"); // details | shipping | reviews

  if (!product) {
    return (
      <section className="page product-page">
        <h2 className="page-title">Product not found</h2>
        <p className="page-subtitle">
          The product may have been removed or the link is wrong.
        </p>
        <Link className="btn" to="/">
          Back to shop
        </Link>
      </section>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <section className="page product-page">
      <div className="product-breadcrumb">
        <Link to="/" className="btn btn-ghost">
          ← Back to shop
        </Link>
      </div>

      <div className="product-layout">
        <div className="product-media">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <div className="product-head">
            <span className="pill">{product.category}</span>
            <h1 className="product-title">{product.title}</h1>
          </div>

          <div className="product-meta">
            <p className="product-price">{formatUSD(product.price)}</p>
            <p className="rating">★ {product.rating}</p>
          </div>

          <p className="product-desc">{product.description}</p>

          <div className="trustRow">
            <div className="trustItem">✅ Free returns</div>
            <div className="trustItem">🚚 2–5 days delivery</div>
            <div className="trustItem">🔒 Secure checkout</div>
          </div>

          <div className="qtyRow">
            <span className="qtyLabel">Quantity</span>
            <div className="qtyControl">
              <button
                type="button"
                className="qtyBtn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                className="qtyInput"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value || 1)))
                }
              />
              <button
                type="button"
                className="qtyBtn"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-primary btn-full">
              Add to cart • {formatUSD(product.price * qty)}
            </button>

            <Link className="btn btn-ghost btn-full" to="/cart">
              Go to cart
            </Link>
          </div>

          <div className="tabs">
            <button
              className={`tab ${tab === "details" ? "tabActive" : ""}`}
              onClick={() => setTab("details")}
              type="button"
            >
              Details
            </button>
            <button
              className={`tab ${tab === "shipping" ? "tabActive" : ""}`}
              onClick={() => setTab("shipping")}
              type="button"
            >
              Shipping
            </button>
            <button
              className={`tab ${tab === "reviews" ? "tabActive" : ""}`}
              onClick={() => setTab("reviews")}
              type="button"
            >
              Reviews
            </button>
          </div>

          <div className="tabPanel">
            {tab === "details" && (
              <ul className="bullets">
                <li>Premium quality build and clean finish</li>
                <li>Designed for everyday comfort</li>
                <li>Category: {product.category}</li>
              </ul>
            )}

            {tab === "shipping" && (
              <div className="muted">
                <p style={{ marginTop: 0 }}>
                  Delivery takes 2–5 business days depending on your location.
                </p>
                <p style={{ marginBottom: 0 }}>
                  Returns are free within 7 days for eligible items.
                </p>
              </div>
            )}

            {tab === "reviews" && (
              <div className="muted">
                <p style={{ marginTop: 0 }}>
                  ⭐ {product.rating} average rating (demo)
                </p>
                <p style={{ marginBottom: 0 }}>
                  Reviews feature coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="divider" />

      <h3 className="sectionTitle">You may also like</h3>
      <div className="grid" style={{ marginTop: 12 }}>
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
