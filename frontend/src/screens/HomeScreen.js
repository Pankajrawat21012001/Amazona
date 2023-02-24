// import data from '../data.js';
import { Link } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAILURE':
      return { ...state, error: action.payload, loading: false };
    default:
      return { state };
  }
};
function HomeScreen(params) {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.products });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
      // setProducts(result.data.products);
      // console.log(result.data.products);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>LOADING...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((products) => (
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
          ))
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
