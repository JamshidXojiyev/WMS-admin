import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { SearchCamponent } from "./my-select.s";

function MySelect({ ...resp }) {
  return (
    <>
      <SearchCamponent
        {...resp}
        width={resp.width}
        height={resp.height}
        variant="outlined"
        select
      >
        {resp.data.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </SearchCamponent>
    </>
  );
}

export default MySelect;
