import { useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import iconetwitter from "./assets/Icons/Twitter.svg";


import Widgets from "./components/Widgets";
import Buttons from "./components/Button";
import Trends from "./components/Trendscontenair";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='Principal-contenair'>
      {/* Sidebar */}
      <Sidebar>

      </Sidebar>


      {/* Timelin */}
      <Timeline />

      {/* Widgets */}
      <Widgets/>

       
    </div>
  );
}

export default App;
