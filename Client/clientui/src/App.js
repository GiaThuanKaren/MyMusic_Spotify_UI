import logo from "./logo.svg";
import { Grid } from "@mui/material";
import "./App.css";
import "./GlobalStyles.css";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import { Routes, Route, Link } from "react-router-dom";
import RightSideBar, {
  MainHomeRightSideBar,
} from "./Components/RightSideBar/RightSideBar";
import Search from "./Components/Search/Search";
import Libraray from "./Components/Library/Libraray";
import CreatePlayList from "./Components/CreatePlayList/CreatePlayList";
import Liked from "./Components/Liked/Liked";
import Player from "./Components/Player/Player";
import DetailPlaylist from "./Components/DetailPlaylist/DetailPlaylist";
function App() {
  return (
    <>
      <Grid container>
        <LeftSideBar />
        <Routes>
          <Route
            path="/"
            children={<MainHomeRightSideBar />}
            element={<RightSideBar />}
          >
            <Route path="show" element={<DetailPlaylist />} />
            <Route path="" element={<MainHomeRightSideBar />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Libraray />} />
            <Route path="/liked" element={<Liked />} />
          </Route>
          <Route path="/createNewPL" element={<CreatePlayList />} />
        </Routes>
        <Player />
      </Grid>
    </>
  );
}

export default App;
