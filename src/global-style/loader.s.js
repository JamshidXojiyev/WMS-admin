import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

export const MyLoader = styled(LinearProgress)`
  && {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    background-color: #fff !important;
    .MuiLinearProgress-barColorPrimary {
      background-color: #d3d3d3 !important;
    }
  }
`;
