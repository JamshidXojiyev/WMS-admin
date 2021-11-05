import React, { useEffect, useState } from "react";
import MyButton from "../../../camponents/my-button/my-button";
import MyInput from "../../../camponents/my-input/my-input";
import { Form } from "../../../global-style/form.s";
import { DialogBodyContent, DialogBtn } from "./employee-dialog.s";
import axios from "axios";

function EmployeeDialog({ data }) {
  const [id, set_id] = useState("");
  const [name, set_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [phone, set_phone] = useState("");
  const [password, set_password] = useState("");
  const [status, set_status] = useState("");
  const [role, set_role] = useState("");
  const [section, set_section] = useState("");
  console.log(data);

  const save = (e) => {
    e.preventDefault();
    axios
      .post("http://89.223.71.112:3000/signIn", {
        id: 30,
        Name: name,
        last_name: "Исломов",
        password: "5393197",
        phone: "995393197",
        role: 1,
        section: "I - Водные системы",
        status: 1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={save}>
      <DialogBodyContent>
        <MyInput
          value="Имя"
          global
          width="230px"
          defaultValue={data.name}
          onChange={(e) => set_name(e.target.value)}
        />
        <MyInput
          value="Фамилия"
          global
          width="230px"
          defaultValue={data.last_name}
        />
        <MyInput
          value="Номер телефон"
          global
          width="230px"
          defaultValue={data.phone}
        />
        <MyInput
          value="Пароль"
          global
          width="230px"
          defaultValue={data.password}
        />
        <MyInput
          value="Статус"
          global
          width="230px"
          defaultValue={data.status}
        />
        <MyInput value="Роль" global width="230px" defaultValue={data.role} />
        <MyInput
          value="Секция"
          global
          width="230px"
          defaultValue={data.section}
        />
      </DialogBodyContent>
      <DialogBtn>
        <MyButton type="submit" squashed text="Сохранить" width="176px" />
      </DialogBtn>
    </Form>
  );
}

export default EmployeeDialog;
