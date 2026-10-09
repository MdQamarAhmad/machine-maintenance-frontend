import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Hero Section */}
      <section className="dashboard-hero">

        <div className="hero-content">
          <span className="hero-tag">⚙️ MAINTENANCE MANAGEMENT</span>

          <h1>
            Maintenance
            <span> Dashboard</span>
          </h1>

          <p>
            Monitor machines, track maintenance activities and keep
            production running smoothly.
          </p>

          <div className="hero-buttons">
            <Link to="/add-maintenance" className="hero-btn">
              + Add Maintenance
            </Link>

            <Link to="/machines" className="hero-outline-btn">
              View Machines →
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
            alt="Industrial maintenance"
          />

          <div className="floating-card floating-card-one">
            <span>🟢</span>
            <div>
              <strong>20</strong>
              <small>Running</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>🔧</span>
            <div>
              <strong>3</strong>
              <small>Maintenance</small>
            </div>
          </div>
        </div>

      </section>


      {/* Statistics */}
      <section className="dashboard-stats">

        <div className="dashboard-card card-blue">
          <div className="card-icon">🏭</div>
          <div>
            <h3>25</h3>
            <p>Total Machines</p>
          </div>
        </div>

        <div className="dashboard-card card-green">
          <div className="card-icon">🟢</div>
          <div>
            <h3>20</h3>
            <p>Running</p>
          </div>
        </div>

        <div className="dashboard-card card-orange">
          <div className="card-icon">🔧</div>
          <div>
            <h3>3</h3>
            <p>Under Maintenance</p>
          </div>
        </div>

        <div className="dashboard-card card-red">
          <div className="card-icon">⚠️</div>
          <div>
            <h3>2</h3>
            <p>Breakdowns</p>
          </div>
        </div>

      </section>


      {/* Machine Status + Maintenance Summary */}
      <div className="dashboard-grid">

        {/* Machine Status */}
        <div className="dashboard-section">

          <div className="section-header">
            <div>
              <span className="section-label">LIVE MONITORING</span>
              <h2>Machine Status</h2>
            </div>

            <Link to="/machines">
              View All →
            </Link>
          </div>

          <div className="machine-status">

            <div className="status-row">
              <div className="machine-info">
                <div className="machine-image">
                  <img
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=150&q=80"
                    alt="CNC Machine"
                  />
                </div>

                <div>
                  <strong>CNC-001</strong>
                  <span>Transaxle Shop</span>
                </div>
              </div>

              <span className="status running">
                ● Running
              </span>
            </div>


            <div className="status-row">
              <div className="machine-info">
                <div className="machine-image">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80"
                    alt="Press Machine"
                  />
                </div>

                <div>
                  <strong>Press-002</strong>
                  <span>Production Line 1</span>
                </div>
              </div>

              <span className="status maintenance">
                ● Maintenance
              </span>
            </div>


            <div className="status-row">
              <div className="machine-info">
                <div className="machine-image">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80"
                    alt="Lathe Machine"
                  />
                </div>

                <div>
                  <strong>Lathe-003</strong>
                  <span>Transaxle Shop</span>
                </div>
              </div>

              <span className="status running">
                ● Running
              </span>
            </div>


            <div className="status-row">
              <div className="machine-info">
                <div className="machine-image">
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=150&q=80"
                    alt="Drilling Machine"
                  />
                </div>

                <div>
                  <strong>Drill-004</strong>
                  <span>Production Line 2</span>
                </div>
              </div>

              <span className="status breakdown">
                ● Breakdown
              </span>
            </div>

          </div>
        </div>


        {/* Maintenance Summary */}
        <div className="dashboard-section summary-section">

          <div className="section-header">
            <div>
              <span className="section-label">ACTIVITY</span>
              <h2>Maintenance Summary</h2>
            </div>

            <Link to="/maintenance">
              View All →
            </Link>
          </div>

          <div className="summary-item">
            <div>
              <span>Preventive Maintenance</span>
              <div className="progress">
                <div className="progress-bar blue"></div>
              </div>
            </div>
            <strong>12</strong>
          </div>


          <div className="summary-item">
            <div>
              <span>Breakdown Maintenance</span>
              <div className="progress">
                <div className="progress-bar red"></div>
              </div>
            </div>
            <strong>5</strong>
          </div>


          <div className="summary-item">
            <div>
              <span>Completed Tasks</span>
              <div className="progress">
                <div className="progress-bar green"></div>
              </div>
            </div>
            <strong>18</strong>
          </div>


          <div className="summary-item">
            <div>
              <span>Pending Tasks</span>
              <div className="progress">
                <div className="progress-bar orange"></div>
              </div>
            </div>
            <strong>4</strong>
          </div>

        </div>

      </div>


      {/* Recent Maintenance */}
      <div className="recent-maintenance">

        <div className="section-header">
          <div>
            <span className="section-label">LATEST ACTIVITY</span>
            <h2>Recent Maintenance</h2>
          </div>

          <Link to="/maintenance">
            View All →
          </Link>
        </div>


        <div className="maintenance-table">

          <div className="maintenance-header">
            <span>Machine</span>
            <span>Problem</span>
            <span>Type</span>
            <span>Technician</span>
            <span>Status</span>
          </div>


          <div className="maintenance-row">
            <span>
              <strong>CNC-001</strong>
            </span>

            <span>Air Pipe Broken</span>

            <span>Breakdown</span>

            <span>Rahul</span>

            <span className="completed">
              ● Completed
            </span>
          </div>


          <div className="maintenance-row">
            <span>
              <strong>Press-002</strong>
            </span>

            <span>Motor Issue</span>

            <span>Breakdown</span>

            <span>Amit</span>

            <span className="in-progress">
              ● In Progress
            </span>
          </div>


          <div className="maintenance-row">
            <span>
              <strong>Lathe-003</strong>
            </span>

            <span>Loose Cable</span>

            <span>Preventive</span>

            <span>Rohit</span>

            <span className="completed">
              ● Completed
            </span>
          </div>


          <div className="maintenance-row">
            <span>
              <strong>Drill-004</strong>
            </span>

            <span>Abnormal Noise</span>

            <span>Breakdown</span>

            <span>Vikas</span>

            <span className="pending">
              ● Pending
            </span>
          </div>

        </div>

      </div>


      {/* Quick Actions */}
      <div className="quick-actions">

        <div className="section-header">
          <div>
            <span className="section-label">SHORTCUTS</span>
            <h2>Quick Actions</h2>
          </div>
        </div>


        <div className="action-container">

          <Link to="/add-machine" className="action-card">
            <div className="action-icon">🏭</div>
            <h3>Add Machine</h3>
            <p>Register a new machine</p>
            <span className="action-arrow">→</span>
          </Link>


          <Link to="/add-maintenance" className="action-card">
            <div className="action-icon">🔧</div>
            <h3>Add Maintenance</h3>
            <p>Create a maintenance record</p>
            <span className="action-arrow">→</span>
          </Link>


          <Link to="/machines" className="action-card">
            <div className="action-icon">📋</div>
            <h3>View Machines</h3>
            <p>Check machine information</p>
            <span className="action-arrow">→</span>
          </Link>


          <Link to="/reports" className="action-card">
            <div className="action-icon">📊</div>
            <h3>Reports</h3>
            <p>View maintenance reports</p>
            <span className="action-arrow">→</span>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;