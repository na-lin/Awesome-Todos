import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TaskScreen from "./screens/TaskScreen";
import TaskDetail from "./screens/TaskDetail";
import { Container, Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

// sreen
import LoginScreen from "./screens/LoginScreen";
function App() {
  console.log("app");
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              Page 1<Link to={"/login"}>to login</Link>
            </>
          }
        />
        <Route
          path="/t2"
          element={
            <>
              Page 2<Link to={"/"}>to test 1</Link>
            </>
          }
        />

        <Route path="/login" element={<LoginScreen />} />
      </Routes>

      <Box sx={{ display: "flex" }}>
        <SideBar />
        <TaskScreen sx={{ flexGrow: 1, maxWidth: "50%" }} />
        <TaskDetail sx={{ flexGrow: 1, maxWidth: "50%" }} />
      </Box>
    </Container>
  );
}

export default App;
