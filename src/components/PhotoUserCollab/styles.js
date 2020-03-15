import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
  border: 0;
  margin: 10px;
  position: relative;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const PhotoUser = styled.img`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`;
