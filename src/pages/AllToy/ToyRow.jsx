import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../providers/AuthProvider";

const ToyRow = ({ singleToy, index }) => {
    const { user } = useContext(AuthContext);
    const serial = index + 1;
    const { _id, image, sellerName, price, subCategory, name, availableQuantity } = singleToy;
    const navigate = useNavigate();

    const handleDetails = id => {
        // console.log(id);
        if (!user) {
            Swal.fire({
                title: "Access Denied",
                text: "Please login to view this page.",
                icon: "error",
                confirmButtonText: "OK",
            })
                .then(result => {
                    if (result.isConfirmed) {
                        navigate(`/viewDetails/${id}`);
                    }
                })
        }
        else {
            navigate(`/viewDetails/${id}`);
        }
    }
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
            <td><button onClick={() => handleDetails(_id)} className="btn btn-sm btn-primary">
                View Details
            </button></td>
        </tr>
    );
};

export default ToyRow;