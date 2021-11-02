import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SearchCamponent = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      width: ${({ width }) => (width ? width : "100%")};
      height: ${({ height }) => (height ? height : "100%")};
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #9fa2b4;
      box-sizing: border-box;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #eaeaea;
    }
    .MuiSelect-select:focus {
      background-color: #00000000;
    }
    .MuiSelect-selectMenu {
      width: 100%;
      height: 100%;
      padding: 0 16px !important;
      display: flex;
      align-items: center;
    }
    .MuiOutlinedInput-notchedOutline {
      border: 0 !important;
      width: 100%;
      height: 100%;
      padding: 0 !important;
      top: 0;
    }
  }
`;
