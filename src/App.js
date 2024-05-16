import { BrowserRouter } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import "./App.css";
import Routing from "./components/Routes/route";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <Sidebar>
          <Routing/>     
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
