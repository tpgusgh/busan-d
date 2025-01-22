import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

function RegisterMember() {
  const [member, setMember] = useState({ id: "", name: "", grade: "Basic" });

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/members", member);
      alert(response.data);
    } catch (error) {
      console.error("Error registering member:", error);
    }
  };

  return (
    <div>
      <h2>회원 등록</h2>
      <input type="number" name="id" placeholder="ID" onChange={handleChange} />
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <select name="grade" onChange={handleChange}>
        <option value="Basic">Basic</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="VIP">VIP</option>
      </select>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

function GetMember() {
  const [id, setId] = useState("");
  const [member, setMember] = useState(null);

  const fetchMember = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/members/${id}`);
      setMember(response.data);
    } catch (error) {
      console.error("Error fetching member:", error);
    }
  };

  return (
    <div>
      <h2>회원 조회</h2>
      <input type="number" placeholder="Member ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchMember}>조회</button>
      {member && <div>{JSON.stringify(member)}</div>}
    </div>
  );
}

function CreateOrder() {
  const [order, setOrder] = useState({ memberId: "", itemName: "", itemPrice: "" });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/orders", order);
      alert("Order Created: " + JSON.stringify(response.data));
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <h2>주문 생성</h2>
      <input type="number" name="memberId" placeholder="Member ID" onChange={handleChange} />
      <input type="text" name="itemName" placeholder="Item Name" onChange={handleChange} />
      <input type="number" name="itemPrice" placeholder="Item Price" onChange={handleChange} />
      <button onClick={handleSubmit}>주문</button>
    </div>
  );
}

function GetOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders/${orderId}`);
      setOrder(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  return (
    <div>
      <h2>주문 조회</h2>
      <input type="number" placeholder="Order ID" onChange={(e) => setOrderId(e.target.value)} />
      <button onClick={fetchOrder}>조회</button>
      {order && <div>{JSON.stringify(order)}</div>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">회원 등록</Link> | <Link to="/get-member">회원 조회</Link> | 
        <Link to="/create-order">주문 생성</Link> | <Link to="/get-order">주문 조회</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterMember />} />
        <Route path="/get-member" element={<GetMember />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/get-order" element={<GetOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
