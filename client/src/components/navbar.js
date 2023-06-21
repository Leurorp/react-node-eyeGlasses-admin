import React, { useEffect, useState } from "react"
import InsertProduct from "./inserProduct"

function Navbar() {
    const [prodocts, setData] = useState([])

    const onUsers = () => {
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')       
        if (q.style.display==="block") {q.style.display="none"}
        else {q.style.display="block"}
        z.style.display="none"; k.style.display="none"}
                          
    function fetchStoreData() {
        // fetch dei prodotti----------------------------------     
        fetch("/store")
        .then(response => {return response.json()})
        .then(data2 => {setData(data2)})}

    function onProducts() {
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')
        const w=document.getElementById('myForm').style
        if (w.display==="block") {w.display="none"}
        if (z.style.display==="block") {z.style.display="none"}
        else {z.style.display="block"}      
        q.style.display="none"; k.style.display="none"}
    
                              
    const onOrders = () => {
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')      
        if (k.style.display==="block") {k.style.display="none"}
        else {k.style.display="block"}      
        q.style.display="none"
        z.style.display="none"}

    useEffect(() => {fetchStoreData()}, [])

    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Eyes in blue </span>  
            <button onClick={onProducts} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Products</button> 
            <button onClick={onUsers} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Users</button> 
            <button onClick={onOrders} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Orders</button>       
        </div>
    </nav> 
    
    <div className="container-fluid" id="outputProducts" style={{display:"none"}}>
     <h1 className="text-center">Prodotti inseriti:</h1>
     <InsertProduct /><hr></hr>
     {prodocts.length > 0 && (
      <table className="table table-striped">
        <thead><tr><td><b>NOME</b></td>
                   <td><b>GENDER</b></td>
                   <td><b>MATERIALE</b></td>
                   <td><b>PREZZO</b></td>
              </tr>
        </thead>
        <tbody>
          {prodocts.map(prodoct => (
          <tr key={prodoct._id}>
            <td>{prodoct.nome}</td>
            <td>{prodoct.gender}</td>
            <td>{prodoct.materiale}</td>
            <td>{prodoct.prezzo} €</td>
          </tr>
      ))}
      </tbody></table>
     )}
    </div></>
    )
}
export default Navbar