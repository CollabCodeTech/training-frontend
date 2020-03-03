import { useState } from "react";

function useFieldCollab() {
  const [show, setShow] = useState(false);

  function showPassword() {
    setShow(old => !old);
  }

  return {
    show,
    showPassword
  };
}

export default useFieldCollab;
