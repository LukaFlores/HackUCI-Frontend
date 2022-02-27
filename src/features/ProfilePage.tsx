import React, { Profiler, useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import profileImg from '../assets/images/testProfilePhoto.jpeg';
import profileImg2 from '../assets/images/stockprofile.jpg';
import { use } from 'i18next';

export interface ProfileDataTypes {
  name?: string;
  age?: string;
  img?: any;
  description?: string;
  gender?: string;
  interests?: string;
  activityLevel?: string;
  preferredTime?: string;
}

const Profiles = [
  {
    name: 'Mary',
    age: '15',
    img: profileImg,
    description: 'Hello my name is mary, I love to workout',
    gender: 'female',
    interests: 'weight training, yoga, tennis',
    activityLevel: 'intense',
    preferredTime: 'night',
  },
  {
    name: 'Ben',
    age: '25',
    img: profileImg2,
    description: 'I love running and swimming and would love to find someone to workout with',
    gender: 'male',
    interests: 'running, swimming',
    activityLevel: 'light',
    preferredTime: 'morning',
  },
  {
    name: 'Mary',
    age: '15',
    img: profileImg,
    description: 'Hello my name is mary, I love to workout',
    gender: 'female',
    interests: 'weight training, yoga, tennis',
    activityLevel: 'intense',
    preferredTime: 'night',
  },
  {
    name: 'Ben',
    age: '25',
    img: profileImg2,
    description: 'I love running and swimming and would love to find someone to workout with',
    gender: 'male',
    interests: 'running, swimming',
    activityLevel: 'light',
    preferredTime: 'morning',
  },
  {
    name: 'Mary',
    age: '15',
    img: profileImg,
    description: 'Hello my name is mary, I love to workout',
    gender: 'female',
    interests: 'weight training, yoga, tennis',
    activityLevel: 'intense',
    preferredTime: 'night',
  },
  {
    name: 'Ben',
    age: '25',
    img: profileImg2,
    description: 'I love running and swimming and would love to find someone to workout with',
    gender: 'male',
    interests: 'running, swimming',
    activityLevel: 'light',
    preferredTime: 'morning',
  },
];

const ProfilePage: React.FC<{}> = (props) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const [profileData, setProfileData] = useState<ProfileDataTypes>({});

  const nextProfile = () => {
    setProfileData({
      name: Profiles[activeStep + 1].name,
      age: Profiles[activeStep + 1].age,
      img: Profiles[activeStep + 1].img,
      description: Profiles[activeStep + 1].description,
      gender: Profiles[activeStep + 1].gender,
      interests: Profiles[activeStep + 1].interests,
      activityLevel: Profiles[activeStep + 1].activityLevel,
      preferredTime: Profiles[activeStep + 1].preferredTime,
    });
    setActiveStep(activeStep + 1);
  };

  useEffect(() => {
    nextProfile();
  }, []);

  return (
    <div className="">
      <ProfileCard profileData={profileData} nextProfile={nextProfile} />
    </div>
  );
};
export default ProfilePage;
