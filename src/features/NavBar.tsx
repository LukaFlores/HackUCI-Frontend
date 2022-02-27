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
  <div className="justify-center flex items-center mt-30">

  </div>
  );
};
export default NavBar;
