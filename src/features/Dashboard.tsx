import React, { useEffect, useState } from 'react';

const Dashboard: React.FC<{ loading: boolean }> = (props) => {
  const [data, setData] = useState(null);


  return (
    <div className="flex justify-center mt-20">
      Go team
    </div>
  )
};
export default Dashboard;
