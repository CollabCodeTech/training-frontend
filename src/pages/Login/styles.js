import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  @media (min-width: 450px) {
    max-width: 450px;
  }

  @media (min-height: 568px) {
    max-height: 568px;
  }
`;
