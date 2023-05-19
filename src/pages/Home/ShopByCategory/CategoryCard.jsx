import { Link } from "react-router-dom";
const CategoryCard = ({ toy }) => {
    const { _id, image, name, price, rating } = toy;

    return (
        <div className="card w-full bg-base-100 shadow-2xl border relative group overflow-hidden">
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
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}><button className="btn btn-sm btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;