import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    let api = "http://localhost:3000/data";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="cards-container">
      {mydata.map((item, index) => (
        <Card key={index} className="custom-card">
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title className="line1">{item.name}</Card.Title>
            <Card.Title className="line2">{item.address}</Card.Title>
            <p className="line5">
              <span>4.5★ </span>(423 Ratings) Excellent
            </p>
            <div className="card-details">
              <h4 className="line3">₹ {item.price}</h4>
              <p className="line4">{item.available} people booked this hotel today</p>
            </div>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Display;
