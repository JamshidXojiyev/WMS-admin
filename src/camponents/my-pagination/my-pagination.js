import styled from "styled-components";
import { Pagination } from "@material-ui/lab";

export const PaginationContainer = styled.div`
  padding: 18px 0;
  position: sticky;
  bottom:0;
  gap: 18px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;
export const PaginationContent = styled(Pagination)`
  && {
    ul > li {
      border: 1px solid #e9ecf1;
      display: inline-flex;
      height: 40px;
      width: 40px;
      border-right: 0;
    }

    ul > li:nth-child(1) {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    ul > li:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border: 1px solid #e9ecf1 !important;
    }
    ul > li > button,
    ul > li > div {
      height: 40px;
      width: 40px;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #b0b7cb;
      border-radius: 0;
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #00000000;
      color: #474c5e;
    }
  }
`;
export const H3 = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b0b7cb;
`;
