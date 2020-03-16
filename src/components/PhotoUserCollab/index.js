import React from "react";

import { Container, PhotoUser } from "./styles";
import ImageUserDefault from "../../img/userdefault.jpg";

const PhotoUserCollab = ({ img }) => (
  <Container>
    <PhotoUser src={img ? img : ImageUserDefault} />
  </Container>
);

export default PhotoUserCollab;
