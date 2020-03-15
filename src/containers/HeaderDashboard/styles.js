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
