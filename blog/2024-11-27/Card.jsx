import React from 'react';

export default function Card({ title, description }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
