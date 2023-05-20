import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
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

        fetch('http://localhost:5000/addToy', {
            method: 'POST',
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
            <h2 className="font-bold text-blue-800 text-3xl my-5 text-center">Add Your Toy Please</h2>
            <div className="card-body">
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Name</span>
                            </label>
                            <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Available Quantity</span>
                            </label>
                            <input type="number" min={0} placeholder="Quantity" required name="quantity" className="input input-bordered" />
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
                            <input type="number" min={0} step="any" placeholder="Price" required name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Rating</span>
                            </label>
                            <input type="number" min={0} max={5} step="any" placeholder="Rating" required name="rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" required name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text font-bold text-blue-800"> Please select an option</span>
                            </label>
                            {/* <select required className="select input-bordered max-w-xs font-bold text-blue-800" name="subCategory">
                                <option disabled selected value=''>Sub-Category</option>
                                <option>bmw</option>
                                <option >marcidies</option>
                                <option >lamborgini</option>
                            </select> */}
                            <select
                                className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="subCategory"
                                required
                            >
                                <option disabled>
                                    Category
                                </option>
                                <option value="bmw">BMW</option>
                                <option value="marcidies">Mercedes</option>
                                <option value="lamborgini">Lamborghini</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" rows={4} required placeholder="Description" name="description"></textarea>
                        </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add a Toy</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
};

export default AddAToy;