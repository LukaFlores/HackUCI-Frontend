import React from 'react';
import redX from '../assets/images/redx.png';
import greenCheck from '../assets/images/greencheckmark.png';
import { ProfileDataTypes } from '../features/ProfilePage';

const ProfileCard: React.FC<{ profileData: ProfileDataTypes; nextProfile: any }> = (props) => {
  return (
    <div className="justify-center flex items-center m-5">
      <div className="w-100 p-6 bg-white rounded-xl shadow-md hover:shadow-xl">
        <div className="text-center text-black text-2xl capitalize font-sans font-bold">
          <b>{props.profileData.name}</b>, <i>{props.profileData.age}</i>
        </div>
        <div className=" flex justify-center">
          <img src={props.profileData.img} className="h-80 rounded-xl " />
        </div>

        <div className="text-left pl-1 mt-4 text-black capitalize font-sans font-bold">
          <b>Gender:</b> {props.profileData.gender}
        </div>

        <div className="text-left pl-1 mt-4 text-black capitalize font-sans font-bold">
          <b>Activity Level:</b> {props.profileData.activityLevel}
        </div>

        <div className="text-left pl-1 mt-4 text-black capitalize font-sans font-bold">
          <b>Workout Time:</b> {props.profileData.preferredTime}
        </div>

        <div className="text-left pl-1 mt-4 text-black capitalize font-sans font-bold">
          <b>Interests:</b> {props.profileData.interests}
        </div>

        <div className="text-left pl-1 mt-4 text-black font-sans font-bold">
          <b>Bio:</b> {props.profileData.description}
        </div>

        <div className="flex items-baseline justify-between capitalize font-sans font-bold">
          <img
            className="h-14 mt-4 hover:bg-red-400 rounded-full"
            onClick={() => props.nextProfile()}
            src={redX}
          />
          <img
            className="h-14 mt-4 hover:bg-green-1 rounded-full"
            onClick={() => props.nextProfile()}
            src={greenCheck}
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
