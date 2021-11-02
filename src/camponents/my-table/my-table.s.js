import { Table } from "@material-ui/core";
import styled from "styled-components";

export const TableWrap = styled(Table)`
  min-width: 100%;
  & thead > tr > th {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #363740;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  & tbody > tr:nth-child(even) {
    background: #f9f9f9;
  }
  & .MuiTableRow-root:nth-child(1) > td {
    padding: 0 !important;
    height: 14px !important;
    border: 0;
  }
  & tbody > tr > td {
    padding: 0 !important;
    height: 39px;
    border: 0;
  }
  & .MuiTableCell-body {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6f6f6f;
  }
  & .MuiTableRow-root td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & .MuiTableRow-root td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
