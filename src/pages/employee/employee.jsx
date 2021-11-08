import axios from "axios";
import React, { useEffect, useState } from "react";
import MyButton from "../../camponents/my-button/my-button";
import MyInput from "../../camponents/my-input/my-input";
import MyTable from "../../camponents/my-table/my-table";
import { MyLoader } from "../../global-style/loader.s";
import { MyDiv } from "../../global-style/my-div.s";
import { ReactComponent as Edit } from "../../assats/edit.svg";
import { IconButton } from "@material-ui/core";
import MyDialog from "../../camponents/my-dialog/my-dialog";
import EmployeeDialog from "./employee-dialog/employee-dialog";

function Employee(props) {
  const [respons, setRespons] = useState([]);
  const [load, setLoad] = useState(true);
  const [dialog, setDialog] = useState(false);
  const [editData, setEditData] = useState([]);

  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const productDataE = {
    header: [
      <Edit />,
      "Имя",
      "Фамилия",
      "Номер телефон",
      "Пароль",
      "Статус",
      "Роль",
      "Секция",
    ],
    body: [],
    order: [
      (item) => (
        <IconButton
          onClick={() => {
            setDialog(true);
            setEditData(item);
          }}
        >
          <Edit />
        </IconButton>
      ),
      "name",
      "last_name",
      "phone",
      "password",
      "status",
      "role",
      "section",
    ],
  };
  const [data, setData] = useState(productDataE);

  useEffect(() => {
    setLoad(true);
    axios
      .get(`http://89.223.71.112:3000/user?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: "OTM5MzcwMzAyOjkzNzAzMDI=",
        },
      })
      .then((res) => {
        setRespons(res.data.data);
        setLoad(false);
        setPages((res.data.count / limit).toFixed());
      })
      .catch((err) => console.log(err.message));
  }, [limit, offset, page, dialog]);
  useEffect(() => {
    setOffset((page - 1) * limit);
  }, [page]);

  useEffect(() => {
    const TableData = respons.map((user) => {
      const tableTest = {
        id: user.id,
        name: user.Name,
        last_name: user.last_name,
        phone: user.Phone,
        password: user.Password,
        status: user.warehouse,
        role: user.permission,
        section: user.section,
      };
      return tableTest;
    });
    setData({ ...data, body: TableData });
  }, [load]);

  return (
    <>
      <MyDiv height="38px" gap="20px" header>
        <MyDiv></MyDiv>
        <MyButton
          squashed
          text="Добавить сотрудник"
          width="176px"
          onClick={() => {
            setDialog(true);
            setEditData([]);
          }}
        />
        <MyDialog
          title="Сотрудники править"
          body={
            <EmployeeDialog
              data={editData}
              onCloseDialog={(e) => setDialog(e)}
            />
          }
          onClose={() => setDialog(false)}
          open={dialog}
          CloseBtn={(e) => setDialog(e)}
        />
      </MyDiv>
      {load ? (
        <MyLoader />
      ) : (
        <MyTable
          onPageChange={(val) => {
            setPage(val);
          }}
          onLimitChange={(val) => setLimit(val)}
          datas={data}
          pages={pages}
          page={page}
          limit={limit}
          offset={offset}
          align="employee-table"
        />
      )}
    </>
  );
}

export default Employee;
