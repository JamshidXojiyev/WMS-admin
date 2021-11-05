import React, { useState } from "react";
import { Body, DialogContainer, Title, TitleText } from "./my-dialog.s";
import { ReactComponent as Close } from "../../assats/close.svg";
import { IconButton } from "@material-ui/core";

function MyDialog({ ...res }) {
  return (
    <>
      <DialogContainer {...res}>
        <Title>
          <TitleText>{res.title}</TitleText>
          <IconButton onClick={() => res.CloseBtn(false)}>
            <Close />
          </IconButton>
        </Title>
        <Body>{res.body}</Body>
      </DialogContainer>
    </>
  );
}

export default MyDialog;
