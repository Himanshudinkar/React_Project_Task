import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
const Search = () =>{

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
                <td><button style={{backgroundColor:"red",border:"2px solid black",color:"white",padding:"2px",borderRadius:"10px"}} onClick={()=>{mydel(key.id)}}>Delete</button></td>

            </tr>
            
            
            </>
        )
    })
    return(
        <>
        
        <Table striped bordered hover style={{marginRight:"200px",marginTop:"30px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGE</th>
          <th>Name</th>
          <th>ADDRESS</th>
          <th>PRICE</th>
          <th>TODAY BOOKING</th>
          <th>DELETE</th>
        </tr>
      </thead>
        <tbody>
        {ans}
        </tbody>
        </Table>
        
        </>
    )
}

export default Search