import './navbar.css'
import './sidebar.css'

import { Suspense,useState } from 'react';

import Header from './Header/Header';
import SideBar from './SideMenu/SideMenu'

function GetUsername({ isSidebarOpen, toggleSidebar }: any) {
    return (
        < nav className={isSidebarOpen ? "sidebar" : "sidebar close"} >
            <Header toggleSidebar={toggleSidebar} />
            <SideBar  />

        </nav >)
}


const Navbar = () => {



    // Navbar state for sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Suspense>
                <GetUsername isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </Suspense>
        </>
    )
}



export default Navbar;