import { ListItem } from "@material-ui/core";
import styled, { css } from "styled-components";

export const Siderbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100vh;
  background: #363740;
`;
export const ListItemBtn = styled(ListItem)`
  && .MuiListItemText-root {
    height: 56px;
    ${({ activ }) =>
      activ
        ? css`
            background: #ffa11e !important;
          `
        : ""}
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    & > span {
      padding-left: 58px;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff !important;
    }
  }
`;
export const Navigationbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 225px;
  height: 78px;
  background: #363740;
  padding-left: 30px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: left;
`;
export const Body = styled.div`
  position: fixed;
  top: 78px;
  bottom: 0;
  right: 0;
  left: 225px;
  padding: 20px 30px;
  overflow-x: scroll;
`;
