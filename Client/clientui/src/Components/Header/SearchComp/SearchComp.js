import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import style from "./SearchComp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSolid } from "../../../util/FontAwesome/FontAwesome";
function SearchComp() {
  return (
    <div>
      <Paper
        
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "500px",
        }}
      >
        <IconButton  sx={{ p: "10px" }} aria-label="search">
          {/* <SearchIcon /> */}
          <FontAwesomeIcon icon={IconSolid.faMagnifyingGlass} />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nghệ sĩ, bài hát hoặc podcast"
          inputProps={{ "aria-label": "Nghệ sĩ, bài hát hoặc podcast" }}
        />
      </Paper>
    </div>
  );
}

export default SearchComp;
