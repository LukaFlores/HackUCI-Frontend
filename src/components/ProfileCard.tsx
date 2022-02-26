import React from 'react';
import profileImg from '../assets/images/testProfilePhoto.jpeg';

const ProfileCard: React.FC<{}> = (props) => {
  const profileData = {
    name: 'Katelyn',
    age: '15',
    img: profileImg,
    description: 'Hello my name is mary, I love to workout',
  };

  return (
    <div className="justify-center flex items-center m-40">
      <div className="w-100 p-6 bg-white rounded-xl">
        <div className='text-center text-black text-2xl font-bold'>
            {profileData.name}
        </div>
        <img src={profileData.img} className="rounded-xl"/>
      </div>
    </div>
  );
};
export default ProfileCard;
