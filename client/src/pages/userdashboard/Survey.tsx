import React from 'react';
import { Link } from 'react-router-dom';

const Survey = () => {
  // Style for the survey forms container
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // Adjust the height based on your needs
  };

  // Style for the survey forms header
  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  // Style for the link
  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
  };

  // Style for link hover state
  const linkHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      {/* Header for survey forms */}
      <h1 style={headerStyle}>Survey Forms</h1>

      {/* Link to the survey form */}
      <Link to="/surveyform" style={linkStyle} activeStyle={linkHoverStyle}>
        Go to Survey Form
      </Link>
    </div>
  );
};

export default Survey;
