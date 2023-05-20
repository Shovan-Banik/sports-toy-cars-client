import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    const { name, availableQuantity, price, rating, image,description } = useLoaderData();
    console.log(name, availableQuantity);
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    useTitle('UpdateToy');

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const availableQuantity = form.quantity.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const subCategory = form.subCategory.value;

        const addToyObj = {
            name,
            availableQuantity,
            sellerName,
            sellerEmail,
            price,
            rating,
            image,
            description,
            subCategory
        }
        console.log(addToyObj);

        fetch(`http://localhost:5000/myUpdatedToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToyObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Updated Successfully!");
            })
    };
    return (
        <div className="md:w-2/3 mx-auto border-2 border-blue-800 p-4 mt-12 rounded-xl">
            <h2 className="font-bold text-blue-800 text-3xl my-5 text-center">Update Your Toy</h2>
            <div className="card-body">
                <form onSubmit={handleUpdateToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Name</span>
                            </label>
                            <input type="text" name="name" required readOnly defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Available Quantity</span>
                            </label>
                            <input type="number" min={0} defaultValue={availableQuantity} required name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" defaultValue={user?.displayName} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Seller Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} readOnly name="sellerEmail" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Price</span>
                            </label>
                            <input type="number" min={0} step="any" defaultValue={price} required name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Rating</span>
                            </label>
                            <input type="number" readOnly min={0} max={5} step="any" defaultValue={rating} required name="rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Photo URL</span>
                            </label>
                            <input type="url" readOnly name="image" defaultValue={image} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800"> Please select an option</span>
                            </label>
                            <select className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="subCategory" disabled>
                                <option disabled>
                                    Category
                                </option>
                                <option value="bmw">BMW</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="lamborghini">Lamborghini</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-blue-800">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" rows={4} required defaultValue={description} name="description"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Toy</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateToy;