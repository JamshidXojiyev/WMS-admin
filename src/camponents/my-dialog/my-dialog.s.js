import { Dialog } from "@material-ui/core";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)``;
export const Title = styled.div`
  margin: 0 24px;
  padding: 14px 0 8px;
  padding-bottom: 0;
  min-width: 470px !important;
  max-width: 470px !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;
export const TitleText = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: #363740;
`;

export const Body = styled.div`
  min-width: 470px !important;
  max-width: 470px !important;
  margin: 12px 24px;
`;
