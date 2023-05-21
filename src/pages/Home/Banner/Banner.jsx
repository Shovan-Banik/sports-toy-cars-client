import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mx-2 md:mx-0'>
            <div className="hero md:min-h-screen mt-5 rounded-xl" style={{ backgroundImage: `url("https://i.postimg.cc/NM26gRD4/banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-xl" data-aos="fade-up" data-aos-duration="4000" data-aos-delay="500" data-aos-easing="ease-in-out">
                        <h1 className="mb-5 text-5xl font-bold">Discover our Collection of Sports Car Toys!</h1>
                        <p className="mb-5">Welcome to our online sports car toy, where the thrill of speed and the excitement of racing come alive! Fuel the imagination of young racing enthusiasts with our extensive collection of high-performance sports car toys.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;