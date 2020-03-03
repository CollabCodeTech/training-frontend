import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;

  img {
    height: 40px;
  }

  @media (max-width: 767.98px) {
    justify-content: center;
  }
`;

export const PhotoUser = styled.div`
  position: relative;
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

  &::after {
    background: url(${props => props.img}) center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    display: none;
  }
`;
