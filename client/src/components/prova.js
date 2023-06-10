import React,{useState,useEffect} from "react"
import "../App.css"
import logo from "../logo.svg"

function prova() {
  const [data, setData] = useState(null)

  useEffect(() => {
      fetch("/api",{method:'GET',header:{'Content-Type':'application/json'}})
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  )
}
export default prova