import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">

      <div className="card product-card border-0 shadow-sm h-100">

        {/* IMAGE WRAPPER */}
        <div className="product-img-wrapper">
          <img
            className="card-img-top product-img"
            src={product.images[0].image}
            alt={product.name}
          />
        </div>

        {/* BODY */}
        <div className="card-body d-flex flex-column">

          {/* TITLE */}
          <h6 className="product-title">
            <Link to={"/product/" + product._id}>
              {product.name.length > 55
                ? product.name.substring(0, 55) + "..."
                : product.name}
            </Link>
          </h6>

          {/* RATING */}
          <div className="rating-outer my-2">
            <div
              className="rating-inner"
              style={{ width: `${(product.ratings / 5) * 100}%` }}
            ></div>
          </div>

          {/* PRICE */}
          <p className="product-price mb-3">
            ₹{product.price}
          </p>

          {/* BUTTON */}
          <Link
            to={"/product/" + product._id}
            className="btn product-btn mt-auto"
          >
            View Details
          </Link>

        </div>
      </div>

    </div>
  );
}