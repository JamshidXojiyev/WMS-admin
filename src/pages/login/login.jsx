import React, { useState } from "react";
import {
  BgContent,
  Content,
  ContentWrap,
  H1,
  H2,
  H3,
  WrapLogIn,
} from "./login.s";
import { ReactComponent as Brand } from "../../assats/brand.svg";
import MyInput from "../../camponents/my-input/my-input";
import { MyInputLabel } from "../../global-style/input-label.s";
import { ErrMessage } from "../../global-style/err-message.s";
import { MyDiv } from "../../global-style/my-div.s";
import MyButton from "../../camponents/my-button/my-button";

function LogIn(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  
  return (
    <WrapLogIn>
      <Content>
        <BgContent type="top" />
        <BgContent type="bottom" />
        <ContentWrap>
          <Brand />
          <H2>Admin Panel</H2>
          <H1>Log In to Admin Panel</H1>
          <H3>Enter your phone number and password below</H3>
          <MyDiv margin="0 0 24px 0">
            <MyInputLabel>LOGIN</MyInputLabel>
            <MyInput
              login
              value="Enter your Login here"
              height="42px"
              onChange={(e) => setLogin(e.target.value)}
            />
            {err === "login" && (
              <ErrMessage>You must enter your login</ErrMessage>
            )}
          </MyDiv>
          <MyDiv margin="0 0 24px 0">
            <MyInputLabel>PASSWORD</MyInputLabel>
            <MyInput
              login
              password
              value="Enter your password"
              height="42px"
              onChange={(e) => setLogin(e.target.value)}
            />
            {err === "login" && (
              <ErrMessage>You must enter your password</ErrMessage>
            )}
          </MyDiv>

          <MyButton white text="Log In" />
          {/* <MyButton squashed icon={<IconS />} text="Log In" /> */}
        </ContentWrap>
      </Content>
    </WrapLogIn>
  );
}

export default LogIn;
