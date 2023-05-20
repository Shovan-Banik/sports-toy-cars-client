import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className="text-center text-5xl font-bold text-blue-800 my-12">Our Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-base-100 shadow-2xl w-full border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/4ddPvyZZ/blog-11.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>Access Token:

                            An access token is a credential that grants a user access to protected resources or APIs.
                            It is obtained after successful authentication and is included in each request to access protected resources.
                            Access tokens have a limited lifespan and need to be refreshed periodically.
                            Refresh Token:

                            A refresh token is a special token used to obtain a new access token when the current one expires.
                            It allows users to stay logged in without re-authenticating.
                            Refresh tokens have a longer lifespan compared to access tokens.
                            Storage on the client-side:

                            Access tokens and refresh tokens should be stored securely on the client-side.
                            They can be stored in browser storage mechanisms like localStorage or sessionStorage.
                            Encrypt or encode the tokens to enhance security.
                            Follow security best practices and prevent cross-site scripting (XSS) attacks.
                            Be aware that storing tokens on the client-side poses certain security risks, so implement proper security measures.</p>
                        {/* <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                {/* card2 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/RV8kWr7N/blog-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p>SQL databases, also known as relational databases, are structured databases that organize data into tables with predefined schemas. They use structured query language (SQL) to manage and manipulate data, allowing for complex data modeling and enforcing data integrity through ACID compliance. SQL databases are suitable for applications that require strict data consistency and complex queries.

                            On the other hand, NoSQL databases are non-structured databases that provide flexibility in data storage. They support various data formats such as key-value, document, columnar, or graph. NoSQL databases are highly scalable, allowing horizontal scaling by distributing data across multiple servers. They prioritize availability and partition tolerance over strict data consistency, making them ideal for handling large volumes of data and high traffic.</p>
                        {/* <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                {/* card3 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/DwXtsC65/blog-3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is express js? What is Nest JS?</h2>
                        <p>Express.js is a popular web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of creating server-side applications by offering a minimalist and unopinionated approach, allowing developers to structure their application according to their specific needs. It provides routing capabilities, middleware support, and integrates well with other modules and frameworks. Express.js is known for its simplicity, flexibility, and extensive ecosystem of plugins and extensions.

                            Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and leverages TypeScript as its primary programming language. Nest.js follows a modular and extensible architecture, allowing developers to organize their code into modules and utilize decorators for defining routes, controllers, and other components. It provides features like dependency injection, middleware support, built-in support for WebSockets, and integrates well with various databases and tools. Nest.js is designed to provide a structured and scalable approach to building server-side applications, with a focus on maintainability and developer productivity.Regenerate response</p>
                        {/* <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                {/* card-4 */}
                <div className="card w-full bg-base-100 shadow-2xl border-2 border-blue-800 p-5">
                    <figure><img className="h-[350px] rounded-lg" src="https://i.postimg.cc/9Xx5jwzP/blog-4.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
                        <p>MongoDB's aggregate function is a powerful feature that allows you to perform advanced data processing and aggregations on your data. It works by combining multiple stages in a pipeline to transform and analyze your data. Each stage performs a specific operation on the data and passes the result to the next stage. The stages can include filtering, grouping, sorting, projecting, and calculating aggregations. The aggregate function uses a JSON-like syntax to define the stages and processes them in order. It provides a flexible and efficient way to perform complex queries and calculations on your MongoDB data.The aggregate function in MongoDB uses a declarative syntax based on a JSON-like language called the Aggregation Pipeline. You define an array of stages, each containing an operation and its parameters, and MongoDB processes them in order.</p>
                        {/* <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;