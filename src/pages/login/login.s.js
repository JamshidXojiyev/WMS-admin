import styled from "styled-components";
import { ReactComponent as LoginContentBg } from "../../assats/login.svg";

export const WrapLogIn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363740;
`;
export const Content = styled.div`
  width: 382px;
  height: 581px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffa11e;
  border-radius: 8px;
  position: relative;
`;
export const BgContent = styled(LoginContentBg)`
  position: absolute;
  top: ${({ type }) => (type === "top" ? "64px" : "400px")};
  left: ${({ type }) => (type === "top" ? "8px" : "110px")};
  z-index: 0;
`;
export const ContentWrap = styled.div`
  text-align: center;
  z-index: 999;
  width: 316px;
`;
export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 12px;
`;
export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-top: 34px;
`;
export const H3 = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 50px;
`;
