import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Centers = () => {
  const [adminRows, setAdminRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const pageSize = 10;

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      type: "string",
      headerName: "Admin name",
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
      field: "state",
      type: "string",
      headerName: "Location",
      width: 150,
    },
    {
      field: "city",
      type: "string",
      headerName: "City",
      width: 150,
    },
   
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8000/admindata')
      .then(response => {
        console.log('Admin Data:', response.data);
        const adminsArray = response.data.admins || [];
        setAdminRows(adminsArray);
      })
      .catch(error => {
        console.error('Error fetching admin data:', error);
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

  const filteredAdmins = adminRows.filter(admin =>
    (locationFilter === "All" || (admin.state && admin.state.toLowerCase() === locationFilter.toLowerCase())) &&
    (cityFilter === "All" || (admin.city && admin.city.toLowerCase() === cityFilter.toLowerCase())) &&
    Object.values(admin).some(value =>
      value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const displayedAdmins = filteredAdmins.slice(startIdx, endIdx);

  const locationOptions = Array.from(new Set(adminRows.map(admin => admin.state))).filter(Boolean);
  const cityOptions = Array.from(new Set(adminRows.map(admin => admin.city))).filter(Boolean);

  return (
    <div className="users">
      <div className="info">
        <h1>Center</h1>
        
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
        <label htmlFor="cityFilter">City:</label>
        <select
          id="cityFilter"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="All">All</option>
          {cityOptions.map((city, index) => (
            <option key={index} value={city}>
              {city}
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
          {displayedAdmins.map((admin, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.field}>
                  {column.renderCell ? column.renderCell({ row: admin }) : admin[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={nextPage}>Next</button>
      <button onClick={prevPage}>Prev</button>
    </div>
  );
};

export default Centers;
