// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegHeart, FaHeart, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Blog = () => {

    const [toggleStates, setToggleStates] = useState([false, false, false, false]);
    useTitle('Blog');

    const handleClick = (index) => {
        const updatedToggleStates = [...toggleStates];
        updatedToggleStates[index] = !updatedToggleStates[index];
        setToggleStates(updatedToggleStates);
      
        if (updatedToggleStates[index]) {
          toast("Added to the favorite item 🔥");
        } else {
          toast("Removed from the favorite item ❌");
        }
      };
    return (
        <div className="mx-5 md:mx-0">
            <h2 className="text-center text-5xl font-bold text-blue-800 my-12">Our Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-base-100 shadow-2xl w-full border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/4ddPvyZZ/blog-11.jpg" alt="Shoes" /></figure>
                    <div className="card-body p-0 m-0 mt-5">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className="text-justify text-gray-600">An access token is a credential that is issued to a client application after successful authentication. It is used to authorize the client to access specific resources on behalf of a user. Access tokens are typically short-lived and contain information such as the user  identity and permissions. They are sent with each request to the server to validate the client is authorization.</p>
                        <p className="text-justify  text-gray-600">A refresh token is a credential that is also issued during authentication. It is used to obtain a new access token when the current one expires. Refresh tokens are long-lived and securely stored on the client-side, usually as HTTP-only cookies. When the access token expires, the refresh token is sent to the server to request a new access token without requiring the user to re-authenticate.</p>
                        <p className="text-justify  text-gray-600">Access tokens are commonly stored in memory or local storage on the client-side, while refresh tokens are securely stored as HTTP-only cookies to mitigate the risk of unauthorized access.</p>

                        <div className='flex mt-2 justify-between'>
                            <div>
                                {
                                    toggleStates[0] ?
                                        <FaHeart className="text-3xl text-pink-700" onClick={() => handleClick(0)}></FaHeart> :
                                        <FaRegHeart style={{ fontSize: '30px' }} onClick={() => handleClick(0)}></FaRegHeart>
                                }
                            </div>
                            <div className="flex gap-2">
                                <Link to='https://www.facebook.com/shovan.banik.9'><FaFacebook className="text-blue-700 text-3xl"></FaFacebook></Link>
                                <Link to='https://twitter.com/shovanbanik2'><FaTwitter className="text-black-700 text-3xl"></FaTwitter></Link>
                                <Link to='https://www.youtube.com/channel/UCPd4lGKyyOth4A8yuqbLHAw'><FaYoutube className="text-red-700 text-3xl"></FaYoutube></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card2 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/RV8kWr7N/blog-2.png" alt="Shoes" /></figure>
                    <div className="card-body p-0 m-0 mt-5">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p className="text-justify text-gray-600">SQL databases, also known as relational databases, store structured data in tables with predefined schemas. They ensure data integrity through ACID properties and support complex queries using SQL. SQL databases are suitable for applications requiring strict data consistency and complex relationships.</p>
                        <p className="text-justify text-gray-600">NoSQL databases, on the other hand, are non-relational and store unstructured or semi-structured data in flexible formats like key-value pairs, documents, or graphs. They prioritize scalability and high performance by allowing horizontal scaling and distributed computing. NoSQL databases are well-suited for handling large volumes of rapidly changing data and provide flexibility in data modeling.</p>
                        <p className="text-justify text-gray-600">The choice between SQL and NoSQL databases depends on factors such as data structure, scalability needs, query complexity, and project requirements. SQL databases are suitable for structured data and complex relationships, while NoSQL databases excel in scalability, flexibility, and handling unstructured data.</p>
                        <div className='flex mt-2 justify-between'>
                            <div>
                                {
                                    toggleStates[1] ?
                                        <FaHeart className="text-3xl text-pink-700" onClick={() => handleClick(1)}></FaHeart> :
                                        <FaRegHeart style={{ fontSize: '30px' }} onClick={() => handleClick(1)}></FaRegHeart>
                                }
                            </div>
                            <div className="flex gap-2">
                                <Link to='https://www.facebook.com/shovan.banik.9'><FaFacebook className="text-blue-700 text-3xl"></FaFacebook></Link>
                                <Link to='https://twitter.com/shovanbanik2'><FaTwitter className="text-black-700 text-3xl"></FaTwitter></Link>
                                <Link to='https://www.youtube.com/channel/UCPd4lGKyyOth4A8yuqbLHAw'><FaYoutube className="text-red-700 text-3xl"></FaYoutube></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/DwXtsC65/blog-3.png" alt="Shoes" /></figure>
                    <div className="card-body p-0 m-0 mt-5">
                        <h2 className="card-title">What is express js? What is Nest JS?</h2>
                        <p className="text-justify text-gray-600">Express.js is a popular and minimalistic web application framework for Node.js. It provides a robust set of features and middleware to build web applications and APIs quickly and efficiently. With its simple and intuitive syntax, Express.js allows developers to handle HTTP requests, define routes, handle middleware functions, and integrate with databases and other libraries easily. It is widely used in building single-page applications, RESTful APIs, and server-side rendered applications.</p>
                        <p className="text-justify text-gray-600">NestJS, on the other hand, is a progressive and scalable framework for building efficient server-side applications with Node.js. It combines the best features of TypeScript with powerful design patterns inspired by Angular to provide a robust and modular architecture. NestJS emphasizes the use of decorators, dependency injection, and module-based structure to create highly maintainable and scalable applications. It supports various transport layers, including HTTP, WebSockets, and Microservices, and provides features like validation, caching, logging, and more out of the box. NestJS is well-suited for building enterprise-grade applications with a focus on scalability and maintainability.</p>

                        <div className='flex mt-2 justify-between'>
                            <div>
                                {
                                    toggleStates[2] ?
                                        <FaHeart className="text-3xl text-pink-700" onClick={() => handleClick(2)}></FaHeart> :
                                        <FaRegHeart style={{ fontSize: '30px' }} onClick={() => handleClick(2)}></FaRegHeart>
                                }
                            </div>
                            
                            <div className="flex gap-2">
                                <Link to='https://www.facebook.com/shovan.banik.9'><FaFacebook className="text-blue-700 text-3xl"></FaFacebook></Link>
                                <Link to='https://twitter.com/shovanbanik2'><FaTwitter className="text-black-700 text-3xl"></FaTwitter></Link>
                                <Link to='https://www.youtube.com/channel/UCPd4lGKyyOth4A8yuqbLHAw'><FaYoutube className="text-red-700 text-3xl"></FaYoutube></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card-4 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/9Xx5jwzP/blog-4.png" alt="Shoes" /></figure>
                    <div className="card-body p-0 m-0 mt-5">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
                        <p className="text-justify text-gray-600">MongoDB aggregate is a powerful framework for performing data aggregation operations on collections. It allows you to process and transform documents using a pipeline of stages. Each stage performs a specific operation, such as filtering, grouping, sorting, or calculating aggregations.</p>
                        <p className="text-justify text-gray-600">The aggregate pipeline consists of multiple stages, where the output of one stage serves as the input for the next. This allows for complex data manipulations and analysis. The stages are executed sequentially, allowing you to shape and refine the data as it passes through the pipeline.</p>
                        <p className="text-justify text-gray-600">Aggregation in MongoDB is based on the concept of the aggregation pipeline, which allows you to combine multiple operations to achieve the desired results. This makes it a flexible and efficient tool for performing advanced data analysis and generating customized reports from MongoDB collections</p>
                        <div className='flex mt-2 justify-between'>
                            <div>
                                {
                                    toggleStates[3] ?
                                        <FaHeart className="text-3xl text-pink-700" onClick={() => handleClick(3)}></FaHeart> :
                                        <FaRegHeart style={{ fontSize: '30px' }} onClick={() => handleClick(3)}></FaRegHeart>
                                }
                            </div>
                            <div className="flex gap-2">
                                <Link to='https://www.facebook.com/shovan.banik.9'><FaFacebook className="text-blue-700 text-3xl"></FaFacebook></Link>
                                <Link to='https://twitter.com/shovanbanik2'><FaTwitter className="text-black-700 text-3xl"></FaTwitter></Link>
                                <Link to='https://www.youtube.com/channel/UCPd4lGKyyOth4A8yuqbLHAw'><FaYoutube className="text-red-700 text-3xl"></FaYoutube></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blog;

