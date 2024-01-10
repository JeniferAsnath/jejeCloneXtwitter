import { useState } from "react";
import "./App.css";
import ContenairTweet from "./components/ContenairTweet";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={`contenairStyles`}>
      <ContenairTweet>
        <Sidebar></Sidebar>
      </ContenairTweet>
      <ContenairTweet  >
        <Timeline></Timeline>
      </ContenairTweet>
      <ContenairTweet title ={"Home"}></ContenairTweet>
    </div>
      
   
  );
}

export default App;
