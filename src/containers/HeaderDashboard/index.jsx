import React from "react";

import LogoCollab from "../../components/LogoCollab";

import { Header, PhotoUser } from "./styles";

export default function HeaderDashboard({ photoUser }) {
  return (
    <Header>
      <LogoCollab />
      <PhotoUser img={photoUser} />
    </Header>
  );
}

HeaderDashboard.defaultProps = {
  photoUser:
    "https://webappappi-webappappislt1.azurewebsites.net/img/63703629760793-image.jpg?width=100"
};
