import { List, ListItemText } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Brand } from "../../assats/brand.svg";
import { MyDiv } from "../../global-style/my-div.s";
import Employee from "../employee/employee";
import Product from "../product/product";
import { Body, ListItemBtn, Navigationbar, Siderbar } from "./main-viev.s";
import { Route, useLocation } from "react-router";

function MainView(props) {
  const location = useLocation();
  return (
    <>
      <Siderbar>
        <MyDiv center margin="12px 0">
          <Brand />
        </MyDiv>
        <List>
          <ListItemBtn
            activ={location.pathname === "/product" ? true : false}
            button
            as={NavLink}
            exact
            to="/product"
          >
            <ListItemText primary="Товары" />
          </ListItemBtn>
          <ListItemBtn
            activ={location.pathname === "/employee" ? true : false}
            button
            as={NavLink}
            exact
            to="/employee"
          >
            <ListItemText primary="Сотрудники" />
          </ListItemBtn>
        </List>
      </Siderbar>
      <Navigationbar>
        {location.pathname === "/product" ? "Товары" : "Сотрудники"}
      </Navigationbar>
      <Body>
        <Route exact path="/product" component={Product} />
        <Route exact path="/employee" component={Employee} />
      </Body>
    </>
  );
}

export default MainView;
