import React from 'react';
import profileImg from '../assets/images/testProfilePhoto.jpeg';
import profileImg2 from '../assets/images/stockprofile.jpg';
import redX from '../assets/images/redx.png';
import greenCheck from '../assets/images/greencheckmark.png';

const ProfileCard: React.FC<{}> = (props) => {
  // const profileData = {
  //   name: 'Mary',
  //   age: '15',
  //   img: profileImg,
  //   description: 'Hello my name is mary, I love to workout',
  //   gender: 'female',
  //   interests: 'weight training, yoga, tennis'
  // };

  const profileData = {
    name: 'Ben',
    age: 25,
    img: profileImg2,
    description: 'I love running and swimming and would love to find someone to workout with',
    gender: 'male',
    interests: 'running, swimming'
  }

  function disliked() {}
  function liked() {}


  return (
    <div className="justify-center flex items-center m-40">
      <div className="w-100 p-6 bg-white rounded-xl drop-shadow-md">
        <div className='text-center text-black text-2xl'>
            <b>{profileData.name}</b>, <i>{profileData.age}</i>
        </div>
        <img src={profileData.img} className="rounded-xl"/>

        <div className='text-left pl-1 mt-4 text-black'>
          <b>Interests:</b> {profileData.interests}
        </div>

        <div className='text-left pl-1 mt-4 text-black'>
          <b>Bio:</b> {profileData.description}
        </div>


        <div className="flex items-baseline justify-between">
          <img className='h-14 mt-4 hover:bg-red-400 rounded-full' onClick={() => disliked}  src={redX}/>
          <img className='h-14 mt-4 hover:bg-green-1 rounded-full' onClick={() => liked} src={greenCheck}/>
        </div>


      </div>
    </div>
  );
};
export default ProfileCard;
