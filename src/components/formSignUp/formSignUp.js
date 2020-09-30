import React, { useEffect } from "react";
import useForm from "../../custom-hooks/useForm";
import validateForm from "../../utils/validateForm";
import "../../form.css";

const FormSignUp = ({ submitForm }) => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    validateForm,
    submitForm
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          get started with us today.Create your account by filling out the
          information below
        </h1>
        <div className="form-inputs">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-input"
            placeholder="please enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="please enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-input"
            placeholder="please enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            className="form-input"
            placeholder="please confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sing up
        </button>
        <span className="form-input-login">
          Already have an account? Login<a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
