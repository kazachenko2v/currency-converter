import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link data-testid="link" to={"/"}>
        <Button variant="outlined">Main</Button>
      </Link>
      <Link data-testid="link" to={"/converter"}>
        <Button variant="outlined">Converter</Button>
      </Link>
    </header>
  );
};

export default Header;
