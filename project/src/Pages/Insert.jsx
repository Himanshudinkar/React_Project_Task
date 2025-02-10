import axios from "axios"
import { useRef, useState } from "react"
useRef

const Insert = () =>{
    let [inputname,setInputname] = useState({
    img:"",
    name:"",
    address:"",
    price:"",
    available:"",

})



const hinput = (event) =>{
  const {name ,value} = event.target;
  setInputname({
  ...inputname,
  [name]:value
                
  });
} 

const finalSubmit =(event) =>{
  event.preventDefault();   
  axios.post("http://localhost:3000/data",inputname)
  .then(rei=>alert("inserted"))

}


    return(



        <>
    <div className="pfrmb">
    <form onSubmit={finalSubmit}>
    <div className="frmb"> 
       
       
  <div className="mb-3">
    <label  className="form-label">Enter Image Address</label>
    <input type="text" className="form-control" name="img" value={inputname.img} onChange={hinput}/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter Hotel Name</label>
    <input type="text" className="form-control" name="name" value={inputname.name} onChange={hinput} />
  </div>

   <div className="mb-3">
    <label  className="form-label">Enter Hotel Address</label>
    <input type="text" className="form-control" name="address" value={inputname.address} onChange={hinput} />
  </div>
 
 
 <div className="frmbuttonb">
  <button type="submit" className="btn btn-primary" >Book Room</button>
  </div>
</div>

<div className="frmb2"> 
  <div className="mb-3">
    <label  className="form-label">Enter Hotel Price</label>
    <input type="text" className="form-control"  name="price" value={inputname.price} onChange={hinput}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter All People Booking Today</label>
    <input type="text" className="form-control"  name="available" value={inputname.available} onChange={hinput}/>
  </div>
  

</div>


</form>
      </div>  
        
        </>
    )
}

export default Insert