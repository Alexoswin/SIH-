// Cards.jsx
import React, { useEffect } from "react";
import Card from "./CardUI";
import img1 from "./patients2.jpg";
import img2 from "./centers1.jpg";

const Cards = () => {
  useEffect(() => {
    // Import Bootstrap styles dynamically
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align content at the center
  };

  const headerStyle = {
    textAlign: 'center',
    borderBottom: '2px solid #007BFF', // Adjust the color as needed
    paddingBottom: '10px',
    marginBottom: '20px',
    marginTop: '30px', // Adjust the margin from the top
    fontWeight: 'bold', // Increase the font weight
  };

  const paragraphStyle = {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666', // Adjust the color as needed
    maxWidth: '600px', // Adjust the max width as needed
    margin: '0 auto', // Center the paragraph
  };

  const cardStyle = {
    height: '80%', // Adjust the height as needed
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={headerStyle}>Features</h2>
      
      <div className="row">
        <div className="col-md-6">
          <Card
            imgsrc={img1}
            title="Patients"
            description="Information about patients and related details. You can provide more information in this paragraph."
            style={{ ...cardStyle, height: '200px' }}
          />
        </div>
        <div className="col-md-6">
          <Card
            imgsrc={img2}
            title="Centers"
            description="Information about rehabilitation centers and their services. You can provide more information in this paragraph."
            style={{ ...cardStyle, height: '200px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
