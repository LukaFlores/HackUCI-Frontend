import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';


const NavBar: React.FC<{ loading: boolean; isEditProfile: any }> = (props) => {



    // FOR EDITING PROFILE INCLUDE THIS
    //onClick={() => props.isEditProfile(true)}


    //onClick={() => logout()}
    const logout = () => {
       console.log("SIGN OUT")
    }


  return (
  
  <div className="bg-blue-1">
    <nav className="flex items-center justify-between flex-wrap p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span className="font-semibold text-xl tracking-tight">ExerBuddy</span>
    </div>
    <div className="w-full block flex-justify-end lg:flex lg:items-center lg:w-auto">
      <div>
        <button onClick={() => props.isEditProfile(true)} className="inline-block text-md px-4 py-2 leading-none mt-4 lg:mt-0 text-white hover:text-black">Edit Profile</button>
      </div>
      <div>
        <button onClick={() => logout()} className="inline-block text-md px-4 py-2 leading-none mt-4 lg:mt-0 text-white hover:text-black">Logout</button>
      </div>
    </div>
    </nav>
  </div>
  );
};
export default NavBar;
