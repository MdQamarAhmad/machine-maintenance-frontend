import { Link, useParams } from "react-router-dom";
import "./MachineDetails.css";

function MachineDetails() {
  const { id } = useParams();

  // Temporary data
  // Later this data will come from MongoDB
  const machine = {
    machineId: id || "MCH-001",
    machineName: "CNC Machine",
    department: "Transaxle Shop",
    location: "Line 1",
    machineType: "CNC",
    manufacturer: "Siemens",
    modelNumber: "CNC-X100",
    installationDate: "15 May 2025",
    status: "Running",
    description:
      "CNC machine used for precision machining operations in the Transaxle Shop.",
  };

  const maintenanceHistory = [
    {
      id: 1,
      date: "22 Sep 2026",
      problem: "Air Pipe Broken",
      solution: "Damaged section cut and pipe rejoined",
      type: "Breakdown",
      technician: "Rahul",
      status: "Completed",
    },
    {
      id: 2,
      date: "10 Sep 2026",
      problem: "Loose Cable",
      solution: "Cable properly secured",
      type: "Preventive",
      technician: "Amit",
      status: "Completed",
    },
    {
      id: 3,
      date: "25 Aug 2026",
      problem: "Oil Leakage",
      solution: "Leakage point repaired",
      type: "Breakdown",
      technician: "Rohit",
      status: "Completed",
    },
  ];

  return (
    <div className="machine-details-page">

      {/* Header */}
      <div className="machine-details-header">

        <div>
          <h1>Machine Details</h1>

          <p>
            Complete information and maintenance history
          </p>
        </div>

        <div className="header-buttons">

          <Link
            to="/machines"
            className="back-btn"
          >
            ← Back
          </Link>

          <Link
            to={`/edit-machine/${machine.machineId}`}
            className="edit-btn"
          >
            ✏ Edit Machine
          </Link>

        </div>

      </div>


      {/* Machine Overview */}
      <div className="machine-overview">

        {/* Machine Title */}
        <div className="machine-title">

          <div className="machine-icon">
            🏭
          </div>

          <div>
            <h2>{machine.machineName}</h2>

            <p>
              Machine ID: {machine.machineId}
            </p>
          </div>

        </div>


        {/* Status */}
        <div className="machine-current-status">

          <span className="status-label">
            Current Status
          </span>

          <span className="status running">
            ● {machine.status}
          </span>

        </div>

      </div>


      {/* Information Cards */}
      <div className="information-section">

        <h2>Machine Information</h2>

        <div className="information-grid">

          <div className="info-card">
            <span>Machine ID</span>
            <strong>{machine.machineId}</strong>
          </div>

          <div className="info-card">
            <span>Machine Type</span>
            <strong>{machine.machineType}</strong>
          </div>

          <div className="info-card">
            <span>Department</span>
            <strong>{machine.department}</strong>
          </div>

          <div className="info-card">
            <span>Location</span>
            <strong>{machine.location}</strong>
          </div>

          <div className="info-card">
            <span>Manufacturer</span>
            <strong>{machine.manufacturer}</strong>
          </div>

          <div className="info-card">
            <span>Model Number</span>
            <strong>{machine.modelNumber}</strong>
          </div>

          <div className="info-card">
            <span>Installation Date</span>
            <strong>{machine.installationDate}</strong>
          </div>

          <div className="info-card">
            <span>Current Status</span>
            <strong>{machine.status}</strong>
          </div>

        </div>

      </div>


      {/* Description */}
      <div className="description-section">

        <h2>Description</h2>

        <p>
          {machine.description}
        </p>

      </div>


      {/* Maintenance History */}
      <div className="history-section">

        <div className="section-header">

          <div>
            <h2>Maintenance History</h2>

            <p>
              Previous maintenance activities for this machine
            </p>
          </div>

          <Link
            to="/add-maintenance"
            className="add-maintenance-btn"
          >
            + Add Maintenance
          </Link>

        </div>


        <div className="history-table">

          <div className="history-header">

            <span>Date</span>
            <span>Problem</span>
            <span>Solution</span>
            <span>Type</span>
            <span>Technician</span>
            <span>Status</span>

          </div>


          {maintenanceHistory.map((record) => (

            <div
              className="history-row"
              key={record.id}
            >

              <span>{record.date}</span>

              <span>{record.problem}</span>

              <span>{record.solution}</span>

              <span>{record.type}</span>

              <span>{record.technician}</span>

              <span className="completed">
                {record.status}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* Bottom Actions */}
      <div className="bottom-actions">

        <Link
          to="/machines"
          className="secondary-btn"
        >
          ← Back to Machines
        </Link>

        <Link
          to={`/edit-machine/${machine.machineId}`}
          className="primary-btn"
        >
          Edit Machine
        </Link>

      </div>

    </div>
  );
}

export default MachineDetails;