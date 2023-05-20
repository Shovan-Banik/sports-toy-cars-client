import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
const MyToy = () => {
    const [myToys, setMyToys] = useState([]);

    const{user,loading}=useContext(AuthContext);

    useEffect(() => {
        // Fetch data from API
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error));
    }, [user?.email]);

    console.log(myToys);

    if(loading){
        return <div className="mt-12 flex justify-center"><progress className="progress w-56 mt-12"></progress>;</div>
    }
    return (
        <div>
            <div className="mt-5">
            <h2 className="text-3xl font-bold text-center text-blue-800 my-5">My Toys Table Data</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((myToy,index) => (
                            <MyToyRow
                            key={myToy._id}
                            myToy={myToy}
                            index={index}
                            ></MyToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyToy;