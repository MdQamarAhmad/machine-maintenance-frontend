import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav
      style={{
        height: "64px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/dashboard"
        style={{
          textDecoration: "none",
          color: "#111827",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        MMMS
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/machines" style={linkStyle}>
          Machines
        </Link>

        <Link to="/maintenance" style={linkStyle}>
          Maintenance
        </Link>

        <Link to="/technicians" style={linkStyle}>
          Technicians
        </Link>

        <Link to="/spare-parts" style={linkStyle}>
          Spare Parts
        </Link>

        <Link to="/reports" style={linkStyle}>
          Reports
        </Link>

        <button
          onClick={handleLogout}
          style={{
            background: "#dc2626",
            color: "#fff",
            border: "none",
            padding: "8px 14px",
            borderRadius: "7px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#374151",
  fontSize: "14px",
  fontWeight: "500",
};

export default Navbar;