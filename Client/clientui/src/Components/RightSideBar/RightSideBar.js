import { Grid } from "@mui/material";
import Header from "../Header/Header";
import styles from "./RightSideBar.module.css";

function RightSideBar() {
    

  return (
    <>
      <Grid item lg={9} md={10} xs={12} sm={9}>
        <div className={styles["Main-Container"]}>
          <div className={`${styles.HomeContainer}`}>
            <Header />
            <div className={`${styles.HomeSong}`}>
              
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
export default RightSideBar;
