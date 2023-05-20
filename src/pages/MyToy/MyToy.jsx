import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from 'sweetalert2'

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

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/myToy/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  );
                  const remaining = myToys.filter(remainingToy => remainingToy._id !== id);
                  setMyToys(remaining);
                }
              })
          }
        });
      };
    
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
                            handleDelete={handleDelete}
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