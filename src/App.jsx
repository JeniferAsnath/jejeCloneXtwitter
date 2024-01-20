import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from "./pages/Profile";
// import Posts from './pages/Posts'



function App() {
  // const [count, setCount] = useState(0);
  return (
    <Router>
      <div className="Principal-contenair">
        {/* Sidebar */}
        <Sidebar />

        {/* Timelin */}
        <Routes>
          <Route path="/" Component={Timeline} />
          <Route path="/explore" element={Explore} />
          <Route path="/notifications" Component={Notifications} />
          <Route path="/messages" Component={Messages} />
          <Route path="/bookmarks" Component={Bookmarks} />
          <Route path="/lists" Component={Lists} />
          <Route path="/profile" Component={Profile} />
        </Routes>
        {/* Widgets */}
        <Widgets />
      </div>
    </Router>
  );
}

export default App;
