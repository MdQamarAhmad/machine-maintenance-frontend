import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMaintenance() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    machine: "",
    date: "",
    maintenanceType: "Preventive",
    problem: "",
    solution: "",
    technician: "",
    status: "Pending",
    downtime: "",
    spareParts: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Maintenance Data:", formData);

    alert("Maintenance record added successfully!");

    navigate("/maintenance");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "28px",
            }}
          >
            Add Maintenance
          </h1>

          <p
            style={{
              margin: "6px 0 0",
              color: "#6b7280",
            }}
          >
            Create a new machine maintenance record
          </p>
        </div>

        <button
          onClick={() => navigate("/maintenance")}
          style={{
            background: "#6b7280",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back
        </button>
      </div>

      {/* Form Card */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          border: "1px solid #e5e7eb",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Machine & Date */}
          <div style={sectionTitle}>
            Machine Information
          </div>

          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>Machine</label>

              <select
                name="machine"
                value={formData.machine}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Select Machine</option>
                <option value="MCH-001 - CNC Machine">
                  MCH-001 - CNC Machine
                </option>
                <option value="MCH-002 - Hydraulic Press">
                  MCH-002 - Hydraulic Press
                </option>
                <option value="MCH-003 - Lathe Machine">
                  MCH-003 - Lathe Machine
                </option>
                <option value="MCH-004 - Drilling Machine">
                  MCH-004 - Drilling Machine
                </option>
                <option value="MCH-005 - Grinding Machine">
                  MCH-005 - Grinding Machine
                </option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Maintenance Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>

          {/* Maintenance Details */}
          <div style={sectionTitle}>
            Maintenance Details
          </div>

          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>Maintenance Type</label>

              <select
                name="maintenanceType"
                value={formData.maintenanceType}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Preventive">Preventive</option>
                <option value="Breakdown">Breakdown</option>
                <option value="Corrective">Corrective</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Technician</label>

              <select
                name="technician"
                value={formData.technician}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Select Technician</option>
                <option value="Rahul Sharma">
                  Rahul Sharma - Mechanical
                </option>
                <option value="Amit Kumar">
                  Amit Kumar - Electrical
                </option>
                <option value="Rohit Verma">
                  Rohit Verma - Mechanical
                </option>
                <option value="Vikas Patel">
                  Vikas Patel - Electrical
                </option>
                <option value="Suresh Singh">
                  Suresh Singh - Pneumatic
                </option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>
                Downtime (Hours)
              </label>

              <input
                type="number"
                name="downtime"
                value={formData.downtime}
                onChange={handleChange}
                placeholder="Example: 2.5"
                min="0"
                step="0.5"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Problem */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>Problem</label>

            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Describe the machine problem..."
              rows="4"
              required
              style={textareaStyle}
            />
          </div>

          {/* Solution */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>Solution / Work Performed</label>

            <textarea
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              placeholder="Describe what work was performed..."
              rows="4"
              required
              style={textareaStyle}
            />
          </div>

          {/* Spare Parts */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>
              Spare Parts Used
            </label>

            <textarea
              name="spareParts"
              value={formData.spareParts}
              onChange={handleChange}
              placeholder="Example: Air Pipe, Cable Tie, Motor Bearing"
              rows="3"
              style={textareaStyle}
            />
          </div>

          {/* Remarks */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>Remarks</label>

            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Additional remarks..."
              rows="3"
              style={textareaStyle}
            />
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "30px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "20px",
            }}
          >
            <button
              type="button"
              onClick={() => navigate("/maintenance")}
              style={{
                padding: "11px 22px",
                background: "#e5e7eb",
                color: "#374151",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: "11px 22px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Add Maintenance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const labelStyle = {
  display: "block",
  marginBottom: "7px",
  color: "#374151",
  fontSize: "14px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "7px",
  fontSize: "14px",
  background: "#fff",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "7px",
  fontSize: "14px",
  resize: "vertical",
  fontFamily: "inherit",
  outline: "none",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#111827",
  marginTop: "10px",
  marginBottom: "18px",
  paddingBottom: "10px",
  borderBottom: "1px solid #e5e7eb",
};

export default AddMaintenance;