import { Grid } from "@mui/material";
import styles from "./RightSideBar.module.css";

function RightSideBar() {
  return (
    <>
      <Grid item lg={9} md={10} xs={12} sm={9}>
          <div className={styles['Main-Container']}>
                <p>Right Side Bar</p>
          </div>
      </Grid>
    </>
  );
}
export default RightSideBar;
