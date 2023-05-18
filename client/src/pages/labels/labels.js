import React, { useState, useEffect } from "react";
import '../../styles/labels/labels.css'
import axios from "axios";

function Labels() {
  const [labels, setLabels] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const token = document.cookie.split(";").find(cookie => cookie.startsWith("token="))?.split("=")[1];
    if (!token) {
        // handle the case where the token is not available
        return;
    }
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/labels`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        setLabels(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  
  const handleSubmit = (e) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/labels`, { name }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          setLabels([...labels, res.data]);
          setName("");
        })
        .catch((err) => console.error(err));
  };
  
  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/labels/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(() => {
          setLabels(labels.filter((label) => label._id !== id));
        })
        .catch((err) => console.error(err));
  };
  

  return (
    <div>
      <h1>My Labels</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Add Label</button>
      </form>
      <ul>
        {labels.map((label) => (
          <li key={label._id}>
            {label.name}
            <button onClick={() => handleDelete(label._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Labels;

