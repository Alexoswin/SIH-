import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./centers.scss";
// ... (other imports)

const Centers = () => {
  const [adminRows, setAdminRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
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
    {
      field: "view", // New column for the "View" button
      headerName: "View",
      width: 90,
      renderCell: (params) => (
        <Link to={`/centers/${params.row._id}`} className="view-button">
          View
        </Link>
      ),
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
    Object.values(admin).some(value =>
      value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const displayedAdmins = filteredAdmins.slice(startIdx, endIdx);

  return (
    <div className="users">
      <div className="info">
        <h1>Center</h1>
        <Link to="/admin_register" className="add-patient-link">
          Add Centers
        </Link>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
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
