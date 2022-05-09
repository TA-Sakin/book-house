import React from "react";

const Banner = () => {
  return (
    <div
      //   style={{ minHeight: "90vh" }}
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5744b968c2ea51e72bb35354/1596828184578-2Z802X0B7RIMCZR7N58F/River+%26+Dakota+12-7-19+-+273.jpg"
            className="d-block w-100 img-fluid"
            alt="..."
            style={{ height: "93vh" }}
          />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner;
