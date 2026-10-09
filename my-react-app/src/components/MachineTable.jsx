import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function MachineTable({ machines = [], onDelete }) {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        background: "#fff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "800px",
        }}
      >
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            <th style={thStyle}>Machine ID</th>
            <th style={thStyle}>Machine Name</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {machines.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                style={{
                  padding: "30px",
                  textAlign: "center",
                  color: "#6b7280",
                }}
              >
                No machines found.
              </td>
            </tr>
          ) : (
            machines.map((machine) => (
              <tr key={machine.id}>
                <td style={tdStyle}>{machine.id}</td>

                <td style={{ ...tdStyle, fontWeight: "600" }}>
                  {machine.name}
                </td>

                <td style={tdStyle}>{machine.department}</td>

                <td style={tdStyle}>{machine.location}</td>

                <td style={tdStyle}>{machine.type}</td>

                <td style={tdStyle}>
                  <StatusBadge status={machine.status} />
                </td>

                <td style={tdStyle}>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      to={`/machine/${machine.id}`}
                      style={actionStyle("#2563eb")}
                    >
                      View
                    </Link>

                    <Link
                      to={`/edit-machine/${machine.id}`}
                      style={actionStyle("#16a34a")}
                    >
                      Edit
                    </Link>

                    {onDelete && (
                      <button
                        onClick={() => onDelete(machine.id)}
                        style={{
                          ...actionStyle("#dc2626"),
                          border: "none",
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "14px 12px",
  textAlign: "left",
  fontSize: "13px",
  color: "#374151",
  borderBottom: "1px solid #e5e7eb",
  whiteSpace: "nowrap",
};

const tdStyle = {
  padding: "14px 12px",
  fontSize: "14px",
  color: "#374151",
  borderBottom: "1px solid #f3f4f6",
};

const actionStyle = (background) => ({
  display: "inline-block",
  background,
  color: "#fff",
  padding: "6px 10px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  cursor: "pointer",
});

export default MachineTable;