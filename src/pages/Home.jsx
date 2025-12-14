import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { products } from "../data/products";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All categories", ...unique];
  }, []);

  return (
    <section className="page">
      {/* HERO */}
      <div className="hero">
        <h1 className="heroTitle">Modern essentials for everyday life</h1>
        <p className="heroSubtitle">
          Curated products. Clean design. Fast delivery.
        </p>
      </div>

      {/* PAGE HEAD */}
      <div className="page-head">
        <div>
          <h2 className="page-title">Shop</h2>
          <p className="page-subtitle">Browse our demo products.</p>
        </div>

        <div className="filters">
          <input className="input" placeholder="Search products..." />
          <select className="select" defaultValue="All categories">
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* GRID */}
      <div className="grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
