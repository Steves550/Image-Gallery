import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-container text-center mt-5">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-1">Loading Images...</p>
    </div>
  );
};

export default Spinner;
