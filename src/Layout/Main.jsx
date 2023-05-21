import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <div className="mt-12 flex justify-center"><progress className="progress w-56 mt-12"></progress>;</div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:min-h-[calc(100vh-390px)]'>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;