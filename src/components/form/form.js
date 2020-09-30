import React, { useState } from "react";
import FormSignUp from "../formSignUp/formSignUp";
import FormSuccess from "../formSuccess/formSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    // <div>
    //   {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess /> }
    // </div>
  );
};

export default Form;
