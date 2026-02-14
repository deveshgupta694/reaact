import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
//use of OUTLET -> things will change only in place of OUTLET only

//Layout is at top level in main.jsx
function Layout() {
    return(
        <>
            {/* Header remains same */}
            <Header/>

            
            <Outlet/> {/* HOME - GITHUB - USER - CONTACT - ABOUT */}

            {/* Footer remains same */}
            <Footer/>
        </>
    )
}

export default Layout;