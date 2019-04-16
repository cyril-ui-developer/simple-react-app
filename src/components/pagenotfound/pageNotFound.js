import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => (
  <section className="container">
    <h1>Error Page: 404 </h1>
    <p>Page Not Found</p>
    <Link to="/users">Go to Users Dashbaords</Link>
  </section>
);

export default PageNotFound;
