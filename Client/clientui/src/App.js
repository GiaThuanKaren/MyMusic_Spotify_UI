import logo from './logo.svg';
import { Grid} from "@mui/material"
import './App.css';
import './GlobalStyles.css'
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import { Routes,Route,Link} from "react-router-dom"
import RightSideBar from './Components/RightSideBar/RightSideBar';
function App() {
  return (
    <>
    <Grid container spacing={1} >
      <LeftSideBar/>
      <Routes>
        <Route path="/" element={<RightSideBar />}>

        </Route>
      </Routes>
    </Grid>
    </>
  );
}

export default App;
