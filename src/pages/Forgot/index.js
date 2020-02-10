import React from "react";

import PageAuth from "../../containers/PageAuth";
import ContentAuth from "../../containers/ContentAuth";
import HeaderAuth from "../../containers/HeaderAuth";
import FormForgot from "../../containers/FormForgot";

function Forgot() {
  return (
    <PageAuth>
      <ContentAuth>
        <HeaderAuth />
        <FormForgot />
      </ContentAuth>
    </PageAuth>
  );
}

export default Forgot;
