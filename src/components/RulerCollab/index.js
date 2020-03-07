import React from "react";

const RuleCollab = ({ width, align }) => (
  <hr noshade="noshade" width={width} align={align} size="2" />
);

RuleCollab.defaultProps = {
  width: "100%",
  align: "left"
};

export default RuleCollab;
