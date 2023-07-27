import React, {Fragment} from "react";

import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClicking={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
