import {useRef, useState} from "react";

import useInput from "../hooks/use-input";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim().length === 5);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    resetNameInput();
    resetStreetInput();
    resetPostalCodeInput();
    resetCityInput();
  };

  // const nameControlClasses = nameInputHasError
  //   ? "form-control invalid"
  //   : "form-control";

  const nameControlClasses = `${classes.control} ${
    nameInputHasError ? classes.invalid : ""
  }`;

  const streetControlClasses = `${classes.control} ${
    streetInputHasError ? classes.invalid : ""
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    postalCodeInputHasError ? classes.invalid : ""
  }`;

  const cityControlClasses = `${classes.control} ${
    cityInputHasError ? classes.invalid : ""
  }`;

  //------------------------------------------------------------------------

  // const [formInputValidity, setFormInputValidity] = useState({
  //   name: true,
  //   street: true,
  //   postalCode: true,
  //   city: true,
  // });

  // const nameinputRef = useRef();
  // const streetInputRef = useRef();
  // const postalCodeInputRef = useRef();
  // const cityInputRef = useRef();

  // const confirmHandler = (event) => {
  //   event.preventDefault();

  //   const enteredName = nameinputRef.current.value;
  //   const enteredStreet = streetInputRef.current.value;
  //   const enteredPostalCode = postalCodeInputRef.current.value;
  //   const enteredCity = cityInputRef.current.value;

  //   const enteredNameIsValid = !isEmpty(enteredName);
  //   const enteredStreetIsValid = !isEmpty(enteredStreet);
  //   const enteredCityIsValid = !isEmpty(enteredCity);
  //   const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);

  //   setFormInputValidity({
  //     name: enteredNameIsValid,
  //     street: enteredStreetIsValid,
  //     postalCode: enteredPostalCodeIsValid,
  //     city: enteredCityIsValid,
  //   });

  //   const formIsValid =
  //     enteredNameIsValid &&
  //     enteredStreetIsValid &&
  //     enteredPostalCodeIsValid &&
  //     enteredCityIsValid;

  //   if (!formIsValid) {
  //     return;
  //   }

  //   props.onConfirm({
  //     name: enteredName,
  //     street: enteredStreet,
  //     postalCode: enteredPostalCode,
  //     city: enteredCity,
  //   });
  // };

  // const nameControlClasses = `${classes.control} ${
  //   formInputValidity.name ? "" : classes.invalid
  // }`;
  // const streetControlClasses = `${classes.control} ${
  //   formInputValidity.name ? "" : classes.invalid
  // }`;
  // const postalCodeControlClasses = `${classes.control} ${
  //   formInputValidity.name ? "" : classes.invalid
  // }`;
  // const cityControlClasses = `${classes.control} ${
  //   formInputValidity.name ? "" : classes.invalid
  // }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && <p>Please enter a valid Name</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Your Street</label>
        <input
          type="text"
          id="street"
          onBlur={streetBlurHandler}
          onChange={streetChangeHandler}
        />
        {streetInputHasError && <p>Please enter a valid Street</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          onBlur={postalCodeBlurHandler}
          onChange={postalCodeChangeHandler}
        />
        {postalCodeInputHasError && <p>Please enter a valid Postal Code</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="name">Your City</label>
        <input
          type="text"
          id="city"
          onBlur={cityBlurHandler}
          onChange={cityChangeHandler}
        />
        {cityInputHasError && <p>Please enter a valid City</p>}
      </div>

      {/* <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid Street</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid Postal Code</p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid City</p>}
      </div> */}

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
