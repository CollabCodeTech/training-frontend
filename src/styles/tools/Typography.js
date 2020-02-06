import { css } from "styled-components";

const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

export const _h1 = css`
  font-weight: ${weight.light};
  font-size: 96px;
  letter-spacing: -1.5px;
  text-transform: none;
`;

export const _h2 = css`
  font-weight: ${weight.light};
  font-size: 60px;
  letter-spacing: -0.5;
  text-transform: none;
`;

export const _h3 = css`
  font-weight: ${weight.regular};
  font-size: 48px;
  letter-spacing: 0px;
  text-transform: none;
`;

export const _h4 = css`
  font-weight: ${weight.regular};
  font-size: 34px;
  letter-spacing: 0.25px;
  text-transform: none;
`;

export const _h5 = css`
  font-weight: ${weight.regular};
  font-size: 24px;
  letter-spacing: 0;
  text-transform: none;
`;

export const _h6 = css`
  font-weight: ${weight.medium};
  font-size: 20px;
  letter-spacing: 0.15px;
  text-transform: none;
`;

export const _subtitle1 = css`
  font-weight: ${weight.regular};
  font-size: 16px;
  letter-spacing: 0.15px;
  text-transform: none;
`;

export const _subtitle2 = css`
  font-weight: ${weight.medium};
  font-size: 14px;
  letter-spacing: 0.1px;
  text-transform: none;
`;

export const _body1 = css`
  font-weight: ${weight.regular};
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: none;
`;

export const _body2 = css`
  font-weight: ${weight.regular};
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: none;
`;

export const _button = css`
  font-weight: ${weight.medium};
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: none;
`;

export const _caption = css`
  font-weight: ${weight.regular};
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: none;
`;

export const _overline = css`
  font-weight: ${weight.bold};
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: none;
`;
