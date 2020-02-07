import React from 'react';
import Navbar from './Navbar';
import Logo from './ReplateLogo';

function Page({children}) {
    return (
        <>
        <div className="App">
          <div className="App__Aside">
<Logo />

          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <Navbar />
            </div>
            {children}

          </div>
        </div>
        </>
            )
}

export default Page;