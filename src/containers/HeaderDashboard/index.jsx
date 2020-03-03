import React from "react";

import LogoCollab from "../../components/LogoCollab";

import { Header, PhotoUser } from "./styles";

export default function HeaderDashboard() {
  return (
    <Header>
      <LogoCollab />
      <PhotoUser img="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg" />
    </Header>
  );
}
