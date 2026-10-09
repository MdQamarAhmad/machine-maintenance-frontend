function Loading({ message = "Loading..." }) {
  return (
    <div
      style={{
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #e5e7eb",
          borderTop: "4px solid #2563eb",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <p
        style={{
          margin: 0,
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        {message}
      </p>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;