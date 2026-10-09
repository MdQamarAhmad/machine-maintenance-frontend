import { useState } from "react";
import { Link } from "react-router-dom";
import "./SpareParts.css";

function SpareParts() {
  const [parts, setParts] = useState([
    {
      id: "SP-001",
      name: "Air Pipe",
      partNumber: "AP-1001",
      category: "Pneumatic",
      quantity: 25,
      minimumStock: 10,
      location: "Store A",
      supplier: "ABC Industrial",
    },
    {
      id: "SP-002",
      name: "Motor Bearing",
      partNumber: "BR-2002",
      category: "Mechanical",
      quantity: 8,
      minimumStock: 10,
      location: "Store A",
      supplier: "XYZ Bearings",
    },
    {
      id: "SP-003",
      name: "Proximity Sensor",
      partNumber: "PS-3003",
      category: "Electrical",
      quantity: 15,
      minimumStock: 5,
      location: "Store B",
      supplier: "Tech Components",
    },
    {
      id: "SP-004",
      name: "Hydraulic Seal",
      partNumber: "HS-4004",
      category: "Hydraulic",
      quantity: 3,
      minimumStock: 8,
      location: "Store B",
      supplier: "Hydro Parts",
    },
    {
      id: "SP-005",
      name: "Cable Tie",
      partNumber: "CT-5005",
      category: "Consumable",
      quantity: 150,
      minimumStock: 50,
      location: "Store A",
      supplier: "Industrial Store",
    },
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const getStockStatus = (part) => {
    if (part.quantity === 0) {
      return "Out of Stock";
    }

    if (part.quantity <= part.minimumStock) {
      return "Low Stock";
    }

    return "Available";
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this spare part?"
    );

    if (!confirmDelete) {
      return;
    }

    setParts(
      parts.filter((part) => part.id !== id)
    );
  };

  const filteredParts = parts.filter((part) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      part.id.toLowerCase().includes(searchText) ||
      part.name.toLowerCase().includes(searchText) ||
      part.partNumber.toLowerCase().includes(searchText) ||
      part.supplier.toLowerCase().includes(searchText);

    const matchesCategory =
      categoryFilter === "All" ||
      part.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalParts = parts.length;

  const lowStock = parts.filter(
    (part) =>
      part.quantity > 0 &&
      part.quantity <= part.minimumStock
  ).length;

  const outOfStock = parts.filter(
    (part) => part.quantity === 0
  ).length;

  const totalQuantity = parts.reduce(
    (total, part) => total + part.quantity,
    0
  );

  return (
    <div className="spare-parts-page">

      {/* Header */}
      <div className="spare-parts-header">

        <div>
          <h1>Spare Parts</h1>

          <p>
            Manage spare parts inventory and stock levels.
          </p>
        </div>

        <Link
          to="/add-spare-part"
          className="add-part-btn"
        >
          + Add Spare Part
        </Link>

      </div>


      {/* Statistics */}
      <div className="spare-parts-stats">

        <div className="spare-stat-card">
          <div className="spare-stat-icon">
            📦
          </div>

          <div>
            <h3>{totalParts}</h3>
            <p>Total Parts</p>
          </div>
        </div>


        <div className="spare-stat-card">
          <div className="spare-stat-icon">
            📊
          </div>

          <div>
            <h3>{totalQuantity}</h3>
            <p>Total Quantity</p>
          </div>
        </div>


        <div className="spare-stat-card">
          <div className="spare-stat-icon">
            ⚠️
          </div>

          <div>
            <h3>{lowStock}</h3>
            <p>Low Stock</p>
          </div>
        </div>


        <div className="spare-stat-card">
          <div className="spare-stat-icon">
            🚫
          </div>

          <div>
            <h3>{outOfStock}</h3>
            <p>Out of Stock</p>
          </div>
        </div>

      </div>


      {/* Search and Filter */}
      <div className="spare-controls">

        <div className="spare-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search part, part number, supplier..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >
          <option value="All">
            All Categories
          </option>

          <option value="Mechanical">
            Mechanical
          </option>

          <option value="Electrical">
            Electrical
          </option>

          <option value="Pneumatic">
            Pneumatic
          </option>

          <option value="Hydraulic">
            Hydraulic
          </option>

          <option value="Consumable">
            Consumable
          </option>

        </select>

      </div>


      {/* Inventory Table */}
      <div className="spare-table-container">

        <div className="spare-table">

          <div className="spare-table-header">

            <span>Part ID</span>
            <span>Part Name</span>
            <span>Part Number</span>
            <span>Category</span>
            <span>Quantity</span>
            <span>Location</span>
            <span>Status</span>
            <span>Actions</span>

          </div>


          {filteredParts.length > 0 ? (

            filteredParts.map((part) => {

              const status = getStockStatus(part);

              return (
                <div
                  className="spare-table-row"
                  key={part.id}
                >

                  <span className="part-id">
                    {part.id}
                  </span>


                  <span>
                    <strong>
                      {part.name}
                    </strong>
                  </span>


                  <span>
                    {part.partNumber}
                  </span>


                  <span>
                    {part.category}
                  </span>


                  <span className="quantity">
                    {part.quantity}
                  </span>


                  <span>
                    {part.location}
                  </span>


                  <span>

                    <span
                      className={`stock-status ${
                        status === "Available"
                          ? "available"
                          : status === "Low Stock"
                          ? "low-stock"
                          : "out-stock"
                      }`}
                    >
                      {status}
                    </span>

                  </span>


                  <span className="part-actions">

                    <Link
                      to={`/edit-spare-part/${part.id}`}
                      className="part-edit-btn"
                    >
                      Edit
                    </Link>

                    <button
                      className="part-delete-btn"
                      onClick={() =>
                        handleDelete(part.id)
                      }
                    >
                      Delete
                    </button>

                  </span>

                </div>
              );
            })

          ) : (

            <div className="no-parts">

              <div>📦</div>

              <h3>
                No spare parts found
              </h3>

              <p>
                Try changing your search or category filter.
              </p>

            </div>

          )}

        </div>

      </div>


      {/* Low Stock Alert */}
      {lowStock > 0 || outOfStock > 0 ? (

        <div className="stock-alert">

          <div className="alert-icon">
            ⚠️
          </div>

          <div>
            <h3>Stock Alert</h3>

            <p>
              {lowStock} part(s) have low stock
              {outOfStock > 0 &&
                ` and ${outOfStock} part(s) are out of stock`}
              .
            </p>
          </div>

        </div>

      ) : null}

    </div>
  );
}

export default SpareParts;