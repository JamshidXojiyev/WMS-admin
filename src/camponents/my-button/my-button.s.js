import { ButtonBase } from "@material-ui/core";
import styled, { css } from "styled-components";

const whiteStyle = css`
  background: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffa11e;
  padding: 16px 0;
`;
const squashedStyle = css`
  background: #ffa11e;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  padding: 12px 0;
`;

export const BtnCamponent = styled(ButtonBase)`
  && {
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    font-family: "Inter", sans-serif;
    font-style: normal;
    gap: 8px;
    ${({ white, squashed }) => (white ? whiteStyle : squashedStyle)}
  }
`;
