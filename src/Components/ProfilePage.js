import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState('');
  
  useEffect(() => {
    const id = localStorage.getItem('id');
    console.log(id);
    if (id) {

      // Make a fetch request based on the 'id'
      const fetchData = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/users/${id}`);
          if (response.ok) {
            const userData = await response.json();
            setUserData(userData);
            console.log(userData);
          } else {
            console.error('Error during fetch:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
    }
  }, []);  

  return (
    <div className='profilePage'>
      <h1>Profile Page</h1>
      <div className='details'>
        <img src={userData.image}></img>
        <p>Name : {userData.firstName} {userData.maidenName} {userData.lastName}</p>
        <p>Age : {userData.age}</p>
        <p>Gender : {userData.gender}</p>
        <p>Email : {userData.email}</p>
        <p>Phone : {userData.phone}</p>
        <p>Birth : {userData.birthDate}</p>
        <p>Blood Group : {userData.bloodGroup}</p>
        <p>Height : {userData.height}  Weight : {userData.weight}</p>
        <p>University : {userData.university}</p>

      </div>
    </div>
  );
};

export default ProfilePage;




