export default function ProductSkeleton() {
  return (
    <div className="card skeleton">
      <div className="cardMedia">
        <div className="skeleton-img" />
      </div>

      <div className="cardBody">
        <div className="skeleton-line sm" />
        <div className="skeleton-line lg" />
        <div className="skeleton-line md" />
      </div>
    </div>
  );
}
