import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { MyDiv } from "../../global-style/my-div.s.js";
import {
  H3,
  PaginationContainer,
  PaginationContent,
  TableWrap,
} from "./my-table.s";
import MyInput from "../my-input/my-input.jsx";
function MyTable(props) {
  return (
    <MyDiv height="calc(100% - 38px)">
      <MyDiv className={props.align}>
        <TableContainer>
          <TableWrap>
            <TableHead>
              <TableRow>
                {props.datas.header.map((data, index) => (
                  <TableCell align="center" key={index}>
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={props.datas.order.length}></TableCell>
              </TableRow>
              {props.datas.body.map((data, index) => (
                <TableRow className="table-row" key={index}>
                  {props.datas.order.map((item, indexx) => (
                    <TableCell align="left" key={indexx}>
                      {typeof item === "string" ? data[item] : item(data)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </TableWrap>
        </TableContainer>
      </MyDiv>

      <PaginationContainer>
        <PaginationContent
          defaultPage={props.page}
          count={props.pages}
          shape="rounded"
          onChange={(e, value) => props.onPageChange(value)}
        />
        <H3>Показать на странице</H3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitted");
          }}
        >
          <MyInput
            value={props.limit}
            global
            width="80px"
            height="40px"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.onLimitChange(e.target.value);
              }
            }}
          />
        </form>
      </PaginationContainer>
    </MyDiv>
  );
}

export default MyTable;
