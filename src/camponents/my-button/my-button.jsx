import React from "react";
import { BtnCamponent } from "./my-button.s";

function MyButton({ ...resp }) {
  return (
    <>
      <BtnCamponent {...resp}>
        {resp.icon}
        {resp.text}
      </BtnCamponent>
    </>
  );
}

export default MyButton;
