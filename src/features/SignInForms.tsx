import React, { useState } from 'react';
import InputFields from './InputFields';
import SignIn from './Signin';

const SignInFroms: React.FC<{ loading: boolean }> = (props) => {
  const [isEditingIntersts, seIsEditingInterests] = useState(false);

  return (
    <div className="justify-center flex items-center mt-30">
      {isEditingIntersts ? (
        <InputFields loading={props.loading} />
      ) : (
        <SignIn loading={props.loading} isEditingInterests={seIsEditingInterests} />
      )}
    </div>
  );
};
export default SignInFroms;
