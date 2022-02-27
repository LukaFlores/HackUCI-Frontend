import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth: React.FC<{}> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();


  const init = async ( ) => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.providerData[0]) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }



  useEffect(() => {
    init()
  }, []);

  return isLoggedIn ? <>{props.children}</> : <Navigate to="/signin" replace />;
};
export default RequireAuth;
