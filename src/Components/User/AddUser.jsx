import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const {name, email, password, phone} = user;
  const onInputChange = (e) => {
   setUser({...user,[e.target.name]: e.target.value})
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/user`, user);
    navigate("/");
  }
  
  
  return (
    <div className="container">
    <h2 className="text-center mb-4">Register user </h2>
    <form className="was-validated" onSubmit={e => onSubmit(e)}>
      <div ClassName="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend"></span>
        <input
          type="text"
          ClassName="input-group-text"
          id="validationTooltipemail"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={e => onInputChange(e)}
        />
        <div class="invalid-tooltip">
        Please choose a unique and valid email.
      </div>
        
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
          onChange={(e => onInputChange(e))}
          
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
      <button type="submit" ClassName="btn btn-warning btn-block">
        Submit
      </button>
    </form>
    </div>
  );
};

export default AddUser;
