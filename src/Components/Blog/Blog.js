import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <h3>Difference between javascript and nodejs</h3>
        <p className="fs-4">
          JavaScript is a programming language. It is running in any web browser
          with a proper browser engine Whereas Node.js is an interpreter and
          runtime environment for JavaScript with some specific useful libraries
          which JavaScript programming can use separately. <br />
          JavaScript is normally used for any client-side activity for one web
          application. An activity can be dynamic page display in some schedule
          time interval. Whereas Node JS mainly used for accessing or running
          any operating system for non-blocking operation.
          <br />
          JavaScript runs on any engine like Spider monkey (FireFox), JavaScript
          Core (Safari), V8 (Google Chrome). Node JS only runs in a V8 engine
          which mainly used by google chrome. And javascript program which will
          be written under this Node JS will be always run in V8 Engine.
        </p>
      </div>
      <div className="mt-5">
        <h3>When should you use nodejs and when should you use mongodb</h3>
        <p className="fs-4">
          NodeJS is a JavaScript runtime environment. It's actually helps
          JavaScript to run outside of browser. It's used in server side
          development. It helps us to to connect our client site to database by
          it's server site <br />
          MongoDB is a No-SQL database for storing data. If our application
          needs to persistently store data in a way that we can efficiently
          query or update it later then we use mongodb.
          <br />
          In short while building a website if we need a database to store the
          data or information so here we can use MongoDB but to be connected
          with MongoDB we need a connector, so here we can use NodeJS which will
          help our website to run outside of browser.
        </p>
      </div>
      <div className="mt-5">
        <h3>Differences between SQL and NoSQL databases</h3>
        <p className="fs-4">
          SQL is the programming language used to interface with relational
          databases. NoSQL is a class of DBMs that are non-relational and
          generally do not use SQL. <br />
          SQL databases have a predefined schema whereas NoSQL databases use
          dynamic schema for unstructured data.
          <br />
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable
          <br />
          SQL databases are table based databases whereas NoSQL databases can be
          document based, key-value pairs, graph databases.
        </p>
      </div>
    </div>
  );
};

export default Blog;
