import React from "react";

import HeaderLogin from "../../containers/HeaderLogin";
import FormLogin from "../../containers/FormLogin";
import { Page, Content } from "./styles";

function Login() {
  return (
    <Page>
      <Content>
        <HeaderLogin />
        <FormLogin />
      </Content>
    </Page>
  );
}

export default Login;
