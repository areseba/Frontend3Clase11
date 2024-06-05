import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

const Navbar = () => {
  return (
    <div>
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
    </div>
  );
}

export default Navbar