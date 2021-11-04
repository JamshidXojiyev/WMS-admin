import { IconButton } from "@material-ui/core";
import { ReactComponent as Edit } from "../../assats/edit.svg";

export const productDataE = {
  header: [
    <Edit />,
    "Имя",
    "Фамилия",
    "Номер телефон",
    "Пароль",
    "Секция",
    "Роль",
    "Статус",
  ],
  body: [],
  order: [
    (item) => (
      <IconButton>
        <Edit />
      </IconButton>
    ),
    "name",
    "last_name",
    "phone",
    "password",
    "permission",
    "warehouse",
    "section",
  ],
};
