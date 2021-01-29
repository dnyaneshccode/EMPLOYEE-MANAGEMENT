import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
const EditUser = () => {
    const history = useHistory();
    const {id} = useParams();
    // alert(id);


    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });

    const {name, username, email, phone} = user;
    const onInputChange = e=>{
        setUser({...user,[e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadUser();
    }, []);


    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
  return (
    <>
      <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
      <h2 className='text-center mb-4'>Edit A User</h2>
        <form onSubmit={e=>onSubmit(e)}>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Enter Your Name'
              name='name'
              value={name}
              onChange={e => onInputChange(e)}
            />    
        </div>
        <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Enter Your Username'
              name='username'
              value={username}
              onChange={e => onInputChange(e)}
            />    

            </div>

            <div class='form-group'>
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={e => onInputChange(e)}
            />    

            </div>

            <div class='form-group'>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter Your Phone Number'
              name='phone'
              value={phone}
              onChange={e => onInputChange(e)}
            />    
          </div>
          <button type='submit' class='btn btn-primary'>
            Update User
          </button>
        </form>
      
      </div>
      </div>
    </>
  );
};

export default EditUser;
