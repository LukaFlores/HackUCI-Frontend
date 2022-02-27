import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import InputFields from './InputFields';
import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
import SignIn from './Signin';

const Dashboard: React.FC<{ loading: boolean }> = (props) => {
  const [isEditingIntersts, setIsEditingInterests] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  const authenticate = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    authenticate();
  });

  return (
    <div className="justify-center mt-30 mb-30">
      <NavBar
        loading={props.loading}
        isEditProfile={setIsEditingInterests}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        isEditingInterests={isEditingIntersts}
      />
      {isEditingIntersts ? (
        <InputFields loading={props.loading} isEditingInterests={setIsEditingInterests} />
      ) : isLoggedIn ? (
        <ProfilePage />
      ) : (
        <SignIn loading={props.loading} isEditingInterests={setIsEditingInterests} />
      )}
    </div>
  );
};
export default Dashboard;
