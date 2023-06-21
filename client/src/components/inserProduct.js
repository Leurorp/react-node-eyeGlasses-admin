import { useState } from 'react'
import '../index.css'

function InsertProducts(){
    const [nome, setName] = useState("")
    const [gender, setGender] = useState("")    
    const [materiale, setMaterial] = useState("")    
    const [prezzo, setPrice] = useState("")    
    const handleSubmit = async(event) => {         
        event.preventDefault()
        try{
         const res=await fetch("/insertProduct",{method:'POST',body: JSON.stringify({nome,gender,materiale,prezzo}),
            headers: { 'Content-Type':'application/json' }})
         const data=await res.json(); console.log(data)
         alert('prodotto aggiunto con successo')
         location.reload()
        }
        catch (err) {console.log(err.message)}}

    const insertProduct = () => {
        const w=document.getElementById('myForm').style
        w.display="block"}

return (<>
    <button style={{margin:"10px", backgroundColor:"silver"}} onClick={insertProduct}>Insert product</button>
    <form onSubmit={handleSubmit}>
        <div id="myForm" style={{display:"none"}}>    
            <label>Name:
                <input type="text" value={nome} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Gender:
                <input  type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
            </label>
            <label>Material:
                <input  type="text" value={materiale} onChange={(e) => setMaterial(e.target.value)}/>
            </label>
            <label>Price:
                <input  type="text" value={prezzo} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <input type="submit" />
        </div>
    </form>
    
    </>)
}
export default InsertProducts