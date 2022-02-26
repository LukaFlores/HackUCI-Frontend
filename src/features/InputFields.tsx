import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

interface ValidateInputs {
  email: boolean;
  password: boolean;
  retypePassword: boolean;
}

const InputFields: React.FC<{ loading: boolean }> = (props) => {

  return (
    <div className="justify-center flex items-center m-40">
        <div className='w-100 rounded-xl shadow-xl bg-blue-1'>
            <div className="my-6 px-5 ">
                <div className="font-sans font-bold text-white text-xl">
                    <label htmlFor='name'>Full Name</label>
                    <input
                    id='name'
                    type="text"
                    placeholder="Name"
                    className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor='birthday' className="font-sans font-bold text-white text-xl">Birthday</label>
                    <input
                    id='birthday'
                    type="date"
                    placeholder="Birthday"
                    className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor='time-of-day' className="font-sans font-bold text-white text-xl">Preferred workout time: </label>
                    <select name="Time" id="time-of-day" className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'>
                        <option value="" disabled selected>Please choose...</option>
                        <option value="morning">Morning</option>
                        <option value="day">Daytime</option>
                        <option value="night">Night</option>
                        <option value="no-preference">No Preference</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor='activity-level' className="font-sans font-bold text-white text-xl">Preferred workout level: </label>
                    <select name="ActivityLevel" id="activity-level" className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'>
                        <option value="" disabled selected>Please choose...</option>
                        <option value="light">Light</option>
                        <option value="medium">Medium</option>
                        <option value="intense">Intense</option>
                        <option value="no-preference">No Preference</option>
                    </select>
                </div>

                <div className="mt-4">
                    <div className="font-sans font-bold text-white text-xl">Preferred Workout Relationship</div>
                    <div className="flex items-baseline justify-between">
                        <button 
                        className="px-6 py-2 mt-4 text-blue-2 rounded-lg bg-white shadow-md hover:shadow-xl">
                            One-Workout Stand
                        </button>

                        <button 
                        className="px-6 py-2 mt-4 text-blue-2 rounded-lg bg-white shadow-md hover:shadow-xl">
                            Long-Term Relationship
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="font-sans font-bold text-white text-xl">Activities</div>

                </div>
                

            </div>
        </div>
    </div>
  );
};
export default InputFields;
