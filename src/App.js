import react,{useState} from "react"
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();
  const[ctime,seyCtime]=useState(time)
  return (
    <div >
     <h1>{ctime}</h1>
    </div>
  );
}

export default App;
