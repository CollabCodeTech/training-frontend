import React from "react";

import PageAuth from "../../containers/PageAuth";
import ContentAuth from "../../containers/ContentAuth";
import HeaderAuth from "../../containers/HeaderAuth";
import FormResendConfirmAccount from "../../containers/FormResendConfirmAccount";

function ResendConfirmAccount() {
  return (
    <PageAuth>
      <ContentAuth>
        <HeaderAuth />
        <FormResendConfirmAccount />
      </ContentAuth>
    </PageAuth>
  );
}

export default ResendConfirmAccount;
