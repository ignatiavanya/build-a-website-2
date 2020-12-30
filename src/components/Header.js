import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> WEATHER APP </h1>
      </div>
      <nav>
        <a href="/?city=Sydney"> Sydney </a>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Canberra"> Canberra </a>
        <a href="/?city=New%20York"> New York </a>
      </nav>
    </header>
  );
}

export default Header;
