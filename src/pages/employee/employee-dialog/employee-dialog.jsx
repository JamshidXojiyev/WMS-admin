import React, { useEffect, useState } from "react";
import MyButton from "../../../camponents/my-button/my-button";
import MyInput from "../../../camponents/my-input/my-input";
import { Form } from "../../../global-style/form.s";
import { DialogBodyContent, DialogBtn } from "./employee-dialog.s";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function EmployeeDialog({ data, onCloseDialog }) {
  const [name, set_name] = useState(data == [] ? "" : data.name);
  const [last_name, set_last_name] = useState(data == [] ? "" : data.last_name);
  const [phone, set_phone] = useState(data == [] ? "" : data.phone);
  const [password, set_password] = useState(data == [] ? "" : data.password);
  const [status, set_status] = useState(data == [] ? "" : data.status);
  const [role, set_role] = useState(data == [] ? "" : data.role);
  const [section, set_section] = useState(data == [] ? "" : data.section);

  const [errMessage, setErrMessage] = useState("");
  const [errType, setErrType] = useState("error");
  const [tost, setTost] = useState(false);

  const create = (e) => {
    e.preventDefault();
    if (
      !name ||
      !last_name ||
      !phone ||
      !password ||
      !status ||
      !role ||
      !section
    ) {
      setTost(true);
      setErrMessage("Обязательные поля пустые!");
    } else {
      axios
        .post("http://89.223.71.112:3000/signUp", {
          Name: name,
          last_name: last_name,
          password: password,
          phone: phone,
          role: role,
          section: section,
          status: status,
        })
        .then((res) => {
          setErrType("success");
          setErrMessage("Пользователь создан");
          setTost(true);
          onCloseDialog(false);
        })
        .catch((err) => {
          setErrType("error");
          setErrMessage("Обязательные поля пустые!");
          setTost(true);
        });
    }
  };

  const update = (e) => {
    e.preventDefault();
    if (
      !name ||
      !last_name ||
      !phone ||
      !password ||
      !status ||
      !role ||
      !section
    ) {
      setTost(true);
      setErrMessage("Обязательные поля пустые!");
    } else {
      axios
        .post(
          "http://89.223.71.112:3000/updateUser",
          {
            id: data.id,
            Name: name,
            last_name: last_name,
            password: password,
            phone: phone,
            role: role,
            section: section,
            status: status,
          },
          {
            headers: {
              Authorization: "OTM5MzcwMzAyOjkzNzAzMDI=",
            },
          }
        )
        .then((res) => {
          setErrType("success");
          setErrMessage("Пользователь создан");
          setTost(true);
          onCloseDialog(false);
        })
        .catch((err) => {
          setErrType("error");
          setErrMessage("Обязательные поля пустые!");
          setTost(true);
        });
    }
  };
  return (
    <Form onSubmit={data.length === 0 ? create : update}>
      <DialogBodyContent>
        <MyInput
          value="Имя"
          global
          width="230px"
          defaultValue={data.name}
          onChange={(e) => {
            set_name(e.target.value);
          }}
        />
        <MyInput
          value="Фамилия"
          global
          width="230px"
          defaultValue={data.last_name}
          onChange={(e) => {
            set_last_name(e.target.value);
          }}
        />
        <MyInput
          value="Номер телефон"
          global
          width="230px"
          defaultValue={data.phone}
          onChange={(e) => {
            set_phone(e.target.value);
          }}
        />
        <MyInput
          value="Пароль"
          global
          width="230px"
          defaultValue={data.password}
          onChange={(e) => set_password(e.target.value)}
        />
        <MyInput
          value="Статус"
          global
          width="230px"
          defaultValue={data.status}
          onChange={(e) => set_status(e.target.value)}
        />
        <MyInput
          value="Роль"
          global
          width="230px"
          defaultValue={data.role}
          onChange={(e) => set_role(e.target.value)}
        />
        <MyInput
          value="Секция"
          global
          width="230px"
          defaultValue={data.section}
          onChange={(e) => set_section(e.target.value)}
        />
      </DialogBodyContent>
      <DialogBtn>
        <MyButton type="submit" squashed text="Сохранить" width="176px" />
        <Snackbar
          open={tost}
          autoHideDuration={3000}
          onClose={() => setTost(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={() => setTost(false)} severity={errType}>
            {errMessage}
          </Alert>
        </Snackbar>
      </DialogBtn>
    </Form>
  );
}

export default EmployeeDialog;
