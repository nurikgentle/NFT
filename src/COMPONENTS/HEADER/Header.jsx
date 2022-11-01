import React from "react";
import "./Header.scss";

const Header = ({ setSearch }) => {
  return (
    <header>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="искать NFT..."
      />
    </header>
  );
};

export default Header;
