import { Link } from "react-router-dom";

const ExtraSectionOne = () => {
    return (
        <div className="mt-12">
            <h2 className="text-5xl text-blue-800 font-bold text-center my-4">Mission</h2>
            <hr className='w-1/6 mx-auto mb-12 bg-cyan-800 h-1' />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5 gap-5">
                <div>
                    <h2 className=' text-3xl text-blue-800 font-bold text-center my-4'>Our Mission</h2>
                    <p className="text-gray-700"> We are passionate about providing you with an exhilarating experience through our collection of high-quality sports car toys. Whether you are a car enthusiast or looking for the perfect gift, you have come to the right place.</p>
                    <div className="text-center">
                        <Link to='/allToys'><button className="btn-primary btn mt-5 ">See Our Products</button></Link>
                    </div>
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.postimg.cc/J41vfFds/mission2.jpg" alt="mission" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;