import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

export const MyLoader = styled(LinearProgress)`
  && {
    z-index: 999;
    position: fixed !important;
    top: 0 !important;
    left: 225px !important;
    width: 100% !important;
    background-color: #fff !important;
    .MuiLinearProgress-barColorPrimary {
      background-color: #d3d3d3 !important;
    }
  }
`;
