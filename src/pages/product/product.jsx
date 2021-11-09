import React, { useEffect, useState } from "react";
import MyButton from "../../camponents/my-button/my-button";
import MyInput from "../../camponents/my-input/my-input";
import MyTable from "../../camponents/my-table/my-table";
import { MyDiv } from "../../global-style/my-div.s";
import { ReactComponent as Download } from "../../assats/download.svg";
import { ReactComponent as Refresh } from "../../assats/refresh.svg";
import { MyLoader } from "../../global-style/loader.s";
import axios from "axios";
import exportFromJson from "export-from-json";

function Product(props) {
  const productData = {
    header: ["Наименование", "Код", "реальный запас", "в наличии", "разница"],
    body: [],
    order: ["name", "sku", "real_stock", "in_stock", "difference"],
  };
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(productData);
  const [respons, setRespons] = useState([]);

  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get(
        `http://89.223.71.112:3000/getUniqueItems?limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: "OTM5MzcwMzAyOjkzNzAzMDI=",
          },
        }
      )
      .then((res) => {
        const withDifference = res.data.data.map((item) => ({
          ...item,
          difference: item.real_stock - item.in_stock,
        }));
        setRespons(withDifference);
        setLoad(false);
        setPages((res.data.count / limit).toFixed());
      })
      .catch((err) => console.log(err));
  }, [limit, offset, page]);
  useEffect(() => {
    setData({ ...data, body: respons });
  }, [respons,data]);
  useEffect(() => {
    setOffset((page - 1) * limit);
  }, [page]);

  const makeShake = () => {
    const tableData = data.body.map((item) => ({
      Name: item.name,
      SKU: item.sku,
      "In stock": item.in_stock,
      "Real stock": item.real_stock,
      Difference: item.difference,
    }));
    const fileName = "Reports";
    const exportType = exportFromJson.types.xls;
    exportFromJson({ data: tableData, exportType, fileName });
  };

  return (
    <>
      <MyDiv height="38px" gap="20px" header>
        <MyDiv height="38px" gap="20px">
          <MyInput value="поиск наименование" global width="320px" />
          <MyInput value="поиск код" global width="120px" />
        </MyDiv>
        <MyDiv height="38px" gap="20px">
          <MyButton
            squashed
            text="Скачать в Excel"
            icon={<Download />}
            onClick={makeShake}
            width="145px"
          />
          <MyButton
            squashed
            text="Обновить"
            icon={<Refresh />}
            onClick={()=> window.location.reload()}
            width="145px"
          />
        </MyDiv>
      </MyDiv>
      <MyDiv></MyDiv>
      {load ? (
        <MyLoader />
      ) : (
        <MyTable
          onPageChange={(val) => {
            setPage(val);
          }}
          onLimitChange={(val) => {
            setLimit(val);
          }}
          datas={data}
          pages={pages}
          page={page}
          limit={limit}
          offset={offset}
          align="product-table"
        />
      )}
    </>
  );
}

export default Product;
