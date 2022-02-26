import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OnImagesLoaded from 'react-on-images-loaded';
import { Route, Routes, useLocation } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Dashboard from './features/Dashboard';
import imgtypscriptlogo from './assets/images/typescript.svg';
import SignIn from './features/Signin';

const App: React.FC<{}> = (props) => {
  const { t, ready } = useTranslation();
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

      {ready ? (
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
          <div className="flex flex-row z-30 bg-white">
            <div className=" antialiased font-sans h-full min-h-screen w-full">
              <main id="main">
                <Fade key={location.pathname} appear duration={300} collapse>
                  <Routes>
                    <Route path="/signin" element={<SignIn loading={showLoader} />} />
                    <Route path="/" element={<Dashboard loading={showLoader} />} />
                  </Routes>
                </Fade>
              </main>
            </div>
          </div>
        </OnImagesLoaded>
      ) : null}
    </div>
  );
};

export default App;
