import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from 'sweetalert2';
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sortedToys, setSortedToys] = useState([]);

  useTitle('MyToy');

  useEffect(() => {
    // Fetch data from API
    fetch(`https://sports-car-toys-zone.vercel.app/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
        setSortedToys(data);
      })
      .catch(error => console.error(error));
  }, [user]);

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
        fetch(`https://sports-car-toys-zone.vercel.app/myToy/${id}`, {
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
              setSortedToys(remaining);
            }
          })
      }
    });
  };

  const sortToysByPrice = (order) => {
    const sorted = [...sortedToys];

    if (order === 'ascending') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'descending') {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortOrder(order);
    setSortedToys(sorted);
  };

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-3xl font-bold text-center text-blue-800 my-5">My Toys Table Data</h2>
        <div className="flex justify-center gap-4 my-12">
          <h3 className="text-2xl font-bold">Sort By Price:</h3>
          <button className="btn btn-primary btn-sm" onClick={() => sortToysByPrice('ascending')}>
            Ascending
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => sortToysByPrice('descending')}>
            Descending
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Photo</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sortedToys.map((myToy, index) => (
                <MyToyRow
                  key={myToy._id}
                  myToy={myToy}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
