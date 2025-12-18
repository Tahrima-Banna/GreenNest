import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/context/AuthContext';
import { toast } from 'react-toastify';
import MyContainer from '../components/MyContainer';

const MyProfile = () => {
    const {user,updateProfileFunc,setLoading}=useContext(AuthContext);

    const[name,setName]=useState(user?.displayName||"");
    const[photo,setPhoto]=useState(user?.photoURL||"");

    const handleUpdateProfile=()=>{
        updateProfileFunc(name,
            photo).then((res)=>{
                console.log(res);
                setLoading(false);
                toast("successfully update");
            }).catch((error) => {
         console.error(error);
      });
    }
    return (
      
       <MyContainer>
   
         <div className='flex justify-center min-h-screen items-center'>
        
          <div className="max-w-md mx-auto  p-6  shadow-lg rounded-lg"> <img
        src={user?.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold text-center mt-4">
        {user?.displayName}
      </h2>

      <p className="text-center text-gray-600">{user?.email}</p>

      <div className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Update Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleUpdateProfile}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Update Profile
        </button>
      </div>
     </div>
          
         </div>

      
       </MyContainer>
    );
};

export default MyProfile;