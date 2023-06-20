
function navbar() {
    const onUsers = () => {
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')       
        if (q.style.display==="block") {q.style.display="none"}
        else {q.style.display="block"}
        z.style.display="none"
        k.style.display="none"}
                           
    const onProducts = () => { 
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')
        const w=document.getElementById('myForm').style
        if (w.display==="block") {w.display="none"}
        if (z.style.display==="block") {z.style.display="none"}
        else {z.style.display="block"}      
        q.style.display="none"
        k.style.display="none"}
                              
    const onOrders = () => {
        const q=document.getElementById('outputUsers')
        const z=document.getElementById('outputProducts')
        const k=document.getElementById('outputOrders')      
        if (k.style.display==="block") {k.style.display="none"}
        else {k.style.display="block"}      
        q.style.display="none"
        z.style.display="none"}
    
    return(
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Eyes in blue </span>  
            <button onClick={onProducts} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Products</button> 
            <button onClick={onUsers} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Users</button> 
            <button onClick={onOrders} className="navbar-toggler btn btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">Orders</button>       
        </div>
    </nav>
    
    )
}
export default navbar