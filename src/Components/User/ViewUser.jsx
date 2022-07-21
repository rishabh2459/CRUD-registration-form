import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
      const {id}=useParams();

      useEffect(()=> {
        loadUser();
      },[]);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/user/${id}`);
        setUser(result.data);
      }

  return (
    <div className='container'>
        <Link className='btn btn-primary' to="/">
            Back to home
        </Link>
        <h1 className='display-r'>User Id: {id}</h1>
        <hr />
        <ul className='list-group w-50'>
            <li className='list-group-item'>name:{user.name} </li>
            <li className='list-group-item'>email:{user.email}</li>
            <li className='list-group-item'>password:{user.password}</li>
            <li className='list-group-item'>phone:{user.phone}</li>

        </ul>

    </div>
  )
}

export default ViewUser