import data from '../data.js';
import { Link } from 'react-router-dom';

function HomeScreen(params) {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((products) => (
          <div className="product" key={products.slug}>
            <Link to={`/products/${products.slug}`}>
              <img src={products.images} alt={products.slug} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${products.slug}`}>
                <p>{products.name}</p>
              </Link>
              <p>
                <strong>${products.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
