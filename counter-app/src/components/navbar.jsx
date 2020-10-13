import React, { Component } from "react";

// Stateless Funstion Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar <span class="badge.badge-pill.badge-secondary" /> {totalCounters}
      </a>
    </nav>
  );
};

export default NavBar;
