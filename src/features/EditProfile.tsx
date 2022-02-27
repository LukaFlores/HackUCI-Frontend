import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import profileImg2 from '../assets/images/stockprofile.jpg';

const EditProfile: React.FC<{ loading: boolean }> = (props) => {

    const profileData = {
        name: 'Ben',
        age: 25,
        img: profileImg2,
        description: 'I love running and swimming and would love to find someone to workout with',
        gender: 'male',
        interests: 'running, swimming',
        activityLevel: 'light',
        preferredTime: 'morning',
    }

  return (
    <div className="justify-center flex items-center m-10">
        <div className='w-100 rounded-xl shadow-xl bg-blue-1'>
            <div className="my-6 px-5">
                <div className="text-center font-sans text-white font-bold text-3xl mb-3">
                    PROFILE
                </div>
                
                <div className="font-sans text-white text-lg">
                    <b>Name:</b> {profileData.name}
                </div>

                <div className="font-sans text-white text-lg">
                    <b>Preferred Workout Time:</b> {profileData.preferredTime}
                </div>

                <div className="font-sans text-white text-lg">
                    <b>Preferred Workout Level:</b> {profileData.activityLevel}
                </div>

                <div className="font-sans text-white text-lg">
                    <b>Activities:</b> {profileData.interests}
                </div>

                <div className="font-sans text-white text-lg">
                    <b>Bio:</b> {profileData.description}
                </div>

                <img src={profileData.img} className="rounded-xl h-25 mt-5"/>

                

            </div>
        </div>
    </div>
  );
};
export default EditProfile;
