import React, { useState, useEffect, Children } from 'react';
import { useTranslation } from 'react-i18next';
import OnImagesLoaded from 'react-on-images-loaded';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Dashboard from './features/Dashboard';
import imgtypscriptlogo from './assets/images/typescript.svg';
import EditProfile from './features/EditProfile';

const App: React.FC<{}> = (props) => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  return (
    <div className="">
      {showLoader ? (
        <div
          className={`fixed z-50 loader w-screen h-screen flex justify-center bg-white items-center transition duration-500 ease-in-out ${
            loading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <Fade bottom>
              <Swing forever>
                <div>
                  <svg
                    className="fill-current h-8 w-8 mr-2 cursor-pointer text-white "
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                  </svg>
                </div>
              </Swing>
            </Fade>
          </div>
        </div>
      ) : null}

      <OnImagesLoaded
        onLoaded={() => {
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
              setShowLoader(false);
            }, 500);
          }, 1000);
        }}
        onTimeout={() => {
          setLoading(false);
          setTimeout(() => {
            setShowLoader(false);
          }, 500);
        }}
        timeout={7000}
      >
        <div className="flex flex-row z-30 bg-gradient-to-t from-blue-1 to bg-white">
          <div className=" antialiased font-sans h-full min-h-screen w-full">
            <main id="main">
              <Fade key={location.pathname} appear duration={300} collapse>
                <Routes>
                  <Route path="/editprofile" element={<EditProfile loading={showLoader} />} />
                  <Route path="/" element={<Dashboard loading={showLoader} />} />
                </Routes>
              </Fade>
            </main>
          </div>
        </div>
      </OnImagesLoaded>
    </div>
  );
};

export default App;
