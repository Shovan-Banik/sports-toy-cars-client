import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExtraSectionOne = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5 gap-5">
                <div className="p-4">
                    <h2 data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className=' text-5xl text-blue-800 font-bold text-center my-4'>Our Mission</h2>
                    <p data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className="text-gray-700 text-justify"> We are passionate about providing you with an exhilarating experience through our collection of high-quality sports car toys. Whether you are a car enthusiast or looking for the perfect gift, you have come to the right place.</p>
                    <div className="text-center">
                        <Link to='/allToys'><button className="btn-primary btn mt-5 ">See Our Products</button></Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-easing="ease-in-out">
                    <img className="rounded-xl" src="https://i.postimg.cc/J41vfFds/mission2.jpg" alt="mission" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;