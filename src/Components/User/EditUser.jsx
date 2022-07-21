import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    let navigate = useNavigate();
    const {id}=useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const {name, email, password, phone} = user;
  const onInputChange = (e) => {
   setUser({...user, [e.target.name]: e.target.value})
  };

  useEffect(()=> {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/user/${id}`, user);
    navigate ("/", {replace: true});
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/user/${id}`);
    setUser(result.data);
  }
  
  return (
    <div>
    <h2 className="text-center mb-4">Edit a user </h2>
    <form onSubmit={e => onSubmit(e)}>
      <div ClassName="form-group">
        <input
          type="text"
          ClassName="form-control"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={e => onInputChange(e)}
        />
      </div>
      <br />
      <div ClassName="form-group">
        
        <input
          type="email"
          ClassName="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={e => onInputChange(e)}
        />
      </div>
      <br />
      <div ClassName="form-group">
        <input
          type="password"
          ClassName="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={e => onInputChange(e)}
        />
      </div>
      <br />
      <div ClassName="form-group">
        <input
          type="number"
          ClassName="form-control"
          id="exampleInputPhone1"
          placeholder="Enter Phone No."
          name="phone"
          value={phone}
          onChange={e => onInputChange(e)}
        />
      </div>
      <br />
      <button type="submit" ClassName="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default EditUser;
