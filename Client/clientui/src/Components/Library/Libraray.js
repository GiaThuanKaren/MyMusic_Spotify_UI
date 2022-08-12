import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCatologe from "../Card/Card";
import style from "./Libraray.module.css";
import axious from "axios";
const ListrowpayListLibrary = function ({ title, ListPlayListAblum }) {
  return (
    <>
      <div>
        <Typography component={"p"}>{title}</Typography>
        {ListPlayListAblum.map((item, idx) => {
          return <>ds</>;
        })}
      </div>
    </>
  );
};
function Libraray() {
  const [properties, SetProperties] = useState({
    ListPlayList: [],
  });
  const { ListPlayList } = properties;
  useEffect(() => {
    async function FetchApi() {
      let { data } = await axious.get(`http://localhost:5000/top100`);
      SetProperties({
        ...properties,
        ListPlayList: data,
      });
      return data;
    }
    FetchApi();
  }, []);
  console.log(ListPlayList);
  return (
    <Grid container spacing={4}>
      {/* <CardCatologe /> */}
      <div className={`${style.Main_Container}`}>
        {ListPlayList.length != 0 &&
          ListPlayList.map((item, idx) => {
            return (
              <ListrowpayListLibrary
                title={item.title ? item.title : " Default Tittle"}
                ListPlayListAblum={item.items}
              />
            );
          })}
      </div>
    </Grid>
  );
}

export default Libraray;
