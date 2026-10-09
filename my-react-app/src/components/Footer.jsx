function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "#d1d5db",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Machine Maintenance Management System
      </p>

      <p
        style={{
          margin: "6px 0 0",
          color: "#9ca3af",
          fontSize: "13px",
        }}
      >
        Maintenance • Machines • Technicians • Spare Parts • Reports
      </p>
    </footer>
  );
}

export default Footer;