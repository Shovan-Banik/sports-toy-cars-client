
const CategoryCard = ({ toy }) => {
    const { _id, image, name, price, rating } = toy;
    return (
        <div className="card w-full bg-base-100 shadow-2xl border relative group overflow-hidden">
            <figure>
                <img
                    className="h-[400px] transition-transform duration-300 transform-gpu group-hover:scale-105"
                    src={image}
                    alt="car"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;