import React from "react";

import PageAuth from "../../containers/PageAuth";
import ContentAuth from "../../containers/ContentAuth";
import HeaderAuth from "../../containers/HeaderAuth";
import FormSignup from "../../containers/FormSignup";

function Signup() {
  return (
    <PageAuth>
      <ContentAuth>
        <HeaderAuth />
        <FormSignup />
      </ContentAuth>
    </PageAuth>
  );
}

export default Signup;
