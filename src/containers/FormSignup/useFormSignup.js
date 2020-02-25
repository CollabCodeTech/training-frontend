import { useState, useEffect } from "react";

import validationSignup from "./validation";

function useObserver(sendForm) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;

    setUser(oldUser => ({ ...oldUser, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors(validationSignup(user));
    setIsSubmitting(true);
  }

  function sendFormIfValid() {
    if (
      Object.values(errors).filter(error => error).length === 0 &&
      isSubmitting
    ) {
      sendForm();
    }
  }

  useEffect(sendFormIfValid, [errors]);

  return {
    user,
    handleChange,
    handleSubmit,
    errors,
    setErrors
  };
}

export default useObserver;
