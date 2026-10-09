import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import Machines from "./pages/Machines";
import AddMachine from "./pages/AddMachine";
import EditMachine from "./pages/EditMachine";
import MachineDetails from "./pages/MachineDetails";

// import Maintenance from "./pages/Maintenance";
import AddMaintenance from "./pages/AddMaintenance";
import MaintenanceDetails from "./pages/MachineDetails";

import Technicians from "./pages/Technicians";

import SpareParts from "./pages/SpareParts";

import Reports from "./pages/Reports";

import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter >

      <Routes>


        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />



        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        <Route
          path="/machines"
          element={<Machines />}
        />

        <Route
          path="/add-machine"
          element={<AddMachine />}
        />

        <Route
          path="/edit-machine/:id"
          element={<EditMachine />}
        />

        <Route
          path="/machine/:id"
          element={<MachineDetails />}
        />


        <Route
          path="/maintenance"
          element={<MachineDetails />}
        />

        <Route
          path="/add-maintenance"
          element={<AddMaintenance />}
        />

        <Route
          path="/maintenance/:id"
          element={<MaintenanceDetails />}
        />


        <Route
          path="/technicians"
          element={<Technicians />}
        />


        <Route
          path="/spare-parts"
          element={<SpareParts />}
        />


        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;