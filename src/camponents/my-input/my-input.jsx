import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { InputCamponent } from "./my-input.s";
import { ReactComponent as VisibilityOffSVG } from "../../assats/VisibilityOffSVG.svg";
import { ReactComponent as VisibilitySVG } from "../../assats/VisibilitySVG.svg";

function MyInput({ value, ...resp }) {
  const pas = resp.password ? true : false;
  const [open, setOpen] = useState(pas);
  return (
    <InputCamponent
      {...resp}
      placeholder={value}
      width={resp.width}
      height={resp.height}
      type={open ? "password" : "text"}
      endAdornment={
        resp.password && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setOpen(!open)}
            onMouseDown={() => setOpen(false)}
            edge="end"
          >
            {open ? <VisibilityOffSVG /> : <VisibilitySVG />}
          </IconButton>
        )
      }
    ></InputCamponent>
  );
}

export default MyInput;
