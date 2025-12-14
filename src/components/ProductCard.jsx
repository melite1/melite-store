// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { formatUSD } from "../utils/formatCurrency";
import { assetPath } from "../utils/assetPath";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="cardLink">
        <div className="cardMedia">
          <img
            className="cardImg"
            src={assetPath(product.image)}
            alt={product.title}
            loading="lazy"
          />
        </div>

        <div className="cardBody">
          <div className="cardTop">
            <span className="pill">{product.category}</span>
            <span className="rating">★ {product.rating}</span>
          </div>

          <h3 className="cardTitle" title={product.title}>
            {product.title}
          </h3>

          <div className="cardMeta">
            <p className="cardPrice">{formatUSD(product.price)}</p>

            <button
              className="quickAdd"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert("Added to cart (demo)");
              }}
              aria-label={`Quick add ${product.title}`}
            >
              + Add
            </button>

            <span className="chip">Free returns</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
