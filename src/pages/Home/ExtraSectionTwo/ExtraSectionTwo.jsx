import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExtraSectionTwo = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5 gap-5">
                <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="500" data-aos-easing="ease-in-out">
                    <img className="rounded-xl" src="https://i.postimg.cc/K8QWrjRY/about.jpg" alt="mission" />
                </div>
                <div>
                    <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className=' text-5xl text-blue-800 font-bold text-center my-4'>Who We are?</h2>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="text-gray-700 text-justify"> We are a passionate team of car enthusiasts dedicated to bringing the excitement of sports cars into the world of toys. With a deep appreciation for automotive engineering and design, we strive to provide our customers with an unparalleled experience.</p>
                    <div className="text-center">
                        <button className="btn-primary btn mt-5 ">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionTwo;