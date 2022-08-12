import { Card, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import CardCatologe from "../Card/Card"
import style from "./Libraray.module.css"
import axious from "axios"
const ListrowpayListLibrary = function ({ title, ListPlayListAblum }) {
  return (
    <>
      <div className={`${style.List_Row_Library_Container}`}>
        <Typography fontSize={"1.2rem"} fontWeight={500} component={"h3"}>
          {title}
        </Typography>
        <Grid container spacing={3}>
          {ListPlayListAblum.map((item, idx) => {
            return (
              <>
                <CardCatologe Imgpath={item.thumbnail} tittle={item.title} />
              </>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
function Libraray() {
  const [properties, SetProperties] = useState({
    ListPlayList: []
  })
  const { ListPlayList } = properties
  useEffect(() => {
    async function FetchApi() {
      let { data } = await axious.get(`http://localhost:5000/top100`)
      SetProperties({
        ...properties,
        ListPlayList: data
      })
      return data
    }
    FetchApi()
  }, [])
  console.log(ListPlayList)
  return (
    <div className={`${style.Main_Container}`}>
      {ListPlayList.length != 0 &&
        ListPlayList.map((item, idx) => {
          return (
            <ListrowpayListLibrary
              title={item.title ? item.title : " Default Tittle"}
              ListPlayListAblum={item.items}
            />
          )
        })}
    </div>
  )
}

export default Libraray
