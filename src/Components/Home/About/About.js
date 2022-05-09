import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <div className="container">
      <h1 className="my-5 text-center">A right book can change your life</h1>
      <div className="row no-gutters bg-light position-relative align-items-center">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-store-or-book-app-icon-logo-design-template-da3ff319832ce9f54aa7df503624427e_screen.jpg?ts=1585146773"
            alt="..."
            className="w-100"
          />
        </div>
        <div className="col-md-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">What we do?</h5>
          <p>
            Here we manage all the books we have in our store. We regularly
            update books information in our inventory. Our mission is to help
            people find and share books they love. You can find out if a book is
            a good fit for you and track the books you want to read.
          </p>
          <Link to="" className="text-decoration-none">
            <b>
              Explore more <BsArrowRight></BsArrowRight>
            </b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
