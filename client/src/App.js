import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TaskScreen from "./screens/TaskScreen";
import TaskDetail from "./screens/TaskDetail";
import { Container, Box } from "@mui/material";
function App() {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <TaskScreen sx={{ flexGrow: 1, maxWidth: "50%" }} />
        <TaskDetail sx={{ flexGrow: 1, maxWidth: "50%" }} />
      </Box>
    </Container>
  );
}

export default App;
