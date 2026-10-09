import { useState } from "react";
import { Link } from "react-router-dom";
import "./Technicians.css";

function Technicians() {
  const [technicians, setTechnicians] = useState([
    {
      id: "TECH-001",
      name: "Rahul Sharma",
      employeeId: "EMP-1001",
      department: "Transaxle Shop",
      specialization: "Mechanical",
      phone: "9876543210",
      assignedTasks: 5,
      completedTasks: 42,
      status: "Available",
    },
    {
      id: "TECH-002",
      name: "Amit Kumar",
      employeeId: "EMP-1002",
      department: "Production",
      specialization: "Electrical",
      phone: "9876543211",
      assignedTasks: 3,
      completedTasks: 38,
      status: "Busy",
    },
    {
      id: "TECH-003",
      name: "Rohit Verma",
      employeeId: "EMP-1003",
      department: "Transaxle Shop",
      specialization: "Mechanical",
      phone: "9876543212",
      assignedTasks: 2,
      completedTasks: 35,
      status: "Available",
    },
    {
      id: "TECH-004",
      name: "Vikas Patel",
      employeeId: "EMP-1004",
      department: "Maintenance",
      specialization: "Electrical",
      phone: "9876543213",
      assignedTasks: 4,
      completedTasks: 29,
      status: "On Leave",
    },
    {
      id: "TECH-005",
      name: "Suresh Singh",
      employeeId: "EMP-1005",
      department: "Assembly",
      specialization: "Pneumatic",
      phone: "9876543214",
      assignedTasks: 1,
      completedTasks: 31,
      status: "Available",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Delete technician
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this technician?"
    );

    if (!confirmDelete) {
      return;
    }

    setTechnicians(
      technicians.filter(
        (technician) => technician.id !== id
      )
    );
  };

  // Filter technicians
  const filteredTechnicians = technicians.filter(
    (technician) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        technician.id.toLowerCase().includes(searchText) ||
        technician.name.toLowerCase().includes(searchText) ||
        technician.employeeId
          .toLowerCase()
          .includes(searchText) ||
        technician.department
          .toLowerCase()
          .includes(searchText) ||
        technician.specialization
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        technician.status === statusFilter;

      return matchesSearch && matchesStatus;
    }
  );

  const totalTechnicians = technicians.length;

  const availableTechnicians = technicians.filter(
    (technician) =>
      technician.status === "Available"
  ).length;

  const busyTechnicians = technicians.filter(
    (technician) =>
      technician.status === "Busy"
  ).length;

  const totalTasks = technicians.reduce(
    (total, technician) =>
      total + technician.assignedTasks,
    0
  );

  return (
    <div className="technicians-page">

      {/* Header */}
      <div className="technicians-header">

        <div>
          <h1>Technicians</h1>

          <p>
            Manage maintenance technicians and their work.
          </p>
        </div>

        <Link
          to="/add-technician"
          className="add-technician-btn"
        >
          + Add Technician
        </Link>

      </div>


      {/* Statistics */}
      <div className="technician-stats">

        <div className="technician-stat-card">

          <div className="technician-stat-icon">
            👨‍🔧
          </div>

          <div>
            <h3>{totalTechnicians}</h3>
            <p>Total Technicians</p>
          </div>

        </div>


        <div className="technician-stat-card">

          <div className="technician-stat-icon">
            🟢
          </div>

          <div>
            <h3>{availableTechnicians}</h3>
            <p>Available</p>
          </div>

        </div>


        <div className="technician-stat-card">

          <div className="technician-stat-icon">
            🔧
          </div>

          <div>
            <h3>{busyTechnicians}</h3>
            <p>Busy</p>
          </div>

        </div>


        <div className="technician-stat-card">

          <div className="technician-stat-icon">
            📋
          </div>

          <div>
            <h3>{totalTasks}</h3>
            <p>Assigned Tasks</p>
          </div>

        </div>

      </div>


      {/* Search & Filter */}
      <div className="technician-controls">

        <div className="technician-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search technician, employee ID, department..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">
            All Status
          </option>

          <option value="Available">
            Available
          </option>

          <option value="Busy">
            Busy
          </option>

          <option value="On Leave">
            On Leave
          </option>

        </select>

      </div>


      {/* Technician Table */}
      <div className="technician-table-container">

        <div className="technician-table">

          {/* Header */}
          <div className="technician-table-header">

            <span>Technician</span>
            <span>Employee ID</span>
            <span>Department</span>
            <span>Specialization</span>
            <span>Assigned</span>
            <span>Completed</span>
            <span>Status</span>
            <span>Actions</span>

          </div>


          {/* Rows */}
          {filteredTechnicians.length > 0 ? (

            filteredTechnicians.map(
              (technician) => (

                <div
                  className="technician-table-row"
                  key={technician.id}
                >

                  {/* Technician */}
                  <span className="technician-name">

                    <span className="technician-avatar">
                      {technician.name.charAt(0)}
                    </span>

                    <strong>
                      {technician.name}
                    </strong>

                  </span>


                  {/* Employee ID */}
                  <span>
                    {technician.employeeId}
                  </span>


                  {/* Department */}
                  <span>
                    {technician.department}
                  </span>


                  {/* Specialization */}
                  <span>
                    {technician.specialization}
                  </span>


                  {/* Assigned */}
                  <span className="task-count">
                    {technician.assignedTasks}
                  </span>


                  {/* Completed */}
                  <span className="completed-count">
                    {technician.completedTasks}
                  </span>


                  {/* Status */}
                  <span>

                    <span
                      className={`technician-status ${
                        technician.status
                          .toLowerCase()
                          .replace(" ", "-")
                      }`}
                    >
                      {technician.status}
                    </span>

                  </span>


                  {/* Actions */}
                  <span className="technician-actions">

                    <Link
                      to={`/technician/${technician.id}`}
                      className="view-technician-btn"
                    >
                      View
                    </Link>

                    <Link
                      to={`/edit-technician/${technician.id}`}
                      className="edit-technician-btn"
                    >
                      Edit
                    </Link>

                    <button
                      className="delete-technician-btn"
                      onClick={() =>
                        handleDelete(technician.id)
                      }
                    >
                      Delete
                    </button>

                  </span>

                </div>
              )
            )

          ) : (

            <div className="no-technicians">

              <div>👨‍🔧</div>

              <h3>
                No technicians found
              </h3>

              <p>
                Try changing your search or filter.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Technicians;