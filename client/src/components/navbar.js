import React, { useEffect, useState } from "react"
import InsertProduct from "./inserProduct"
import {useForm} from 'react-hook-form'
import '../index.css'

function Navbar() {     
    const {register, handleSubmit, getValues, setValue}=useForm({
        mode:"onChange",
        defaultValues:{
            yourDetails:{
                id:"",nome:"",gender:"",materiale:"",prezzo:""
            }
        }})
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
        fetchStoreData()
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

    async function handleDelete(e) {
        try{const res=await fetch(`/deleteProduct/${e}`,{method:'DELETE',
            headers: { 'Content-Type':'application/json' }})
            const data=await res.json(); console.log(data)}
        catch (err) {console.log(err.message)}
        fetchStoreData()}
    
    async function handleData(){
        const idEdit=getValues("yourDetails.id"); const nomeEdit=getValues("yourDetails.nome")        
        const genderEdit=getValues("yourDetails.gender"); const materialeEdit=getValues("yourDetails.materiale")
        const prezzoEdit=getValues("yourDetails.prezzo")        
        try{const res=await fetch(`/updateProduct/${idEdit}`,{method:'PATCH',body:JSON.stringify({
            id:idEdit,nome:nomeEdit,gender:genderEdit,materiale:materialeEdit,prezzo:prezzoEdit}),
            headers: { 'Content-Type':'application/json' }})
            const data=await res.json(); console.log(data)}
        catch (err) {console.log(err.message)}
        document.getElementById('myFormEdit').style.left="-2000px"       
        fetchStoreData()}
    
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
                   <td>*</td>
                   <td>*</td>
              </tr>
        </thead>
        <tbody>
          {prodocts.map(prodoct=>(
          <tr key={prodoct._id}>
            <td>{prodoct.nome}</td>
            <td>{prodoct.gender}</td>
            <td>{prodoct.materiale}</td>
            <td>{prodoct.prezzo} €</td>
            <td><button onClick={()=>handleDelete(prodoct._id)} className="btn btn-danger">delete</button></td>
            <td><button onClick={()=>{
                const mnb=document.getElementById('myFormEdit').style      
                if (mnb.left==="15%") {mnb.left="-2000px"}
                else {mnb.left="15%"} 
                setValue("yourDetails",{
                    id:prodoct._id,nome:prodoct.nome,gender:prodoct.gender,materiale:prodoct.materiale,prezzo:prodoct.prezzo
                })}} className="btn btn-primary">Edit</button>
            </td>
          </tr>
      ))}
      </tbody></table>
     )}
    {/* edit product --------------------------*/}
        <div id="myFormEdit" style={{}}>
            <form onSubmit={handleSubmit(handleData)}>              
                <input type="hidden" {...register("yourDetails.id")} />                  
            <label>Name:
                <input type="text" {...register("yourDetails.nome")} />
            </label>
            <label>Gender:
                <input type="text" {...register("yourDetails.gender")} />
            </label>
            <label>Material:
                <input type="text" {...register("yourDetails.materiale")} />
            </label>
            <label>Price:
                <input type="text" {...register("yourDetails.prezzo")} />
            </label>
                <input type="submit" value="conferma" />  
            </form>
        </div>
    </div></>
    )
}
export default Navbar