import { useEffect, useState } from "react";

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [errors, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from submitted");
    setError(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { values, handleChange, handleSubmit, errors, isSubmitting };
};

export default useForm;
