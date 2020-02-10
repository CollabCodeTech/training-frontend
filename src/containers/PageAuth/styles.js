import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--gap-medium);

  @media (min-height: 570px) {
    height: 100vh;
  }

  @media (min-width: 1596px) and (min-height: 900px) {
    padding: 0;
  }
`;
