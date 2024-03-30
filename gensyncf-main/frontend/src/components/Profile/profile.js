// // Profile.js

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// function Profile() {
//   const [profileData, setProfileData] = useState({}); // State to store the profile data

//   useEffect(() => {
//     // Fetch the user's profile data when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get('http://localhost:4000/profile', {
//           headers: {
//             'x-auth': localStorage.getItem('token'), // Include the user's token for authentication
//           },
//         });
//         setProfileData(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       {/* Display and allow users to edit their profile information */}
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import style from './profile.module.css';

import Profileimg from './images.jpeg';
import images from './profile.jpeg'; 






function Profile() {
  const [profileData, setProfileData] = useState({
    startYear: 0,
    endYear: 0,
    degree: '',
    branch: '',
    rollNumber: '',
    firstName: '',
    lastName: '',
    mobileNumber: 0,
    socialProfiles: {
      linkedin: '',
      github: '',
    },
    imageUrl: '',
    skills: [],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token,"this is token");
        const response = await Axios.get('http://localhost:4000/student/profile', {
          headers: {
            'x-auth': token,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Save the updated profile data to the server using Axios
    try {
      const token = localStorage.getItem('token');
      await Axios.patch('http://localhost:4000/student/profile', profileData, {
        headers: {
          'x-auth': token,
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token,"this iss")
      toast.info('Logged out successfully');
      await Axios.delete('http://localhost:4000/student/logout', {
        headers: {
          'x-auth': token,
        },
      });
      console.log("logged out!!")
      localStorage.removeItem('token'); // Remove the token from local storage
      // You can also redirect the user to the login page or any other page
      // after successfully logging out.
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // <div className={style.bgimage}>
  // <img alt="profile image" src={profileData.https://githttpshub.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true}  />
  // </div>

  return (
  //   <div className={style.profileContainer}>
  // <img alt="profile image" src={profileData.imageUrl} className={style.profileImage} />
  // </div>
    // <img className={style.wave} src="://githttpshub.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
        <div className={style.profileContainer}>
      <h1 className={style.profileHeader}>Profile Page</h1>
      {isEditing ? (
        <div className={style.editableFields}>
          {/* Editable Fields */}

          <div className={style.formGroup}>
            <label htmlFor="imageUrl">Image:</label>
            <input
              type="file"
              id="imageUrl"
              name="imageUrl"
              value={profileData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className={style.formGroup}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formGroup}>
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={profileData.degree}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formGroup}>
            <label>Branch:</label>
            <input
              type="text"
              name="branch"
              value={profileData.branch}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formGroup}>
           <label>Roll Number:</label>
           <input
             type="text"
             name="rollNumber"
             value={profileData.rollNumber}
             onChange={handleInputChange}
           />
         </div>
         {/* <div className={style.formGroup}>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={profileData.imageUrl}
              onChange={handleInputChange}
            />
          </div> */}
          <div className={style.formGroup}>
            <label>Skills:</label>
            <input
              type="text"
              name="skills"
              value={profileData.skills.join(', ')} // Convert skills array to a comma-separated string
              onChange={handleInputChange}
            />
          </div>
          {/* Add more editable fields for other profile information */}
          <button className={style.saveButtons} onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <div className={style.profileContainer}>
      
          {/* Display Fields */}
         {/* <img alt="profile image" src={profileData.imageUrl} className={style.profileImage} /> */}
         <img alt="profile image" src={images} className={style.profileImage} />
          <div className={style.profileContainerss}>
          <img alt="background image" src={Profileimg} className={style.profileImages} />
          </div>
          <div className={style.profileborder}>
          <div className={style.profileinfo}>
          <div className={style.a}>
          <p>First Name: {profileData.firstName}</p>
          </div>
          <div className={style.a}>
          <p>Last Name: {profileData.lastName}</p>
          </div>
          <div className={style.a}>
          <p>Degree: {profileData.degree}</p>
          </div>
          <div className={style.a}>
          <p>Branch: {profileData.branch}</p>
          </div>
          <div className={style.a}>
          <p>Roll Number: {profileData.rollNumber}</p>
          </div>
          <div className={style.a}>
          <p>Start Year: {profileData.startYear}</p>
          </div>
          
        </div>
          <div className={style.pro1}>
          <div className={style.profileinfo1}>
          <div className={style.b}>
          <p>End Year: {profileData.endYear}</p>
          </div>
          <div className={style.b}>
          <p>Mobile Number: {profileData.mobileNumber}</p>
          </div>
          <div className={style.b}>
          <p>LinkedIn: <a href={profileData.socialProfiles.linkedin}>{profileData.socialProfiles.linkedin}</a></p>
          </div>
          <div className={style.b}>
          <p>Github:  <a href={profileData.socialProfiles.github}>{profileData.socialProfiles.github}</a></p>
          </div>
          <div className={style.b}>
          <p>Image URL: {profileData.imageUrl}</p>
          </div>
          {/* <div className={style.b}>
          <p>Skills: {profileData.skills.join(', ')}</p>
          </div> */}
        </div>
          </div>
          
          </div>
          {/* Display other profile information */}
          <button className={style.editButton} onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
      
          
            <button className={style.logoutButton} onClick={handleLogoutClick}>
            
        Logout
      </button>
      
      
      
    </div>
      
  
  

  );
}
// >>>>>>> upstream/main

export default Profile;