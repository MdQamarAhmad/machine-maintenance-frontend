import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddMachine.css";

function AddMachine() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    machineId: "",
    machineName: "",
    department: "",
    location: "",
    machineType: "",
    manufacturer: "",
    modelNumber: "",
    installationDate: "",
    status: "Running",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    // Backend API will be connected here later.
   
    try{
      let response = await fetch("https://machine-maintenance-backend01-1.onrender.com/api/auth/addMachine",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          ...formData,
        })
      })

  let data = await response.json()
    if(!response.ok){
      console.log("Not Added successfully")
      alert(data.message)
      return;
    }else{
      console.log('Added Successfull')
      navigate('/machines');
    }

    }catch(error){
      console.log("SignIN error : ", error);
    }
 
  };

  return (
    <div className="add-machine-page">

      {/* Header */}
      <div className="add-machine-header">
        <div>
          <h1>Add New Machine</h1>
          <p>Register a new machine in the maintenance system.</p>
        </div>

        <Link to="/machines" className="back-btn">
          ← Back to Machines
        </Link>
      </div>


      {/* Form */}
      <div className="machine-form-container">

        <form onSubmit={handleSubmit}>

          {/* Basic Information */}
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
                  placeholder="Example: MCH-001"
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
                  placeholder="Example: CNC Machine"
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
                  <option value="">Select Department</option>
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
                  <option value="">Select Machine Type</option>
                  <option value="CNC">CNC</option>
                  <option value="Lathe">Lathe</option>
                  <option value="Press">Press</option>
                  <option value="Drilling">Drilling Machine</option>
                  <option value="Grinding">Grinding Machine</option>
                  <option value="Assembly">Assembly Machine</option>
                  <option value="Other">Other</option>
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
                  <option value="Running">Running</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Breakdown">Breakdown</option>
                  <option value="Inactive">Inactive</option>
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
                placeholder="Enter machine details, specifications, or other important information..."
                rows="5"
              ></textarea>

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
              className="save-btn"
            >
              + Add Machine
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddMachine;