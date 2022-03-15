import react,{useState} from "react"
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(time)

  const UpdateTime=()=>{
    const time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(UpdateTime,1000)
  return (
    <div className="time-body">
     <h1>{ctime}</h1>
     {/* <button className="btn" onClick={UpdateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
