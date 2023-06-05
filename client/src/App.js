import React,{useState,useEffect} from "react"
import "./App.css"

function App() {
  const [message, setData] = useState("")

  useEffect(() => {
      fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  )
}
export default App