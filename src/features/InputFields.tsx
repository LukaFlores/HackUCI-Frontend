import React, { useState } from 'react';

export interface DataTypes {
  name?: string;
  birthdate?: string;
  gender?: string;
  workoutTime?: string;
  activityLevel?: string;
  workoutRelationship?: string;
}

const interests = [
  'badminton',
  'baseball',
  'basketball',
  'dance',
  'football',
  'frisbee',
  'golf',
  'gym',
  'hiking',
  'hockey',
  'martial-arts',
  'running',
  'soccer',
  'softball',
  'swimming',
  'table-tennis',
  'tennis',
  'volleyball',
  'weights',
  'yoga',
  'other',
];

const InputFields: React.FC<{ loading: boolean; isEditingInterests: any }> = (props) => {
  const [data, setData] = useState<DataTypes>({
    name: '',
    birthdate: '',
    gender: '',
    workoutTime: '',
    activityLevel: '',
    workoutRelationship: '',
  });

  const updateDataBaseWithEdits = () => {};

  return (
    <div className="justify-center flex items-center m-5">
      <div className="w-100 rounded-xl shadow-xl bg-blue-1">
        <div className="my-6 px-5 ">
          <div className="font-sans font-bold text-black text-xl">
            <label htmlFor="name" className="text-white">
              Full Name
            </label>
            <input
              id="name"
              value={data.name}
              onChange={(e) => setData({ name: e.target.value })}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="birthday" className="font-sans font-bold text-white text-xl">
              Birthday
            </label>
            <input
              id="birthday"
              type="date"
              onChange={(e) => setData({ birthdate: e.target.value })}
              placeholder="Birthday"
              className="w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="gender" className="font-sans font-bold text-white text-xl">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setData({ gender: e.target.value })}
              className="w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none"
            >
              <option value="" disabled selected>
                Please choose...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="time-of-day" className="font-sans font-bold text-white text-xl">
              Preferred Workout Time:{' '}
            </label>
            <select
              name="Time"
              id="time-of-day"
              onChange={(e) => setData({ workoutTime: e.target.value })}
              className="w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none"
            >
              <option value="" disabled selected>
                Please choose...
              </option>
              <option value="morning">Morning</option>
              <option value="day">Daytime</option>
              <option value="night">Night</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="activity-level" className="font-sans font-bold text-white text-xl">
              Preferred Workout Level:{' '}
            </label>
            <select
              name="ActivityLevel"
              id="activity-level"
              onChange={(e) => setData({ activityLevel: e.target.value })}
              className="w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none"
            >
              <option value="" disabled selected>
                Please choose...
              </option>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="intense">Intense</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>

          <div className="mt-4">
            <div className="font-sans font-bold text-white text-xl">
              Preferred Workout Relationship
            </div>
            <div className="flex items-baseline justify-between">
              <button
                onClick={() => setData({ workoutRelationship: 'OneWorkout' })}
                className={`px-6 py-2 mt-4 rounded-lg shadow-md hover:shadow-xl ${
                  data.workoutRelationship === 'OneWorkout'
                    ? 'bg-blue-2 text-white'
                    : 'bg-white text-blue-2'
                }`}
              >
                One-Workout Stand
              </button>

              <button
                onClick={() => setData({ workoutRelationship: 'LongTerm' })}
                className={`
                px-6 py-2 mt-4 rounded-lg bg-white shadow-md hover:shadow-xl ${
                  data.workoutRelationship === 'LongTerm'
                    ? 'bg-blue-2 text-white'
                    : 'bg-white text-blue-2'
                }`}
              >
                Long-Term Relationship
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                props.isEditingInterests(false);
                updateDataBaseWithEdits();
              }}
              className="px-6 py-2 mt-4 text-white rounded-lg bg-blue-2 shadow-md hover:shadow-xl hover:bg-blue-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputFields;
