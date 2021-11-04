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
import MySearch from "../../camponents/my-select/my-select";
function MyTable(props) {
  return (
    <MyDiv height="calc(100% - 38px)">
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
                  <TableCell align="center" key={indexx}>
                    {typeof item === "string" ? data[item] : item(data)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableWrap>
      </TableContainer>
      <PaginationContainer>
        <PaginationContent
          defaultPage={props.page}
          count={props.pages}
          shape="rounded"
          onChange={(e, value) => props.onPageChange(value)}
        />
        <H3>Показать на странице</H3>
        <MySearch
          defaultValue={props.limit}
          width="80px"
          height="40px"
          data={["10", "20", "30", "50"]}
          onChange={(e) => props.onLimitChange(e.target.value)}
        />
      </PaginationContainer>
    </MyDiv>
  );
}

export default MyTable;
