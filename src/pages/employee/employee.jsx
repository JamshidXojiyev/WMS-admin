import axios from "axios";
import React, { useEffect, useState } from "react";
import MyButton from "../../camponents/my-button/my-button";
import MyInput from "../../camponents/my-input/my-input";
import MyTable from "../../camponents/my-table/my-table";
import { MyLoader } from "../../global-style/loader.s";
import { MyDiv } from "../../global-style/my-div.s";
import { productDataE } from "./data";

function Employee(props) {
  const [respons, setRespons] = useState([]);
  const [data, setData] = useState(productDataE);
  const [load, setLoad] = useState(true);

  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setLoad(true);
    console.log("get - page: ", page);
    console.log("get - offset: ", offset);
    axios
      .get(`http://89.223.71.112:3000/user?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: "OTk1MzkzMTk3OjUzOTMxOTc=",
        },
      })
      .then((res) => {
        setRespons(res.data.data);
        setLoad(false);
        setPages((res.data.count / limit).toFixed());
      })
      .catch((err) => console.log(err.message));
  }, [limit, offset, page]);
  useEffect(() => {
    setOffset((page - 1) * limit);
  }, [page]);

  useEffect(() => {
    const TableData = respons.map((user) => {
      const tableTest = {
        name: user.Name,
        last_name: user.last_name,
        phone: user.Phone,
        password: user.Password,
        permission: user.permission,
        warehouse: user.warehouse,
        section: user.section,
      };
      return tableTest;
    });
    setData({ ...data, body: TableData });
  }, [load]);

  return (
    <>
      <MyDiv height="38px" gap="20px" header>
        <MyInput value="Search" global width="531px" />
        <MyButton squashed text="Добавить сотрудник" width="176px" />
      </MyDiv>
      {load ? (
        <MyLoader />
      ) : (
        <MyTable
          onPageChange={(val) => {
            setPage(val);
            console.log("page edit: ", val);
          }}
          onLimitChange={(val) => setLimit(val)}
          datas={data}
          pages={pages}
          page={page}
          limit={limit}
          offset={offset}
        />
      )}
    </>
  );
}

export default Employee;
