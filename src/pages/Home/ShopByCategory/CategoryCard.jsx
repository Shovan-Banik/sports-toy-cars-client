import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const CategoryCard = ({ toy }) => {
    const { _id, image, name, price, rating } = toy;
    const { user } = useContext(AuthContext);

    return (
        <div className="card w-full bg-base-100 shadow-xl border relative group overflow-hidden">
            <figure>
                <img
                    className="h-[300px] transition-transform duration-300 transform-gpu group-hover:scale-105"
                    src={image}
                    alt="car"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <div><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></div>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}><button onClick={() => {
                        if (!user) {
                            // Show success SweetAlert notification
                            Swal.fire({
                                title: "Access Denied",
                                text: "Please login to view this page.",
                                icon: "error",
                                confirmButtonText: "OK",
                                timer: 10000,
                            });
                        }
                    }} className="btn btn-sm btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;