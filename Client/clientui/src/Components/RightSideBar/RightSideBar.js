import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { FindMany } from "../../util/Functions/FindMany";
import Header from "../Header/Header";
import ListSong from "../ListSong/ListSong";
import styles from "./RightSideBar.module.css";

function RightSideBar() {
  const [properties, SetProperties] = useState({
    PlayList1: [],
  });
  useEffect(() => {
    fetch(`http://localhost:5000/top100`)
      .then((res) => res.json())
      .then((items) => {
        // let arr = items.items
        // let result = arr.filter(function(item,idx){
        //   return item.sectionType=="playlist"
        // })
        console.log(items);
        SetProperties({
          PlayList1: items,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Grid item lg={9} md={10} xs={12} sm={9}>
        <div className={styles["Main-Container"]}>
          <div className={`${styles.HomeContainer}`}>
            <Header />
            <div className={`${styles.HomeSong}`}>
              
              {properties.PlayList1.length == 0
                ? null
                : properties.PlayList1.map(function (item, idx) {
                    return (
                      <ListSong
                        tittle={item.title}
                        IsHaveBtnALL
                        ColSpacing={3}
                        IsWrap={true}
                        ListArr={item.items ? item.items : []}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
export default RightSideBar;
