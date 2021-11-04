import React, { useEffect, useState } from "react";
import MyButton from "../../camponents/my-button/my-button";
import MyInput from "../../camponents/my-input/my-input";
import MyTable from "../../camponents/my-table/my-table";
import MySearch from "../../camponents/my-select/my-select";
import { MyDiv } from "../../global-style/my-div.s";
import { ReactComponent as Download } from "../../assats/download.svg";
import { productData } from "./data";
import { MyLoader } from "../../global-style/loader.s";

function Product(props) {
  const [load, setLoad] = useState(true);
  return (
    <>
      <MyDiv height="38px" gap="20px" header>
        <MyDiv height="38px" gap="20px">
          <MyInput value="Search" global width="234px" />
          <MySearch
            width="113px"
            data={["Ряд", "test2", "test3"]}
            onChange={(e) => console.log(e.target.value)}
          />
          <MySearch
            width="113px"
            data={["Стеллаж", "test2", "test3"]}
            onChange={(e) => console.log(e.target.value)}
          />
          <MySearch
            width="151px"
            data={["Сотрудник", "test2", "test3"]}
            onChange={(e) => console.log(e.target.value)}
          />
        </MyDiv>
        <MyDiv height="38px" gap="20px">
          <MyButton
            squashed
            text="Скачать в Excel"
            icon={<Download />}
            width="145px"
          />
        </MyDiv>
      </MyDiv>
      <MyDiv></MyDiv>
      {load ? <MyLoader /> : <MyTable datas={productData} />}
    </>
  );
}

export default Product;
