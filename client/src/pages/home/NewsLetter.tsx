import React from 'react';

const Newsletter = () => {
  const containerStyle = {
    textAlign: 'center',
    maxWidth: '400px',
    margin: '20px auto',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Subscribe to Newsletter</h2>
      <input
        type="email"
        placeholder="Enter email"
        style={inputStyle}
      />
      <button style={buttonStyle}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
