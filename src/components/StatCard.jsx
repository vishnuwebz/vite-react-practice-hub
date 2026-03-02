function StatCard({ label, value, accent = "primary" }) {
  const badgeClass = `badge bg-${accent}`;

  return (
    <div className="stat-card border rounded-3 p-3 mb-2">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="text-secondary text-uppercase small fw-semibold">
            {label}
          </div>
          <div className="fs-5 fw-semibold">{value}</div>
        </div>
        <span className={badgeClass}>Stat</span>
      </div>
    </div>
  );
}

export default StatCard;
