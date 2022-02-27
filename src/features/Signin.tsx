import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

interface ValidateInputs {
  email: boolean;
  password: boolean;
  retypePassword: boolean;
}

const SignIn: React.FC<{ loading: boolean; isEditingInterests: any }> = (props) => {
  const [formPreferences, setFormPreferences] = useState<'login' | 'signin'>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retypePassword, setRetypePassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const [validInputs, setValidInputs] = useState<ValidateInputs>({
    email: false,
    password: false,
    retypePassword: false,
  });

  const auth = getAuth();

  const signUpUser = async (auth: any, email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        props.isEditingInterests(true);
      }
    } catch (error: any) {
      setError(true);
    }
  };

  const signExistingUser = async (auth: any, email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        props.isEditingInterests(true);
      }
    } catch (error: any) {
      setError(true);
    }
  };

  const validateInputs = (email: string, password: string, retypePassword: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;

    setValidInputs({
      email: email !== '' ? emailRegex.test(email) : false,
      password: password !== '' ? passwordRegex.test(password) : false,
      retypePassword: retypePassword !== '' ? password === retypePassword : false,
    });

    setEmail(email);
    setPassword(password);
    setRetypePassword(retypePassword);
  };

  return (
    <div className="justify-center flex items-center mt-40">
      <div
        className={`w-100 rounded-xl shadow-xl ${
          formPreferences === 'login' ? 'bg-blue-1' : 'bg-blue-2'
        }`}
      >
        <div className="grid gird-cols-2 grid-flow-col w-full rounded-t-xl ">
          <div
            onClick={() => {
              setFormPreferences('login');
            }}
            className={`flex justify-center text-xl font-sans ${
              formPreferences === 'login' ? '' : 'rounded-br-xl'
            } bg-blue-1 font-bold text-white rounded-tl-xl pl-3 py-3 uppercase`}
          >
            Login
          </div>
          <div
            onClick={() => {
              setFormPreferences('signin');
            }}
            className={`flex justify-center text-xl text-sans ${
              formPreferences === 'login' ? 'bg-blue-2 bg-opacity-50 rounded-bl-xl' : 'bg-blue-2'
            } font-bold text-white rounded-tr-xl   pr-3 py-3 uppercase`}
          >
            Sign Up
          </div>
        </div>
        <div className="my-6 px-5 ">
          <div className="font-sans font-bold text-white text-xl">
            {formPreferences === 'login' ? 'Login:' : 'Sign Up:'}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={async (e) => {
                validateInputs(e.target.value, password, retypePassword);
              }}
              className={`w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none focus:ring-2 ${
                validInputs.email === false ? 'focus:ring-red-700' : 'focus:ring-blue-600'
              }`}
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              onChange={async (e) => {
                validateInputs(email, e.target.value, retypePassword);
              }}
              className={`w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none focus:ring-2 ${
                validInputs.password === false ? 'focus:ring-red-700' : 'focus:ring-blue-600'
              }`}
            />
          </div>
          {formPreferences === 'signin' && (
            <div className="mt-4">
              <input
                onChange={async (e) => {
                  validateInputs(email, password, e.target.value);
                }}
                type="password"
                placeholder="Re-type Password"
                className={`w-full px-4 py-2 mt-2 font-sans rounded-md focus:outline-none focus:ring-2 ${
                  validInputs.retypePassword === false
                    ? 'focus:ring-red-700'
                    : 'focus:ring-blue-600'
                }`}
              />
            </div>
          )}
          {error === true && (
            <div className="text-xs text-red-800  mt-2 ml-8">
              Please enter a valid email and password
            </div>
          )}
          <ul className="list-disc text-red-800 mt-2 ml-8 text-xs">
            {validInputs.email === false && <li> A valid email must be entered</li>}
            {validInputs.password === false && (
              <li>
                Password must contain minimum of eight characters, at least one letter and one
                number
              </li>
            )}
            {validInputs.retypePassword === false && formPreferences === 'signin' && (
              <li>'The retyped password must match the first password entered</li>
            )}
          </ul>
          <div className="flex items-baseline justify-between">
            <div
              className={`px-6 py-2 mt-4 text-white rounded-lg  ${
                formPreferences === 'login' ? 'bg-blue-2' : 'bg-blue-1'
              } 
              hover:bg-blue-900
              ${
                validInputs.email === false ||
                validInputs.password === false ||
                validInputs.retypePassword === false
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <button
                className={`font-bold ${
                  validInputs.email === true && validInputs.password === true
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed'
                }`}
                onClick={() => {
                  if (formPreferences === 'login') {
                    signExistingUser(auth, email, password);
                  } else {
                    signUpUser(auth, email, password);
                  }
                }}
              >
                {formPreferences === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </div>
            <a
              href="/"
              className={`text-sm text-blue-2 font-bold hover:underline ${
                formPreferences === 'login' ? 'text-blue-2' : 'text-blue-50 '
              }`}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
