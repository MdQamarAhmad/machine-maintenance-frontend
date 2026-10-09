import { Link } from "react-router-dom";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}

      <style>{ `

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f4f6f8;
          color: #17202a;
        }

       
        

        .home-page {
          min-height: 100vh;
          background: #f4f6f8;
        }


        /* ================= NAVBAR ================= */

        .home-navbar {
          height: 72px;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e6ea;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 5%;

          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #17202a;
        }

        .brand-icon {
          width: 43px;
          height: 43px;
          border-radius: 10px;

          background: #0b5cab;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 22px;
        }

        .brand-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .brand-subtitle {
          font-size: 10px;
          color: #777;
          letter-spacing: 1.5px;
          margin-top: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-links a {
          text-decoration: none;
          color: #374151;
          font-size: 14px;
          font-weight: 500;

          transition: .25s;
        }

        .nav-links a:hover {
          color: #0b5cab;
        }

        .login-btn {
          background: #0b5cab !important;
          color: white !important;

          padding: 10px 18px;
          border-radius: 7px;
        }


        /* ================= HERO ================= */

        .hero {
          min-height: 620px;

          display: grid;
          grid-template-columns: 1fr 1fr;

          align-items: center;

          padding: 70px 5%;

          background:
            linear-gradient(
              90deg,
              rgba(3,25,48,.96),
              rgba(3,39,73,.78)
            ),
            url("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=85");

          background-size: cover;
          background-position: center;
        }

        .hero-content {
          color: white;
          max-width: 650px;

          animation: heroLeft 1s ease;
        }

        .hero-tag {
          display: inline-block;

          padding: 8px 16px;
          border-radius: 30px;

          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.2);

          font-size: 12px;
          letter-spacing: 1.5px;

          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.05;

          margin: 0 0 25px;

          font-weight: 800;
        }

        .hero h1 span {
          color: #69c5ff;
        }

        .hero-description {
          color: #dbeafe;
          font-size: 17px;
          line-height: 1.8;

          max-width: 600px;

          margin-bottom: 32px;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }


        /* ================= HERO IMAGE ================= */

        .hero-image-wrapper {
          display: flex;
          justify-content: center;

          animation: heroRight 1.1s ease;
        }

        .hero-image-box {
          width: 100%;
          max-width: 560px;

          height: 430px;

          border-radius: 22px;

          overflow: hidden;

          border: 1px solid rgba(255,255,255,.3);

          box-shadow:
            0 30px 70px rgba(0,0,0,.35);

          position: relative;
        }

        .hero-image-box img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform .7s ease;
        }

        .hero-image-box:hover img {
          transform: scale(1.07);
        }

        .hero-image-overlay {
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 20px;

          padding: 18px;

          border-radius: 12px;

          background: rgba(0,0,0,.55);

          backdrop-filter: blur(8px);

          color: white;
        }

        .hero-image-overlay strong {
          display: block;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .hero-image-overlay span {
          font-size: 12px;
          color: #dbeafe;
        }


        /* ================= PLANT INFO ================= */

        .plant-info {
          background: white;

          padding: 20px 5%;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;

          border-bottom: 1px solid #e5e7eb;
        }

        .plant-info div {
          color: #6b7280;
          font-size: 13px;
        }

        .plant-info strong {
          color: #17202a;
        }


        /* ================= SECTION ================= */

        .section {
          padding: 80px 5%;
        }

        .section-header {
          margin-bottom: 35px;
        }

        .section-label {
          color: #0b5cab;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 2px;

          margin-bottom: 8px;
        }

        .section-title {
          font-size: 38px;
          margin: 0 0 8px;

          color: #17202a;
        }

        .section-subtitle {
          color: #6b7280;
          margin: 0;

          font-size: 15px;
        }


        /* ================= LARGE IMAGE SECTION ================= */

        .image-grid {
          display: grid;

          grid-template-columns:
            1.4fr 1fr;

          gap: 22px;
        }

        .large-image-card {
          height: 450px;

          border-radius: 18px;

          overflow: hidden;

          position: relative;

          box-shadow:
            0 15px 40px rgba(0,0,0,.12);
        }

        .large-image-card.small {
          height: 450px;
        }

        .large-image-card img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform .6s ease;
        }

        .large-image-card:hover img {
          transform: scale(1.08);
        }

        .image-card-overlay {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 30px;

          color: white;

          background:
            linear-gradient(
              transparent,
              rgba(0,0,0,.85)
            );
        }

        .image-card-overlay h3 {
          margin: 0 0 8px;
          font-size: 25px;
        }

        .image-card-overlay p {
          margin: 0;

          color: #e5e7eb;

          font-size: 14px;
          line-height: 1.6;
        }


        /* ================= STATS ================= */

        .stats-section {
          padding: 70px 5%;

          background: #0d2035;

          color: white;
        }

        .stats-title {
          text-align: center;

          margin-bottom: 40px;
        }

        .stats-title h2 {
          margin: 0 0 8px;

          font-size: 34px;
        }

        .stats-title p {
          margin: 0;

          color: #a9c1d8;
        }

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;
        }

        .stat-box {
          background: rgba(255,255,255,.07);

          border: 1px solid rgba(255,255,255,.1);

          border-radius: 14px;

          padding: 28px;

          transition: .3s;
        }

        .stat-box:hover {
          transform: translateY(-6px);

          background:
            rgba(255,255,255,.11);
        }

        .stat-icon {
          font-size: 28px;

          margin-bottom: 15px;
        }

        .stat-number {
          font-size: 38px;

          font-weight: 800;

          margin-bottom: 5px;
        }

        .stat-label {
          color: #b9c8d7;

          font-size: 13px;
        }


        /* ================= MODULES ================= */

        .modules-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 22px;
        }

        .module-card {
          background: white;

          border-radius: 16px;

          overflow: hidden;

          border: 1px solid #e3e7eb;

          text-decoration: none;

          color: inherit;

          transition:
            transform .3s,
            box-shadow .3s;
        }

        .module-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 18px 40px rgba(0,0,0,.12);
        }

        .module-image {
          height: 240px;

          overflow: hidden;
        }

        .module-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform .6s ease;
        }

        .module-card:hover
        .module-image img {
          transform: scale(1.08);
        }

        .module-content {
          padding: 25px;
        }

        .module-icon {
          font-size: 30px;

          margin-bottom: 12px;
        }

        .module-content h3 {
          margin: 0 0 10px;

          font-size: 20px;
        }

        .module-content p {
          margin: 0;

          color: #6b7280;

          font-size: 14px;

          line-height: 1.7;
        }

        .module-link {
          display: block;

          margin-top: 18px;

          color: #0b5cab;

          font-size: 13px;

          font-weight: 700;
        }


        /* ================= MACHINE STATUS ================= */

        .machine-section {
          background: white;

          padding: 80px 5%;
        }

        .machine-table-wrapper {
          overflow-x: auto;

          border:
            1px solid #e1e5e9;

          border-radius: 14px;
        }

        .machine-table {
          width: 100%;

          min-width: 800px;

          border-collapse: collapse;
        }

        .machine-table th {
          background: #f7f9fb;

          padding: 17px;

          text-align: left;

          color: #4b5563;

          font-size: 12px;

          border-bottom:
            1px solid #e5e7eb;
        }

        .machine-table td {
          padding: 17px;

          border-bottom:
            1px solid #eef0f2;

          font-size: 13px;
        }

        .machine-table tr {
          transition: .2s;
        }

        .machine-table tbody tr:hover {
          background: #f8fbff;
        }


        /* ================= MAINTENANCE ================= */

        .maintenance-section {
          padding: 80px 5%;
        }

        .maintenance-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .maintenance-card {
          background: white;

          border-radius: 14px;

          overflow: hidden;

          border:
            1px solid #e3e7eb;

          transition: .3s;
        }

        .maintenance-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 15px 35px rgba(0,0,0,.1);
        }

        .maintenance-image {
          height: 190px;

          overflow: hidden;
        }

        .maintenance-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: .5s;
        }

        .maintenance-card:hover
        .maintenance-image img {
          transform: scale(1.07);
        }

        .maintenance-content {
          padding: 20px;
        }

        .maintenance-machine {
          color: #0b5cab;

          font-weight: 700;

          font-size: 14px;

          margin-bottom: 12px;
        }

        .maintenance-content h4 {
          margin: 5px 0;

          font-size: 16px;
        }

        .maintenance-content p {
          color: #6b7280;

          font-size: 13px;

          line-height: 1.6;
        }

        .maintenance-tech {
          border-top:
            1px solid #edf0f2;

          margin-top: 15px;

          padding-top: 12px;

          font-size: 12px;

          color: #6b7280;
        }


        /* ================= QUICK ACTIONS ================= */

        .quick-section {
          padding: 70px 5%;

          background:
            linear-gradient(
              135deg,
              #0b5cab,
              #062f59
            );

          color: white;
        }

        .quick-section h2 {
          margin: 0 0 8px;

          font-size: 34px;
        }

        .quick-section p {
          color: #cce5fa;

          margin-bottom: 28px;
        }

        .quick-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;
        }

        .quick-button {
          background: white;

          color: #17202a;

          text-decoration: none;

          padding: 13px 20px;

          border-radius: 8px;

          font-size: 13px;

          font-weight: 700;

          transition: .25s;
        }

        .quick-button:hover {
          transform: translateY(-4px);

          background: #e7f3ff;
        }


        /* ================= ANIMATIONS ================= */

        @keyframes heroLeft {

          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        @keyframes heroRight {

          from {
            opacity: 0;
            transform: translateX(50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {

          .nav-links {
            gap: 10px;
          }

          .nav-links a {
            font-size: 12px;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .hero-image-wrapper {
            margin-top: 20px;
          }

          .stats-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .modules-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .maintenance-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        @media (max-width: 700px) {

          .home-navbar {
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding: 55px 20px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero-image-box {
            height: 320px;
          }

          .plant-info {
            grid-template-columns:
              repeat(2, 1fr);

            padding: 20px;
          }

          .section,
          .machine-section,
          .maintenance-section {
            padding: 55px 20px;
          }

          .image-grid {
            grid-template-columns: 1fr;
          }

          .large-image-card,
          .large-image-card.small {
            height: 330px;
          }

          .stats-section {
            padding: 55px 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .modules-grid {
            grid-template-columns: 1fr;
          }

          .maintenance-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="home-navbar">

        <Link to="/" className="brand">

          <div className="brand-icon">
            ⚙️
          </div>

          <div>

            <div className="brand-title">
              MACHINE MAINTENANCE
            </div>

            <div className="brand-subtitle">
              MANAGEMENT SYSTEM
            </div>

          </div>

        </Link>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/machines">
            Machines
          </Link>

          <Link to="/maintenance">
            Maintenance
          </Link>

          <Link to="/technicians">
            Technicians
          </Link>

          <Link to="/spare-parts">
            Spare Parts
          </Link>

          <Link to="/reports">
            Reports
          </Link>

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-tag">
            INDUSTRIAL MAINTENANCE PLATFORM
          </div>

          <h1>
            Keep Your Plant
            <br />

            <span>
              Running Efficiently.
            </span>
          </h1>

          <p className="hero-description">
            A centralized machine maintenance management system
            designed to monitor equipment, manage breakdowns,
            schedule maintenance and track plant performance.
          </p>


          <div className="hero-buttons">

            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
              }}
            >

              <Button variant="primary">
                Open Dashboard →
              </Button>

            </Link>


            <Link
              to="/machines"
              style={{
                textDecoration: "none",
              }}
            >

              <Button variant="outline">
                View Machines
              </Button>

            </Link>

          </div>

        </div>


        {/* LARGE HERO IMAGE */}

        <div className="hero-image-wrapper">

          <div className="hero-image-box">

            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85"
              alt="Industrial CNC machine"
            />

            <div className="hero-image-overlay">

              <strong>
                Industrial Machine Monitoring
              </strong>

              <span>
                Monitor machine condition, maintenance
                and production equipment.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLANT INFO
      ===================================================== */}

      <section className="plant-info">

        <div>
          <strong>Plant</strong>
          <br />
          Automotive Manufacturing
        </div>

        <div>
          <strong>Department</strong>
          <br />
          Maintenance
        </div>

        <div>
          <strong>Area</strong>
          <br />
          Transaxle Shop
        </div>

        <div>
          <strong>System</strong>
          <br />
          MMMS v1.0
        </div>

      </section>


      {/* =====================================================
          LARGE IMAGE SECTION
      ===================================================== */}

      <section className="section">

        <div className="section-header">

          <div className="section-label">
            INDUSTRIAL OPERATIONS
          </div>

          <h2 className="section-title">
            Manage Your Plant
          </h2>

          <p className="section-subtitle">
            Everything you need to keep machines operating
            safely and efficiently.
          </p>

        </div>


        <div className="image-grid">

          <div className="large-image-card">

            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
              alt="Industrial maintenance"
            />

            <div className="image-card-overlay">

              <h3>
                Maintenance Operations
              </h3>

              <p>
                Record machine problems, maintenance work,
                solutions and technician activities.
              </p>

            </div>

          </div>


          <div className="large-image-card small">

            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85"
              alt="Manufacturing plant"
            />

            <div className="image-card-overlay">

              <h3>
                Modern Manufacturing
              </h3>

              <p>
                Keep your production equipment organized
                from one centralized system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-title">

          <h2>
            Plant Overview
          </h2>

          <p>
            Current machine and maintenance status
          </p>

        </div>


        <div className="stats-grid">

          <StatBox
            icon="🏭"
            number="25"
            label="Total Machines"
          />

          <StatBox
            icon="▶"
            number="20"
            label="Running Machines"
            numberColor="#4ade80"
          />

          <StatBox
            icon="🔧"
            number="3"
            label="Under Maintenance"
            numberColor="#facc15"
          />

          <StatBox
            icon="⚠️"
            number="2"
            label="Breakdown Machines"
            numberColor="#f87171"
          />

        </div>

      </section>


      {/* =====================================================
          MODULES
      ===================================================== */}

      <section className="section">

        <div className="section-header">

          <div className="section-label">
            SYSTEM MODULES
          </div>

          <h2 className="section-title">
            Maintenance Management
          </h2>

          <p className="section-subtitle">
            Access all major maintenance functions.
          </p>

        </div>


        <div className="modules-grid">

          <ModuleCard
            image="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80"
            title="Machine Management"
            description="Register machines, update information and monitor machine status."
            path="/machines"
          />

          <ModuleCard
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
            title="Maintenance"
            description="Record breakdowns, preventive maintenance and maintenance history."
            path="/maintenance"
          />

          <ModuleCard
            image="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80"
            title="Technicians"
            description="Manage technicians, assignments and completed maintenance tasks."
            path="/technicians"
          />

          <ModuleCard
            image="https://images.unsplash.com/photo-1586528116493-da8b1c7e3c5b?auto=format&fit=crop&w=900&q=80"
            title="Spare Parts"
            description="Monitor inventory, available quantity and low-stock alerts."
            path="/spare-parts"
          />

          <ModuleCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
            title="Reports"
            description="Analyze machine performance, downtime and maintenance records."
            path="/reports"
          />

          <ModuleCard
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            title="Dashboard"
            description="View an overall summary of plant maintenance activities."
            path="/dashboard"
          />

        </div>

      </section>


      {/* =====================================================
          MACHINE STATUS
      ===================================================== */}

      <section className="machine-section">

        <div className="section-header">

          <div className="section-label">
            MACHINE MONITORING
          </div>

          <h2 className="section-title">
            Machine Status
          </h2>

          <p className="section-subtitle">
            Current status of selected plant machines.
          </p>

        </div>


        <div className="machine-table-wrapper">

          <table className="machine-table">

            <thead>

              <tr>

                <th>
                  Machine ID
                </th>

                <th>
                  Machine
                </th>

                <th>
                  Department
                </th>

                <th>
                  Location
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              <MachineRow
                id="MCH-001"
                name="CNC Machine"
                department="Transaxle Shop"
                location="Line 1"
                status="Running"
              />

              <MachineRow
                id="MCH-002"
                name="Hydraulic Press"
                department="Production"
                location="Line 2"
                status="Maintenance"
              />

              <MachineRow
                id="MCH-003"
                name="Lathe Machine"
                department="Transaxle Shop"
                location="Line 3"
                status="Running"
              />

              <MachineRow
                id="MCH-004"
                name="Drilling Machine"
                department="Production"
                location="Line 4"
                status="Breakdown"
              />

            </tbody>

          </table>

        </div>


        <div style={{ marginTop: "20px" }}>

          <Link
            to="/machines"
            style={{
              color: "#0b5cab",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            View all machines →
          </Link>

        </div>

      </section>


      {/* =====================================================
          MAINTENANCE ACTIVITIES
      ===================================================== */}

      <section className="maintenance-section">

        <div className="section-header">

          <div className="section-label">
            RECENT WORK
          </div>

          <h2 className="section-title">
            Maintenance Activities
          </h2>

          <p className="section-subtitle">
            Latest maintenance work recorded in the system.
          </p>

        </div>


        <div className="maintenance-grid">

          <MaintenanceCard
            image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
            machine="CNC Machine"
            id="MCH-001"
            problem="Air Pipe Broken"
            solution="Damaged section cut and pipe rejoined"
            technician="Rahul Sharma"
            status="Completed"
          />

          <MaintenanceCard
            image="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80"
            machine="Lathe Machine"
            id="MCH-003"
            problem="Loose Cable"
            solution="Cable properly secured"
            technician="Amit Kumar"
            status="Completed"
          />

          <MaintenanceCard
            image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
            machine="Hydraulic Press"
            id="MCH-002"
            problem="Motor Issue"
            solution="Inspection in progress"
            technician="Rohit Verma"
            status="In Progress"
          />

        </div>


        <div style={{ marginTop: "25px" }}>

          <Link
            to="/maintenance"
            style={{
              color: "#0b5cab",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            View maintenance history →
          </Link>

        </div>

      </section>


      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <section className="quick-section">

        <h2>
          Quick Actions
        </h2>

        <p>
          Frequently used maintenance operations.
        </p>


        <div className="quick-buttons">

          <QuickButton
            text="+ Add Machine"
            path="/add-machine"
          />

          <QuickButton
            text="+ Add Maintenance"
            path="/add-maintenance"
          />

          <QuickButton
            text="View Technicians"
            path="/technicians"
          />

          <QuickButton
            text="Check Spare Parts"
            path="/spare-parts"
          />

          <QuickButton
            text="View Reports"
            path="/reports"
          />

        </div>

      </section>

      <Footer />

    </div>
  );
}


/* =====================================================
   STAT BOX
===================================================== */

function StatBox({
  icon,
  number,
  label,
  numberColor = "#ffffff",
}) {

  return (

    <div className="stat-box">

      <div className="stat-icon">
        {icon}
      </div>

      <div
        className="stat-number"
        style={{
          color: numberColor,
        }}
      >
        {number}
      </div>

      <div className="stat-label">
        {label}
      </div>

    </div>

  );
}


/* =====================================================
   MODULE CARD
===================================================== */

function ModuleCard({
  image,
  title,
  description,
  path,
}) {

  return (

    <Link
      to={path}
      className="module-card"
    >

      <div className="module-image">

        <img
          src={image}
          alt={title}
        />

      </div>


      <div className="module-content">

        <div className="module-icon">
          ⚙️
        </div>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <span className="module-link">
          Open Module →
        </span>

      </div>

    </Link>

  );

}


/* =====================================================
   MACHINE ROW
===================================================== */

function MachineRow({
  id,
  name,
  department,
  location,
  status,
}) {

  return (

    <tr>

      <td>
        <strong>
          {id}
        </strong>
      </td>

      <td>
        <strong>
          {name}
        </strong>
      </td>

      <td>
        {department}
      </td>

      <td>
        {location}
      </td>

      <td>
        <StatusBadge status={status} />
      </td>

      <td>

        <Link
          to={`/machine/${id}`}
          style={{
            color: "#0b5cab",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          View →
        </Link>

      </td>

    </tr>

  );

}


/* =====================================================
   MAINTENANCE CARD
===================================================== */

function MaintenanceCard({
  image,
  machine,
  id,
  problem,
  solution,
  technician,
  status,
}) {

  return (

    <div className="maintenance-card">

      <div className="maintenance-image">

        <img
          src={image}
          alt={machine}
        />

      </div>


      <div className="maintenance-content">

        <div className="maintenance-machine">
          {machine} • {id}
        </div>


        <h4>
          Problem
        </h4>

        <p>
          {problem}
        </p>


        <h4>
          Solution
        </h4>

        <p>
          {solution}
        </p>


        <div className="maintenance-tech">

          Technician:
          <strong>
            {" "}{technician}
          </strong>

          <div style={{ marginTop: "10px" }}>
            <StatusBadge status={status} />
          </div>

        </div>

      </div>

    </div>

  );

}


/* =====================================================
   QUICK BUTTON
===================================================== */

function QuickButton({
  text,
  path,
}) {

  return (

    <Link
      to={path}
      className="quick-button"
    >
      {text}
    </Link>

  );

}


export default Home;