import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

const Dashboard: React.FC<{ loading: boolean }> = (props) => {
  const [data, setData] = useState(null);

  return (
    <div className="flex justify-center mt-20 text-white">
      <ProfileCard />
    </div>
  );
};
export default Dashboard;
