import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/Sidebar";
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";
import { Watch } from "./pages/Watch";
import { Random } from "./pages/Random";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen flex items-center bg-emerald-200 dark:bg-emerald-900">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/random" element={<Random/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
