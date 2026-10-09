import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditMachine.css";

function EditMachine() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary machine data
  const [formData, setFormData] = useState({
    machineId: id || "MCH-001",
    machineName: "CNC Machine",
    department: "Transaxle Shop",
    location: "Line 1",
    machineType: "CNC",
    manufacturer: "Siemens",
    modelNumber: "CNC-X100",
    installationDate: "2025-05-15",
    status: "Running",
    description:
      "CNC machine used for precision machining operations.",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Machine:", formData);

    // Backend API will be connected here later.

    alert("Machine updated successfully!");

    navigate("/machines");
  };

  return (
    <div className="edit-machine-page">

      {/* Header */}
      <div className="edit-machine-header">

        <div>
          <h1>Edit Machine</h1>
          <p>
            Update machine information and current status.
          </p>
        </div>

        <Link
          to="/machines"
          className="back-btn"
        >
          ← Back to Machines
        </Link>

      </div>


      {/* Form */}
      <div className="edit-machine-container">

        <form onSubmit={handleSubmit}>

          {/* Machine Information */}
          <div className="form-section">

            <h2>Machine Information</h2>

            <div className="form-grid">

              {/* Machine ID */}
              <div className="form-group">

                <label>Machine ID *</label>

                <input
                  type="text"
                  name="machineId"
                  value={formData.machineId}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Machine Name */}
              <div className="form-group">

                <label>Machine Name *</label>

                <input
                  type="text"
                  name="machineName"
                  value={formData.machineName}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Department */}
              <div className="form-group">

                <label>Department *</label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Department
                  </option>

                  <option value="Transaxle Shop">
                    Transaxle Shop
                  </option>

                  <option value="Engine Shop">
                    Engine Shop
                  </option>

                  <option value="Production">
                    Production
                  </option>

                  <option value="Assembly">
                    Assembly
                  </option>

                  <option value="Maintenance">
                    Maintenance
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* Location */}
              <div className="form-group">

                <label>Location *</label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Example: Line 1"
                  required
                />

              </div>


              {/* Machine Type */}
              <div className="form-group">

                <label>Machine Type *</label>

                <select
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Machine Type
                  </option>

                  <option value="CNC">
                    CNC
                  </option>

                  <option value="Lathe">
                    Lathe
                  </option>

                  <option value="Press">
                    Press
                  </option>

                  <option value="Drilling">
                    Drilling Machine
                  </option>

                  <option value="Grinding">
                    Grinding Machine
                  </option>

                  <option value="Assembly">
                    Assembly Machine
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* Manufacturer */}
              <div className="form-group">

                <label>Manufacturer</label>

                <input
                  type="text"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                  placeholder="Example: Siemens"
                />

              </div>


              {/* Model Number */}
              <div className="form-group">

                <label>Model Number</label>

                <input
                  type="text"
                  name="modelNumber"
                  value={formData.modelNumber}
                  onChange={handleChange}
                  placeholder="Example: CNC-X100"
                />

              </div>


              {/* Installation Date */}
              <div className="form-group">

                <label>Installation Date</label>

                <input
                  type="date"
                  name="installationDate"
                  value={formData.installationDate}
                  onChange={handleChange}
                />

              </div>


              {/* Status */}
              <div className="form-group">

                <label>Machine Status *</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >

                  <option value="Running">
                    Running
                  </option>

                  <option value="Maintenance">
                    Maintenance
                  </option>

                  <option value="Breakdown">
                    Breakdown
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>

            </div>

          </div>


          {/* Description */}
          <div className="form-section">

            <h2>Description</h2>

            <div className="form-group">

              <label>Machine Description</label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Enter machine details..."
              />

            </div>

          </div>


          {/* Buttons */}
          <div className="form-buttons">

            <Link
              to="/machines"
              className="cancel-btn"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="update-btn"
            >
              ✓ Update Machine
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditMachine;