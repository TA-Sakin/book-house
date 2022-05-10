import React from "react";

const Spinner = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status"></div>
      </div>
    </div>
  );
};

export default Spinner;
