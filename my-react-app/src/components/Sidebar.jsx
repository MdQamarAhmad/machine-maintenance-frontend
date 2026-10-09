import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Machines",
      path: "/machines",
    },
    {
      name: "Maintenance",
      path: "/maintenance",
    },
    {
      name: "Technicians",
      path: "/technicians",
    },
    {
      name: "Spare Parts",
      path: "/spare-parts",
    },
    {
      name: "Reports",
      path: "/reports",
    },
  ];

  return (
    <aside
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "#111827",
        padding: "20px 12px",
        boxSizing: "border-box",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: "700",
          padding: "10px 14px 25px",
          borderBottom: "1px solid #374151",
          marginBottom: "15px",
        }}
      >
        MMMS
      </div>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "11px",
          padding: "0 14px",
          marginBottom: "10px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Main Menu
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "block",
              padding: "12px 14px",
              borderRadius: "7px",
              textDecoration: "none",
              color: isActive ? "#fff" : "#d1d5db",
              background: isActive ? "#2563eb" : "transparent",
              fontSize: "14px",
              fontWeight: isActive ? "600" : "400",
              transition: "0.2s",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;