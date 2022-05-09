import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center my-5">Contact Us</h1>
      <div className="row no-gutters">
        <div className="col-md-7 d-flex align-items-stretch">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <form
              method="POST"
              id="contactForm"
              name="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control "
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control mb-3"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-stretch">
          <iframe
            title="Our office"
            width="500"
            height="400"
            frameBorder="0"
            style={{ backgroundolor: "black" }}
            //   style="border:0"
            src="https://www.google.com/maps/embed/v1/directions?
origin=Current%20Location&destination=place_id:ChIJ09-VQKbYrDAR2QVpy1vMFVA&key=AIzaSyC-5CY9mOCeg5Y3IhPqi_Yd0-DZtWrJl-E"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
