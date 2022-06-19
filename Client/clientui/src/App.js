import logo from './logo.svg';
import { Grid} from "@mui/material"
import './App.css';
import './GlobalStyles.css'
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import { Routes,Route,Link} from "react-router-dom"
import RightSideBar from './Components/RightSideBar/RightSideBar';
import Search from './Components/Search/Search';
import Libraray from './Components/Library/Libraray';
import CreatePlayList from './Components/CreatePlayList/CreatePlayList';
import Liked from './Components/Liked/Liked';
import Player from './Components/Player/Player';
function App() {
  return (
    <>
    <Grid container  >
      <LeftSideBar/>
      <Routes>
        <Route path="/" element={<RightSideBar />}>
          <Route path="show/:id" />
        </Route>
        <Route path="/search" element={<Search />}/>
        <Route path="/library" element={<Libraray />}/>
        <Route path="/createNewPL" element={<CreatePlayList />}/>
        <Route path="/liked" element={<Liked />}/>
      </Routes>
      <Player />
    </Grid>
    </>
  );
}

export default App;
