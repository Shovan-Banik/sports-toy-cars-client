import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyRow from "./ToyRow";

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    const[searchText,setSearchText]=useState("");

    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

   const handleSearch=()=>{

    fetch(`http://localhost:5000/productSearchByName/${searchText}`)
    .then(res=>res.json())
    .then(data=>{
        setAllToys(data);
    })
   }

    if (loading) {
        return <div className="mt-12 flex justify-center"><progress className="progress w-56 mt-12"></progress>;</div>
    }

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-blue-800 my-5">All Toys Table Data</h2>
            <div className="my-12">
                <div className="flex justify-center gap-2">
                    <input onChange={(e)=>setSearchText(e.target.value)} className="md:w-1/4 border-2 border-blue-800 rounded pl-2 h-12" placeholder="Search By Toy Name" type="search" name="" id="" />
                    <button onClick={handleSearch} className="btn btn-primary">search</button>
                </div>
            </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((singleToy, index) => (
                            <ToyRow key={singleToy._id} singleToy={singleToy} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;