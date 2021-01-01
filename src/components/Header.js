import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <h1> Matahari's Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Yokohama"> Yokohama </a>
        <a href="/?city=Tokyo"> Tokyo </a>
        <a href="/?city=Holmes Chapel"> Holmes Chapel </a>
        <a href="/?city=New York"> New York </a>
      </nav>
    </header>
  );
}

export default Header;
