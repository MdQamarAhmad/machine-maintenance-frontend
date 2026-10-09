import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function MachineCard({ machine }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "15px",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 5px",
              fontSize: "18px",
              color: "#111827",
            }}
          >
            {machine.name}
          </h3>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "13px",
            }}
          >
            {machine.id}
          </p>
        </div>

        <StatusBadge status={machine.status} />
      </div>

      <div
        style={{
          display: "grid",
          gap: "8px",
          marginBottom: "18px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "#374151" }}>
          <strong>Department:</strong> {machine.department}
        </p>

        <p style={{ margin: 0, fontSize: "14px", color: "#374151" }}>
          <strong>Location:</strong> {machine.location}
        </p>

        <p style={{ margin: 0, fontSize: "14px", color: "#374151" }}>
          <strong>Type:</strong> {machine.type}
        </p>
      </div>

      <Link
        to={`/machine/${machine.id}`}
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#fff",
          padding: "9px 14px",
          borderRadius: "7px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default MachineCard;