import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3001/user`);
    setUser(result.data.reverse());    
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/user/${id}`);
    loadUsers();
  }

  

  return (
    <div className='container'>
        <div className="py-4">
            <h1>User Data</h1>        
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact No.</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user, index) => (
        <tr>
        <th scope='row'>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.phone}</td>
        <td>
          <Link className="btn btn-primary fa fa-trash" to={`/user${user.id}`}>View</Link>
          <Link className="btn btn-outline-primary btn-group mr-2" to={`/edituser${user.id}`}>Edit</Link>
          <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
          <i class="fa fa-trash"></i>Delete</button>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>


        </div>
    </div>
  )
}

export default Home;