function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "#fff",
    },
    secondary: {
      background: "#6b7280",
      color: "#fff",
    },
    success: {
      background: "#16a34a",
      color: "#fff",
    },
    danger: {
      background: "#dc2626",
      color: "#fff",
    },
    warning: {
      background: "#f59e0b",
      color: "#fff",
    },
    outline: {
      background: "#fff",
      color: "#2563eb",
      border: "1px solid #2563eb",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        border: styles[variant].border || "none",
        padding: "10px 18px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "0.2s",
      }}
    >
      {children}
    </button>
  );
}

export default Button;