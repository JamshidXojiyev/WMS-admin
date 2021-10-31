import { InputBase } from "@material-ui/core";
import styled, { css } from "styled-components";

const loginStyle = css`
  background: #fcfdfe;
  border: 1px solid #f0f1f7;
  border-radius: 8px;
`;
const globalStyle = css`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;

export const InputCamponent = styled(InputBase)`
  && {
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9fa2b4;
    box-sizing: border-box;
    padding: 12px 16px;
    & input {
      padding: 0 !important;
    }
    ${({ login, global }) => (login ? loginStyle : globalStyle)}
  }
`;
