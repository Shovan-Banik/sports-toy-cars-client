import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])
    console.log(allToys);

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-blue-800 my-5">All Toys Table Data</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((singleToy) => (
                            <ToyRow key={singleToy._id} singleToy={singleToy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;