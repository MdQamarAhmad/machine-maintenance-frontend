import { Link } from "react-router-dom";
import "./Reports.css";

function Reports() {
  // Temporary data
  // Later this will come from MongoDB
  const maintenanceData = [
    {
      machine: "CNC-001",
      problem: "Air Pipe Broken",
      type: "Breakdown",
      technician: "Rahul",
      downtime: 30,
      status: "Completed",
      date: "22 Sep 2026",
    },
    {
      machine: "Press-002",
      problem: "Motor Issue",
      type: "Breakdown",
      technician: "Amit",
      downtime: 90,
      status: "In Progress",
      date: "21 Sep 2026",
    },
    {
      machine: "Lathe-003",
      problem: "Loose Cable",
      type: "Preventive",
      technician: "Rohit",
      downtime: 20,
      status: "Completed",
      date: "20 Sep 2026",
    },
    {
      machine: "Drill-004",
      problem: "Abnormal Noise",
      type: "Breakdown",
      technician: "Vikas",
      downtime: 60,
      status: "Pending",
      date: "19 Sep 2026",
    },
  ];

  return (
    <div className="reports-page">

      {/* Header */}
      <div className="reports-header">
        <div>
          <h1>Maintenance Reports</h1>
          <p>
            Analyze machine maintenance activities and performance.
          </p>
        </div>

        <Link to="/dashboard" className="back-dashboard-btn">
          ← Dashboard
        </Link>
      </div>


      {/* Summary Cards */}
      <div className="report-stats">

        <div className="report-card">
          <div className="report-card-icon">🔧</div>

          <div>
            <h3>24</h3>
            <p>Total Maintenance</p>
          </div>
        </div>


        <div className="report-card">
          <div className="report-card-icon">⚠️</div>

          <div>
            <h3>8</h3>
            <p>Breakdowns</p>
          </div>
        </div>


        <div className="report-card">
          <div className="report-card-icon">🛠️</div>

          <div>
            <h3>16</h3>
            <p>Preventive Maintenance</p>
          </div>
        </div>


        <div className="report-card">
          <div className="report-card-icon">⏱️</div>

          <div>
            <h3>12.5h</h3>
            <p>Total Downtime</p>
          </div>
        </div>

      </div>


      {/* Report Grid */}
      <div className="report-grid">

        {/* Machine Status */}
        <div className="report-section">

          <h2>Machine Status</h2>

          <div className="status-report">

            <div className="status-report-row">
              <span>
                <span className="dot running-dot"></span>
                Running
              </span>

              <strong>20</strong>
            </div>


            <div className="status-report-row">
              <span>
                <span className="dot maintenance-dot"></span>
                Maintenance
              </span>

              <strong>3</strong>
            </div>


            <div className="status-report-row">
              <span>
                <span className="dot breakdown-dot"></span>
                Breakdown
              </span>

              <strong>2</strong>
            </div>


            <div className="status-report-row">
              <span>
                <span className="dot inactive-dot"></span>
                Inactive
              </span>

              <strong>1</strong>
            </div>

          </div>

        </div>


        {/* Maintenance Type */}
        <div className="report-section">

          <h2>Maintenance Type</h2>

          <div className="type-report">

            <div className="type-row">

              <div className="type-info">
                <span>Preventive</span>
                <strong>16</strong>
              </div>

              <div className="progress-background">
                <div
                  className="progress-bar preventive"
                  style={{ width: "67%" }}
                ></div>
              </div>

            </div>


            <div className="type-row">

              <div className="type-info">
                <span>Breakdown</span>
                <strong>8</strong>
              </div>

              <div className="progress-background">
                <div
                  className="progress-bar breakdown"
                  style={{ width: "33%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Machine Performance */}
      <div className="report-section machine-performance">

        <div className="section-title">

          <div>
            <h2>Machine Performance</h2>

            <p>
              Maintenance and downtime summary by machine.
            </p>
          </div>

        </div>


        <div className="performance-table">

          <div className="performance-header">
            <span>Machine</span>
            <span>Maintenance</span>
            <span>Breakdowns</span>
            <span>Downtime</span>
            <span>Status</span>
          </div>


          <div className="performance-row">
            <span>CNC-001</span>
            <span>5</span>
            <span>1</span>
            <span>2.5h</span>
            <span className="running-text">Running</span>
          </div>


          <div className="performance-row">
            <span>Press-002</span>
            <span>7</span>
            <span>3</span>
            <span>5h</span>
            <span className="maintenance-text">
              Maintenance
            </span>
          </div>


          <div className="performance-row">
            <span>Lathe-003</span>
            <span>4</span>
            <span>1</span>
            <span>1.5h</span>
            <span className="running-text">Running</span>
          </div>


          <div className="performance-row">
            <span>Drill-004</span>
            <span>8</span>
            <span>3</span>
            <span>3.5h</span>
            <span className="breakdown-text">
              Breakdown
            </span>
          </div>

        </div>

      </div>


      {/* Recent Maintenance */}
      <div className="report-section recent-report">

        <div className="section-title">

          <div>
            <h2>Recent Maintenance Records</h2>

            <p>
              Latest maintenance activities.
            </p>
          </div>

          <Link
            to="/maintenance"
            className="view-maintenance-btn"
          >
            View All
          </Link>

        </div>


        <div className="recent-table">

          <div className="recent-header">
            <span>Date</span>
            <span>Machine</span>
            <span>Problem</span>
            <span>Type</span>
            <span>Technician</span>
            <span>Downtime</span>
            <span>Status</span>
          </div>


          {maintenanceData.map((record, index) => (

            <div
              className="recent-row"
              key={index}
            >

              <span>{record.date}</span>

              <span>{record.machine}</span>

              <span>{record.problem}</span>

              <span>{record.type}</span>

              <span>{record.technician}</span>

              <span>{record.downtime} min</span>

              <span
                className={
                  record.status === "Completed"
                    ? "completed-text"
                    : record.status === "In Progress"
                    ? "progress-text"
                    : "pending-text"
                }
              >
                {record.status}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* Future Reports */}
      <div className="report-actions">

        <h2>Reports & Analysis</h2>

        <div className="report-action-grid">

          <div className="report-action-card">
            <span>📊</span>
            <h3>Maintenance Report</h3>
            <p>
              View complete maintenance history.
            </p>
          </div>


          <div className="report-action-card">
            <span>⏱️</span>
            <h3>Downtime Report</h3>
            <p>
              Analyze machine downtime.
            </p>
          </div>


          <div className="report-action-card">
            <span>⚠️</span>
            <h3>Breakdown Report</h3>
            <p>
              Track machine breakdown frequency.
            </p>
          </div>


          <div className="report-action-card">
            <span>👨‍🔧</span>
            <h3>Technician Report</h3>
            <p>
              Track maintenance work performed by technicians.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;