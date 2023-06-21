import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [users, setUsers] = useState([])
  const [prodocts, setData] = useState([])
  const [orders, setOrders] = useState([])

// fetch degli utenti---------------------------------
  const fetchUserData = () => {
    fetch("/users")
      .then(response => {return response.json()})
      .then(data => {setUsers(data)})}

// fetch dei prodotti----------------------------------
  const fetchStoreData = () => {
    fetch("/store")
      .then(response => {return response.json()})
      .then(data2 => {setData(data2)})}

// fetch degli ordini---------------------------------- 
  function fetchOrdersData() {
    fetch("/orders")
      .then(response => {return response.json()})
      .then(data2 => {setOrders(data2)})}
      
// prodotti by id ------------------------------- 
  const bnm = document.getElementById('detailsProduct')

  function info(e){
    const glassId=prodocts.filter(glass=>glass._id===e) 
    const text=`Nome: <b>${glassId[0].nome}</b> Gender: <b>${glassId[0].gender}</b> Materiale: <b>${glassId[0].materiale}</b> Prezzo: <b>${glassId[0].prezzo}€ 
              <span type='button' style='float:right'>X</span>` 
    bnm.innerHTML=text
    bnm.style.fontSize="20px"; bnm.style.height="40px"}

  function removeDetails() {bnm.style.fontSize="0px"; bnm.style.height="0px"}

  useEffect(() => {fetchUserData()}, [])
  useEffect(() => {fetchStoreData()}, [])
  useEffect(() => {fetchOrdersData()}, [])
 
  return ( <>
    <Navbar />
    <div id="outputUsers" style={{display:"none"}}>
      <h1 className="text-center">Utenti iscritti:</h1><hr></hr>
      {users.length > 0 && (
        <table className="table table-striped">
          <thead><tr><td><b>USERNAME</b></td>
                      <td><b>EMAIL</b></td>
                      <td><b>DATA</b></td>
                  </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody></table>
      )}
    </div>   
    
  <div id="outputOrders" style={{display:"none"}}>
  <h1 className="text-center">Ordini:</h1><hr></hr>
  <div id="detailsProduct" style={{width:"100%", height:"0px", backgroundColor:"green", color:"white", textAlign:"center", fontSize:"0px", transition:"all 0.5s"}} onClick={removeDetails}>    
  </div>
  {orders.length > 0 && (
      <table className="table table-striped">
        <thead><tr><td><b>NOME</b></td>
                   <td><b>COGNOME</b></td>               
                   <td><b>VIA</b></td>
                   <td><b>CITTA'</b></td>
                   <td><b>CAP</b></td>
                   <td><b>ID OCCHIALE</b></td>
                   <td><b>DATA</b></td>
                   <td><b>DETAILS</b></td>
              </tr>
        </thead>
      <tbody>
      {orders.map(order => (
        <tr key={order._id}>
          <td>{order.nome}</td>
          <td>{order.cognome}</td>
          <td>{order.via}</td>
          <td>{order.citta}</td>
          <td>{order.cap}</td>
          <td>{order.idOcchiale}</td>
          <td>{order.createdAt}</td>
          <td><button onClick={()=>info(order.idOcchiale)}>INFO</button></td>
        </tr>   
        ))}
      </tbody>
    </table>
  )}
  </div>
  </>
  )
}

export default App