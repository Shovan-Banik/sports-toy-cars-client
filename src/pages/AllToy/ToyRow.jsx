import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../providers/AuthProvider";

const ToyRow = ({ singleToy, index }) => {
    const { user } = useContext(AuthContext);
    const serial = index + 1;
    const { _id, image, sellerName, price, subCategory, name, availableQuantity } = singleToy;
    return (
        <tr>
            <td>{serial}</td>
            <td>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><Link to={`/viewDetails/${_id}`}><button onClick={() => {
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
            }} className="btn-sm btn-primary rounded">view Details</button></Link></td>
        </tr>
    );
};

export default ToyRow;