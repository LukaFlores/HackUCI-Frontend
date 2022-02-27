import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const InputFields: React.FC<{ loading: boolean }> = (props) => {

  return (
    <div className="justify-center flex items-center m-5">
        <div className='w-100 rounded-xl shadow-xl bg-blue-1'>
            <div className="my-6 px-5 ">
                <div className="font-sans font-bold text-black text-xl">
                    <label htmlFor='name' className="text-white">Full Name</label>
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
                    <label htmlFor='gender' className="text-white">Gender</label>
                    <select name="gender" id="gender" className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'>
                        <option value="" disabled selected>Please choose...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-Binary</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor='time-of-day' className="font-sans font-bold text-white text-xl">Preferred Workout Time: </label>
                    <select name="Time" id="time-of-day" className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'>
                        <option value="" disabled selected>Please choose...</option>
                        <option value="morning">Morning</option>
                        <option value="day">Daytime</option>
                        <option value="night">Night</option>
                        <option value="no-preference">No Preference</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor='activity-level' className="font-sans font-bold text-white text-xl">Preferred Workout Level: </label>
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
                        // onClick={() => {
                        //     // setFormPreferences('login');
                        // }}
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
                    <select id="activities" name="activities" 
                    data-placeholder="Begin typing a name to filter..." 
                    multiple className='w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none'
                    >
                        <option value='badminton'>badminton</option>
                        <option value='baseball'>baseball</option>
                        <option value='basketball'>basketball</option>
                        <option value='dance'>dance</option>
                        <option value='football'>football</option>
                        <option value='frisbee'>frisbee</option>
                        <option value='golf'>golf</option>
                        <option value='gym'>gym</option>
                        <option value='hiking'>hiking</option>
                        <option value='hockey'>hockey</option>
                        <option value='martial-arts'>martial arts</option>
                        <option value='running'>running</option>
                        <option value='soccer'>soccer</option>
                        <option value='softball'>softball</option>
                        <option value='swimming'>swimming</option>
                        <option value='table-tennis'>table tennis</option>
                        <option value='tennis'>tennis</option>
                        <option value='volleyball'>volleyball</option>
                        <option value='weights'>weights</option>
                        <option value='yoga'>yoga</option>
                        <option value='other'>other</option>
                    </select>
                </div>

                <div className='mt-4'>
                    <button className="px-6 py-2 mt-4 text-white rounded-lg bg-blue-2 shadow-md hover:shadow-xl">Submit</button>
                </div>
                

            </div>
        </div>
    </div>
  );
};
export default InputFields;
