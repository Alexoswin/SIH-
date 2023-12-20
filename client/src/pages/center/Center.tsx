import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./center.scss";

const Center = () => {
  const { id } = useParams();
  const imageUrl = "https://img.freepik.com/free-vector/flat-design-cc-logo-template_23-2149231114.jpg";
  const [centerData, setCenterData] = useState({
    name: "Sample Center",
    location: "Sample Location",
    address: "",
    number: "",
    city: "Kurla",
    center_name: "HIU",
    specialization: "Alcohol"
  });

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchCenterData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/center/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCenterData(data.center);
          await fetchPatientsByCenter(data.center.center_name); // Fetch patients for the centerdata.center.center_name
        } else {
          console.error("Failed to fetch center data");
        }
      } catch (error) {
        console.error("Error fetching center data:", error);
      }
    };
  
    fetchCenterData();
  }, [id]);


  const fetchPatientsByCenter = async (centerName) => {
    try {
      const response = await fetch('http://localhost:8000/patientsByCenter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ center: centerName }) // Sending center name in the body
      });

      if (response.ok) {
        const data = await response.json();
        setPatients(data.patients);
        console.log(data);
      } else {
        console.error("Failed to fetch patients by center");
      }
    } catch (error) {
      console.error("Error fetching patients by center:", error);
    }
  };


  return (
    <div className="product">
      <div className="image-section">
        <img src={imageUrl} alt="Center Image" />
      </div>
      <div className="info-section">
        <h2>{centerData.center_name}</h2>
        <p>Location: {centerData.city}</p>
        <p>Address: {centerData.state}</p>
        <p>Contact Number: {centerData.number}</p>
        <p>Specialization: Alcohol</p>

        <div className="patients-list">
          <h3>Patients:</h3>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Type of addition</th>
              <th>City</th>
              <th>Contact Number</th>
              <th>Days Sober</th>
              


            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td>{`${patient.Firstname} ${patient.LastName}`}</td>
                <td>{patient.age}</td>
                <td>{patient.Substance}</td>
                <td>{patient.city}</td>
                <td>{patient.number}</td>
                <td>{patient.daysSober}</td>
                {/* Add more table cells for other patient details */}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Center;
