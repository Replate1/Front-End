import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/account">Account</Link>
    </nav>
  );
};

