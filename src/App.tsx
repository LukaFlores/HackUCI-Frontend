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
                <div className="w-16 h-16">
                  <img className="rounded-xl" src={imgtypscriptlogo} />
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
        <main id="main">
          <Fade key={location.pathname} appear duration={300} collapse>
            <Routes>
              <Route path="/editprofile" element={<EditProfile loading={showLoader} />} />
              <Route path="/" element={<Dashboard loading={showLoader} />} />
            </Routes>
          </Fade>
        </main>
      </OnImagesLoaded>
    </div>
  );
};

export default App;
