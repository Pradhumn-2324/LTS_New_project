import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Adminlog() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/admin')
        .then(response => {
          setMessage(response.data.pradhumn);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4">
          <h2 className="text-center mb-4">Admin Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>
          </form>
        </div>
      </div>
        );
  }
  
  export default Adminlog;
  