import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GridColDef } from "@mui/x-data-grid";
import "./patients.scss";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "Firstname",
    type: "string",
    headerName: "firstname",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "number",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "city",
    type: "string",
    headerName: "Location",
    width: 150,
  },
  {
    field: "Substance",
    type: "string",
    headerName: "Substance",
    width: 150,
  },
];

const Patients = () => {
  const [patientRows, setPatientRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [substanceFilter, setSubstanceFilter] = useState("All");
  const pageSize = 10;

  useEffect(() => {
    axios
      .get('http://localhost:8000/patientdata')
      .then(response => {
        console.log('Patient Data:', response.data);
        const patientsArray = response.data.patients || [];
        setPatientRows(patientsArray);
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;

  const filteredPatients = patientRows.filter(patient =>
    (locationFilter === "All" || (patient.city && patient.city.toLowerCase() === locationFilter.toLowerCase())) &&
    (substanceFilter === "All" || (patient.Substance && patient.Substance.toLowerCase() === substanceFilter.toLowerCase())) &&
    Object.values(patient).some(value =>
      value && value.toString().toLowerCase().startsWith(searchTerm.toLowerCase())
    )
  );

  const displayedPatients = filteredPatients.slice(startIdx, endIdx);

  const locationOptions = Array.from(new Set(patientRows.map(patient => patient.city))).filter(Boolean);
  const substanceOptions = Array.from(new Set(patientRows.map(patient => patient.Substance))).filter(Boolean);

  return (
    <div className="users">
      <div className="info">
        <h1>Patients</h1>
        <Link to="/patient_register" className="add-patient-link">
          AddPatient
        </Link>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <label htmlFor="locationFilter">Location:</label>
        <select
          id="locationFilter"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="All">All</option>
          {locationOptions.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <label htmlFor="substanceFilter">Substance:</label>
        <select
          id="substanceFilter"
          value={substanceFilter}
          onChange={(e) => setSubstanceFilter(e.target.value)}
        >
          <option value="All">All</option>
          {substanceOptions.map((substance, index) => (
            <option key={index} value={substance}>
              {substance}
            </option>
          ))}
        </select>
      </div>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.field}>{column.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedPatients.map((patient, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.field}>{patient[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Patients;
