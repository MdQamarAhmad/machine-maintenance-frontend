function StatusBadge({ status }) {
  const statusStyles = {
    Running: {
      background: "#dcfce7",
      color: "#166534",
    },

    Maintenance: {
      background: "#fef3c7",
      color: "#92400e",
    },

    Breakdown: {
      background: "#fee2e2",
      color: "#991b1b",
    },

    Inactive: {
      background: "#e5e7eb",
      color: "#374151",
    },

    Pending: {
      background: "#fef3c7",
      color: "#92400e",
    },

    "In Progress": {
      background: "#dbeafe",
      color: "#1e40af",
    },

    Completed: {
      background: "#dcfce7",
      color: "#166534",
    },

    Available: {
      background: "#dcfce7",
      color: "#166534",
    },

    Busy: {
      background: "#fef3c7",
      color: "#92400e",
    },

    "On Leave": {
      background: "#fee2e2",
      color: "#991b1b",
    },

    "Low Stock": {
      background: "#fef3c7",
      color: "#92400e",
    },

    "Out of Stock": {
      background: "#fee2e2",
      color: "#991b1b",
    },

    Available: {
      background: "#dcfce7",
      color: "#166534",
    },
  };

  const currentStyle = statusStyles[status] || {
    background: "#e5e7eb",
    color: "#374151",
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        ...currentStyle,
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;