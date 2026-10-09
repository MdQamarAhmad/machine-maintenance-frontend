import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Machines.css";

function Machines() {
  const [machines, setMachines] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Fetch machines from backend
  useEffect(() => {
    fetch("https://machine-maintenance-backend01-1.onrender.com/api/auth/getMachine")
      .then((res) => res.json())
      .then((data) => {
        setMachines(data);
      })
      .catch((error) => {
        console.error("Error fetching machines:", error);
      });
  }, []);

  // Delete machine
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this machine?"
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(
      `https://machine-maintenance-backend01-1.onrender.com/api/auth/deleteMachine/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to delete machine");
    }

    // Remove deleted machine from React state
    // setMachines((prevMachines) =>
    //   prevMachines.filter((machine) => machine._id !== id)
    // );

    alert("Machine deleted successfully");

  } catch (error) {
    console.error("Delete error:", error);
    alert(error.message);
  }
};

  // Search + filter
  const filteredMachines = machines.filter((machine) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      machine.machineId?.toLowerCase().includes(searchText) ||
      machine.machineName?.toLowerCase().includes(searchText) ||
      machine.department?.toLowerCase().includes(searchText) ||
      machine.location?.toLowerCase().includes(searchText) ||
      machine.machineType?.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      machine.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="machines-page">

      {/* Header */}
      <div className="machines-header">
        <div>
          <h1>Machines</h1>
          <p>Manage and monitor all machines</p>
        </div>

        <Link
          to="/add-machine"
          className="add-machine-btn"
        >
          + Add Machine
        </Link>
      </div>

      {/* Statistics */}
      <div className="machine-stats">

        <div className="machine-stat-card">
          <span>🏭</span>
          <div>
            <h3>{machines.length}</h3>
            <p>Total Machines</p>
          </div>
        </div>

        <div className="machine-stat-card">
          <span>🟢</span>
          <div>
            <h3>
              {machines.filter(
                (machine) => machine.status === "Running"
              ).length}
            </h3>
            <p>Running</p>
          </div>
        </div>

        <div className="machine-stat-card">
          <span>🔧</span>
          <div>
            <h3>
              {machines.filter(
                (machine) => machine.status === "Maintenance"
              ).length}
            </h3>
            <p>Maintenance</p>
          </div>
        </div>

        <div className="machine-stat-card">
          <span>⚠️</span>
          <div>
            <h3>
              {machines.filter(
                (machine) => machine.status === "Breakdown"
              ).length}
            </h3>
            <p>Breakdown</p>
          </div>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="machine-controls">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search machine, ID, department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Running">Running</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Breakdown">Breakdown</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      {/* Machine Table */}
      <div className="machines-container">

        <div className="machines-table">

          {/* Header */}
          <div className="machines-table-header">
            <span>Machine ID</span>
            <span>Machine</span>
            <span>Department</span>
            <span>Location</span>
            <span>Type</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Rows */}
          {filteredMachines.length > 0 ? (

            filteredMachines.map((machine) => (

              <div
                className="machines-table-row"
                key={machine._id}
              >

                <span className="machine-id">
                  {machine.machineId}
                </span>

                <span>
                  <strong>{machine.machineName}</strong>
                </span>

                <span>
                  {machine.department}
                </span>

                <span>
                  {machine.location}
                </span>

                <span>
                  {machine.machineType}
                </span>

                <span>
                  <span
                    className={`machine-status ${
                      machine.status
                        ?.toLowerCase()
                        .replace(/\s+/g, "-")
                    }`}
                  >
                    {machine.status}
                  </span>
                </span>

                {/* Actions */}
                <span className="machine-actions">

                  <Link
                    to={`/machine/${machine._id}`}
                    className="view-btn"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-machine/${machine._id}`}
                    className="edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(machine._id)
                    }
                  >
                    Delete
                  </button>

                </span>

              </div>
            ))

          ) : (

            <div className="no-machines">
              <div>🔍</div>

              <h3>No machines found</h3>

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

export default Machines;
