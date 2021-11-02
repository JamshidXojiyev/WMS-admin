import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { TableWrap } from "./my-table.s";

function MyTable({ datas, ...res }) {
  return (
    <>
      <TableContainer>
        <TableWrap>
          <TableHead>
            <TableRow>
              {datas.header.map((data, index) => (
                <TableCell align="center" key={index}>
                  {data}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={datas.order.length}></TableCell>
            </TableRow>
            {datas.body.map((data, index) => (
              <TableRow className="table-row" key={index}>
                {datas.order.map((item, indexx) => (
                  <TableCell align="center" key={indexx}>
                    {data[item]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableWrap>
      </TableContainer>
    </>
  );
}

export default MyTable;
