import react,{useState} from "react"
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();
  const[ctime,seyCtime]=useState(time)

  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    seyCtime(time)
  }
  return (
    <div className="time-body">
     <h1>{ctime}</h1>
     <button className="btn" onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
