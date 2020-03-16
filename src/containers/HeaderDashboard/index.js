import React from "react";

import LogoCollab from "../../components/LogoCollab";
import PhotoUserCollab from "../../components/PhotoUserCollab";

import { Header } from "./styles";

export default function HeaderDashboard() {
  return (
    <Header>
      <LogoCollab />
      <PhotoUserCollab img={'https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg'} />
    </Header>
  );
}

