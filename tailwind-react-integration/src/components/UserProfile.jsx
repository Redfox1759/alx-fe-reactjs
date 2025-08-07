import React from 'react'
import '../index.css'
function UserProfile() {
    return (
      <div className="user-profile sm:p-4 bg-gray-100 mx-auto my-20 rounded-lg shadow-lg md:p-8 md:max-w-sm max-w-xs hover:shadow-xl">
        <img src="https://via.placeholder.com/150" alt="User" className='sm:h-24 sm:w-24 rounded-full md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out' />
        <h1 className=' text-lg md:text-xl text-blue-800 my-4 font-bold hover:text-blue-500 '>John Doe</h1>
        <p className='text-sm text-gray-600 md:text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
