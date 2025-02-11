import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
const Update = () =>{

    
        
    const [mydata,setMydata] = useState([]);

    const loadData = (e) =>{
        let api = "http://localhost:3000/data";
        let res = axios.get(api)
        .then((res)=>{
            setMydata(res.data);
        })
    }

      const mydel = (id)=>{
        let api = `http://localhost:3000/data/${id}`
        let res = axios.delete(api)
        .then((res)=>{
            alert("Delete Successfully")
        })
    }

    useEffect(()=>{
        loadData();
    },[mydel])



      // Update Data/Edit Data___________________________________

    let [frmvisible,setFrmvisible] = useState(false)


     let [editdata,setEditdata] = useState({
            img:"",
            name:"",
            address:"",
            price:"",
            available:"",

    })

     const changeinpup =(event) =>{
        const {name,value} = event.target;
        setEditdata({
            ...editdata,
            [name]:value
        })
    }


     const fsubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:3000/data/${editdata.id}`,editdata)
        .then(r=>alert("updated"))
    }

    // Update Data/Edit Data___________________________________


  

    let ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.id}</td>
                <td><img src={key.img} alt="" style={{width:"130px",height:"100px"}} /></td>
                <td>{key.name}</td>
                <td>{key.address}</td>
                <td>{key.price}</td>
                <td>{key.available}</td>
                <td><button style={{backgroundColor:"skyblue",border:"2px solid black",color:"white",padding:"2px",borderRadius:"10px"}} onClick={()=>{setFrmvisible(true),setEditdata(key)}}>Update</button></td>

            </tr>
            
            
            </>
        )
    })


    let refral = useRef("")

    const hide = () =>{
        refral.current.style.display = "none";
    }
    return(
        <>

         <div className="form">
        {
            frmvisible && (

    <form ref={refral} onSubmit={fsubmit} className="tform">
       
 <div className="mb-3">
    <label  className="form-label">ID</label>
    <input type="text" className="form-control" readOnly name="id" value={editdata.id} onChange={changeinpup}/>
    
  </div>
       
  <div className="mb-3">
    <label  className="form-label">Enter Image Address</label>
    <input type="text" className="form-control" name="img"  value={editdata.img} onChange={changeinpup}/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter Name</label>
    <input type="text" className="form-control" name="name"  value={editdata.name} onChange={changeinpup} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter Address</label>
    <input type="text" className="form-control" name="address"  value={editdata.address} onChange={changeinpup} />
  </div>



  <div className="mb-3">
    <label  className="form-label">Enter Price</label>
    <input type="text" className="form-control" name="price"  value={editdata.price} onChange={changeinpup}/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter Today Booking</label>
    <input type="text" className="form-control"  name="available"  value={editdata.available} onChange={changeinpup}/>
  </div>
  

 <div className="frmbuttonb">
  <button type="submit" className="btn btn-primary" style={{border:"1px solid black"}} onClick={hide}>Submit</button>
  </div>

      </form>
            )
        }
        </div>

        
        <Table striped bordered hover style={{marginRight:"200px",marginTop:"30px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGE</th>
          <th>Name</th>
          <th>ADDRESS</th>
          <th>PRICE</th>
          <th>TODAY BOOKING</th>
          <th>UPDATE</th>
        </tr>
      </thead>
        <tbody>
        {ans}
        </tbody>
        </Table>
        
        </>
    )
        
        
}

export default Update