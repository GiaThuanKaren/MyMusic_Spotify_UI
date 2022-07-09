import logo from "./logo.svg";
import { Grid } from "@mui/material";
import "./App.css";
import "./GlobalStyles.css";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import { Routes, Route, Link } from "react-router-dom";

import Search from "./Components/Search/Search";
import Libraray from "./Components/Library/Libraray";
import CreatePlayList from "./Components/CreatePlayList/CreatePlayList";
import Liked from "./Components/Liked/Liked";
import Player from "./Components/Player/Player";
import DetailPlaylist from "./Components/DetailPlaylist/DetailPlaylist";

import RightSideBar, {
  MainHomeRightSideBar,
} from "./Components/RightSideBar/RightSideBar";
import { PublicRoute } from "./Routes/PublicRoute";
function App() {
  return (
    <>
      <Grid style={{ fontSize: "0.9rem" }} container>
        <LeftSideBar />
        <Routes>
          <Route
            path={PublicRoute.Home}
            // children={<MainHomeRightSideBar />}
            element={<RightSideBar />}
          >
            <Route path={PublicRoute.Show} element={<DetailPlaylist />} />
            <Route path={PublicRoute.Search} element={<Search />} />
            <Route path={PublicRoute.Library} element={<Libraray />} />
            <Route path={PublicRoute.Liked} element={<Liked />} />
            <Route path={PublicRoute.SeeAll} element={<h1>All Page</h1>} />
            <Route path="/" element={<MainHomeRightSideBar />} />
          </Route>
          <Route path={PublicRoute.CreateNewPL} element={<CreatePlayList />} />
        </Routes>
        <Player />
      </Grid>
    </>
  );
}

export default App;
