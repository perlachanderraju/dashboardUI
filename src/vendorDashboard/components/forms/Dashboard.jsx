import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData.user_data);
  }, []);
  console.log(user)
  return (
    <div>
      <NavBar/>
      <div className='loginSection'>
        <div className='sublogin'>
        <h1>Dashboard</h1>
      {user ? (user.map((item)=>{
        return(
            <div key={item.user_id}>
                <p> <strong>Welcome,</strong> <span>{item.user_firstname}!</span></p>
                <p><strong>Email:</strong> <span>{item.user_email}</span></p>
                <p><strong>Phone:</strong> <span>{item.user_phone}</span></p>
                <p><strong>City:</strong> <span>{item.user_city}</span></p>
            </div>
        )
      })
      ) : (
        <p>No user information available. Please log in.</p>
      )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
