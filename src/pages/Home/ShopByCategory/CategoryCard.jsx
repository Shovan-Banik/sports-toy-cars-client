import { Link } from "react-router-dom";
const CategoryCard = ({ toy }) => {
    const { _id, image, name, price, rating } = toy;

    const renderRatingStars = () => {
        const stars = [];
        const roundedRating = Math.round(rating * 10) / 10;
      
        for (let i = 1; i <= 5; i++) {
          const starClass =
            i <= roundedRating
              ? 'text-yellow-500'
              : i - 0.5 === roundedRating
              ? 'text-yellow-500'
              : 'text-gray-300';
          stars.push(<span key={i} className={starClass}>&#9733;</span>);
        }
      
        return stars;
      };

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
                <p>Rating: {renderRatingStars()}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}><button className="btn btn-sm btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;